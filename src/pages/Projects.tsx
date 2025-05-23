// Projects.tsx
"use client";

import React from "react";
import { Badge, HRTrimmed } from "flowbite-react";
import {
  AxiosIcon,
  BootstrapIcon,
  DJangoIcon,
  MySQLIcon,
  PhpIcon,
  ReactIcon,
  TailwindCSSIcon,
} from "../icons/Icons";

// Assets
import Project1img from "../assets/SistemaEscolar.png";
import Project2img from "../assets/GanaderiaSoft.png";
import Project3img from "../assets/GanaderiaSoftDjangoReact.png";

// Hooks
import { useIsVisible } from "../hooks/useIsVisible";

// Projects data
const projects = [
  {
    title: "Sistema de Control Escolar",
    description:
      "Primer proyecto de CRUD de un sistema de control escolar desarrollado en Php, diseño neumorfístico y MySQL como Base de Datos.",
    image: Project1img,
    technologies: [
      { name: "Php", icon: <PhpIcon height={20} width={20} />, delay: "delay-0" },
      { name: "MySQL", icon: <MySQLIcon height={20} width={20} />, delay: "delay-100" },
    ],
    date: "Enero 2023 - Junio 2023",
  },
  {
    title: "GanaderíaSoft",
    description: "Gestión y control de ganado a través de un aretado con tecnología RFID.",
    image: Project2img,
    technologies: [
      { name: "Django", icon: <DJangoIcon height={20} width={20} />, delay: "delay-0" },
      { name: "Bootstrap", icon: <BootstrapIcon height={20} width={20} />, delay: "delay-100" },
    ],
    date: "Agosto 2023 - Diciembre 2023",
  },
  {
    title: "GanaderíaSoft Django React",
    description:
      "Un proyecto personal basado en mejorar a GanaderiaSoft implementando Django como Backend y React como Frontend, además de implementar Axios para la comunicación con la API.",
    image: Project3img,
    technologies: [
      { name: "Django", icon: <DJangoIcon height={20} width={20} />, delay: "delay-0" },
      { name: "React", icon: <ReactIcon height={20} width={20} />, delay: "delay-100" },
      { name: "TailwindCSS", icon: <TailwindCSSIcon height={20} width={20} />, delay: "delay-200" },
      { name: "Axios", icon: <AxiosIcon height={20} width={20} />, delay: "delay-300" },
    ],
    date: "Enero 2025 - Presente",
  },
];

export const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2>
                <span className="me-2 text-2xl">📄</span>
                <br />
                Proyectos
            </h2>
            <HRTrimmed />
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

type Project = {
    title: string;
    description: string;
    image: string;
    technologies: {
        name: string;
        icon: React.ReactNode;
        delay: string;
    }[];
    date: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { ref, isVisible } = useIsVisible<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
        ref={ref}
        className={`transition-all duration-700 ease-in-out transform 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            w-full rounded-2xl shadow-md overflow-hidden bg-white/20 dark:bg-gray-800/30 border border-white/30 dark:border-gray-700/30`}
        >
        <img
            src={project.image}
            alt={`Pantalla de un proyecto de ${project.title}`}
            className="w-full mask-b-from-80% md:mask-b-from-40% mask-b-to-100% dark:brightness-80"
        />
        <div className="p-4">
            <div className="flex flex-wrap gap-2 justify-start mb-2">
                {project.technologies.map((tech, i) => (
                    <BadgeVisible key={i} name={tech.name} icon={tech.icon} delay={tech.delay} />
                ))}
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">{project.title}</h3>
            <h4 className="text-sm text-gray-600 dark:text-gray-300 italic">
            <span className="not-italic">📅 </span>{project.date}
            </h4>
            <p className="text-gray-900 dark:text-gray-400 mt-2">{project.description}</p>
        </div>
        </div>
    );
};

type BadgeVisibleProps = {
  name: string;
  icon: React.ReactNode;
  delay: string;
};

const BadgeVisible: React.FC<BadgeVisibleProps> = ({ name, icon, delay }) => {
  const { ref, isVisible } = useIsVisible<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-in-out transform ${
        isVisible ? `opacity-100 translate-y-0 ${delay}` : "opacity-0 translate-y-8"
      }`}
    >
      <Badge icon={() => icon}>{name}</Badge>
    </div>
  );
};
