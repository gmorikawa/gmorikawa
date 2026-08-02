import { HomeIcon, ProjectIcon, SkillIcon } from "@portfolio/common/icons";
import { ActionMenuItem } from "@portfolio/components/action-menu-item";
import { NavigationMenu } from "@portfolio/components/navigation-menu";

export function ApplicationMenu() {
    return (
        <NavigationMenu>
            <ActionMenuItem link="/" icon={<HomeIcon />} label={"Home"} className="mb-2" />
            <ActionMenuItem link="/skills" icon={<SkillIcon />} label={"Skills"} className="mb-2" />
            <ActionMenuItem link="/projects" icon={<ProjectIcon />} label={"Projects"} className="mb-2" />
        </NavigationMenu>
    )
}