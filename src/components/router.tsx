import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";

export interface RouterRoute {
    path: string;
    element: React.ReactNode;
}

export interface NavigateOptions {
    replace?: boolean;
}

export interface RouterProps {
    routes: RouterRoute[];
    notFound?: React.ReactNode;
}

export interface RouterContextValue {
    currentPath: string;
    navigate: (path: string, options?: NavigateOptions) => void;
}

export interface LinkProps extends Omit<React.ComponentProps<"a">, "href"> {
    to: string;
}

const REDIRECT_QUERY_PARAM = "p";

const RouterContext = createContext<RouterContextValue | null>(null);

function normalizePath(path: string): string {
    if (!path) {
        return "/";
    }

    const leadingSlash = path.startsWith("/") ? path : `/${path}`;
    if (leadingSlash === "/") {
        return leadingSlash;
    }

    return leadingSlash.replace(/\/+$/, "");
}

function getCurrentPath(): string {
    return normalizePath(window.location.pathname);
}

function restoreRedirectedPath(): string | null {
    const params = new URLSearchParams(window.location.search);
    const redirectedPath = params.get(REDIRECT_QUERY_PARAM);

    if (!redirectedPath) {
        return null;
    }

    const redirectUrl = new URL(redirectedPath, window.location.origin);
    const normalizedPath = normalizePath(redirectUrl.pathname);
    const restoredTarget = `${normalizedPath}${redirectUrl.search}${redirectUrl.hash}`;

    window.history.replaceState(window.history.state, "", restoredTarget);
    return normalizedPath;
}

export function Router({ routes, notFound = null }: RouterProps) {
    const [currentPath, setCurrentPath] = useState(() => {
        if (typeof window === "undefined") {
            return "/";
        }

        return getCurrentPath();
    });

    useEffect(() => {
        const restoredPath = restoreRedirectedPath();
        if (restoredPath) {
            setCurrentPath(restoredPath);
        }

        const onPopState = () => {
            setCurrentPath(getCurrentPath());
        };

        window.addEventListener("popstate", onPopState);
        return () => {
            window.removeEventListener("popstate", onPopState);
        };
    }, []);

    const navigate = useCallback((path: string, options?: NavigateOptions) => {
        const normalizedPath = normalizePath(path);
        const stateSetter = options?.replace ? "replaceState" : "pushState";

        if (normalizedPath === getCurrentPath()) {
            return;
        }

        window.history[stateSetter](window.history.state, "", normalizedPath);
        setCurrentPath(normalizedPath);
    }, []);

    const context = useMemo<RouterContextValue>(() => {
        return { currentPath, navigate };
    }, [currentPath, navigate]);

    const activeRoute = routes.find((route) => normalizePath(route.path) === currentPath);

    return (
        <RouterContext.Provider value={context}>
            {activeRoute?.element ?? notFound}
        </RouterContext.Provider>
    );
}

export function useRouter() {
    const context = useContext(RouterContext);

    if (!context) {
        throw new Error("useRouter must be used inside Router.");
    }

    return context;
}

function shouldHandleClientNavigation(event: React.MouseEvent<HTMLAnchorElement>): boolean {
    return !(
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
    );
}

export function Link({ to, onClick, target, rel, ...props }: LinkProps) {
    const { navigate } = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);

        if (!shouldHandleClientNavigation(event)) {
            return;
        }

        if (target && target !== "_self") {
            return;
        }

        if (rel?.includes("external")) {
            return;
        }

        event.preventDefault();
        navigate(to);
    };

    return <a {...props} href={to} target={target} rel={rel} onClick={handleClick} />;
}
