// Technologies.tsx
"use client";

// Components
import { Badge, HRTrimmed } from "flowbite-react";
import { AxiosIcon, BootstrapIcon, CSSIcon, DJangoIcon, GitHubIcon, GitIcon, HTMLIcon, JavaScriptIcon, PhpIcon, PythonIcon, ReactIcon, TailwindCSSIcon, VSCodeIcon } from "../icons/Icons";

// Array of technologies with their names and icons
const technologies = [
    { name: "React", icon: <ReactIcon /> },
    { name: "TailwindCSS", icon: <TailwindCSSIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "Php", icon: <PhpIcon /> },
    { name: "DJango", icon: <DJangoIcon /> },
    { name: "HTML", icon: <HTMLIcon /> },
    { name: "CSS", icon: <CSSIcon /> },
    { name: "VSCode", icon: <VSCodeIcon /> },
    { name: "Bootstrap", icon: <BootstrapIcon /> },
    { name: "Python", icon: <PythonIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "GitHub", icon: <GitHubIcon /> },
    { name: "Axios", icon: <AxiosIcon /> }
];


export const Technologies: React.FC = () => {
    return (
        <section id="technologies">
            <h2><span className="me-2 text-2xl">🌐</span><br/>Tecnologías</h2>
            <HRTrimmed />

            <div className='flex flex-wrap gap-6 p-8 justify-center'>
                {technologies.map((tech) => (
                    <Badge key={tech.name} icon={() => tech.icon}>{tech.name}</Badge>
                ))}
            </div>

        </section>
    );
}