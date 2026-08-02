
import contact from "@portfolio/data/contact.json";

import { Hyperlink } from "@portfolio/components/hyperlink";
import { ImageMenuItem } from "@portfolio/components/image-menu-item";

export function Contact() {
    return (
        <ul>
            {contact.map((item, index: number) => (
                <ImageMenuItem key={index} image={item.icon} description={item.value}>
                    <Hyperlink href={item.link}>{item.value}</Hyperlink>
                </ImageMenuItem>
            ))}
        </ul>
    );
}
