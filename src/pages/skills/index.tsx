import { MainContainer } from "@portfolio/components/main-container";
import data from "@portfolio/data/skills.json";

import { Logo } from "./logo";
import { LogoContainer } from "./logo-container";
import { ToolsContainer } from "./tools-container";

interface Tool {
    label: string;
    icon: string;
}

export function Skills() {
    const programmingLanguages: Tool[] = data["programming-languages"];
    const databases: Tool[] = data["databases"];
    const frameworks: Tool[] = data["frameworks"];
    const devops: Tool[] = data["devops"];

    return (
        <MainContainer>
            <ToolsContainer title="Programming Languages">
                <LogoContainer>
                    {programmingLanguages?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>

            <ToolsContainer title="Databases">
                <LogoContainer>
                    {databases?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>

            <ToolsContainer title="Frameworks">
                <LogoContainer>
                    {frameworks?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>

            <ToolsContainer title="DevOps">
                <LogoContainer>
                    {devops?.map((skill: Tool) => (
                        <Logo key={skill?.label} src={skill?.icon} label={skill?.label} />
                    ))}
                </LogoContainer>
            </ToolsContainer>
        </MainContainer>
    );
}
