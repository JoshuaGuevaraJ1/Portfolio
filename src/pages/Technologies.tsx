// Technologies.tsx
"use client";

// Components
import { Badge, HRTrimmed } from "flowbite-react";
import { AxiosIcon, BootstrapIcon, CSSIcon, DJangoIcon, GitHubIcon, GitIcon, HTMLIcon, JavaScriptIcon, PhpIcon, PythonIcon, ReactIcon, TailwindCSSIcon, VSCodeIcon } from "../icons/Icons";

// Hooks
import { useIsVisible } from "../hooks/useIsVisible";

// Array of technologies with their names and icons
const technologies = [
    { name: "React", icon: <ReactIcon />, delay: 'delay-0' },
    { name: "TailwindCSS", icon: <TailwindCSSIcon />, delay: 'delay-100' },
    { name: "JavaScript", icon: <JavaScriptIcon />, delay: 'delay-100'  },
    { name: "Php", icon: <PhpIcon />, delay: 'delay-200'  },
    { name: "DJango", icon: <DJangoIcon />, delay: 'delay-300'  },
    { name: "HTML", icon: <HTMLIcon />, delay: 'delay-400'  },
    { name: "CSS", icon: <CSSIcon />, delay: 'delay-500'  },
    { name: "VSCode", icon: <VSCodeIcon />, delay: 'delay-600'  },
    { name: "Bootstrap", icon: <BootstrapIcon />, delay: 'delay-700'  },
    { name: "Python", icon: <PythonIcon />, delay: 'delay-800'  },
    { name: "Git", icon: <GitIcon />, delay: 'delay-900'  },
    { name: "GitHub", icon: <GitHubIcon />, delay: 'delay-1000'  },
    { name: "Axios", icon: <AxiosIcon />, delay: 'delay-1100'  }
];


export const Technologies: React.FC = () => {
    return (
        <section id="technologies">
            <h2><span className="me-2 text-2xl">🌐</span><br/>Tecnologías</h2>
            <HRTrimmed />

            <div className='flex flex-wrap gap-6 p-8 justify-center rounded-2xl'>
                {technologies.map((tech, index) => (
                    <Technology key={index} tech={tech} />
                ))}
            </div>

        </section>
    );
}

type TechnologyType = {
    name: string;
    icon: React.ReactNode;
    delay: string;
}

const Technology: React.FC<{ tech: TechnologyType }> = ({ tech }) => {
    const { ref, isVisible } = useIsVisible<HTMLDivElement>({ threshold: 0.05 });

    return (
        <div className={isVisible ? `transition-all transform ease-in-out duration-500 opacity-100 translate-y-0 ${tech.delay}`: `opacity-0 translate-y-10`}>
            <Badge ref={ref} icon={() => tech.icon}>{tech.name}</Badge>
        </div>
    )
};