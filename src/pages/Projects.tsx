// Projects.tsx
"use client";

// Components
import { Badge, HRTrimmed } from "flowbite-react";
import { AxiosIcon, BootstrapIcon, DJangoIcon, MySQLIcon, PhpIcon, ReactIcon, TailwindCSSIcon } from "../icons/Icons";

// Assets
import Project1img from '../assets/SistemaEscolar.png';
import Project2img from '../assets/GanaderiaSoft.png';
import Project3img from '../assets/GanaderiaSoftDjangoReact.png';

// Projects data
const projects = [
    {
        title: "Sistema de Control Escolar",
        description: "Primer proyecto de CRUD de un sistema de control escolar desarrollado en Php, diseño neumorfístico y MySQL como Base de Datos.",
        image: Project1img,
        technologies: [{
            name: "Php", icon: <PhpIcon height={20} width={20} />}, 
            {name: "MySQL", icon: <MySQLIcon height={20} width={20} />}
        ],
        date: "Enero 2023 - Junio 2023"
    },
    {
        title: "GanaderíaSoft",
        description: "Gestión y control de ganado a través de un aretado con tecnología RFID.",
        image: Project2img,
        technologies: [
            {name: "Django", icon: <DJangoIcon height={20} width={20} />}, 
            {name: "Bootstrap", icon: <BootstrapIcon height={20} width={20} />}
        ],
        date: "Agosto 2023 - Diciembre 2023"
    },
    {
        title: "GanaderíaSoft Django React",
        description: "Un proyecto personal basado en mejorar a GanaderiaSoft implementando Django como Backend y React como Frontend, además de implementar Axios para la comunicación con la API.",
        image: Project3img,
        technologies: [
            {name: "Django", icon: <DJangoIcon height={20} width={20} />}, 
            {name: "React", icon: <ReactIcon height={20} width={20} />}, 
            {name: "TailwindCSS", icon: <TailwindCSSIcon height={20} width={20} />}, 
            {name: "Axios", icon: <AxiosIcon height={20} width={20} />}
        ],
        date: "Enero 2025 - Presente"
    }
]


export const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2><span className="me-2 text-2xl">📄</span><br/>Proyectos</h2>
            <HRTrimmed />

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className='w-full rounded-2xl shadow-md overflow-hidden group bg-white/20 dark:bg-gray-800/30 border border-white/30 dark:border-gray-700/30'>
                        <img src={project.image}
                            alt={`Pantalla de un proyecto de ${project.title}`}
                            className="w-full mask-b-from-80% md:mask-b-from-40% mask-b-to-100% dark:brightness-80"
                        />
                        <div className="p-4">
                            <div className='flex flex-wrap gap-2 justify-start mb-2'>
                                {project.technologies.map((tech, index) => (
                                    <Badge key={index} icon={() => tech.icon}>{tech.name}</Badge>
                                ))}
                            </div>
                            <div>
                            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">{project.title}</h3>
                            <h4 className="text-sm text-gray-600 dark:text-gray-300 italic"><span className="not-italic">📅 </span>{project.date}</h4>
                            <p className="text-gray-900 dark:text-gray-400 mt-2">
                                {project.description}
                            </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}