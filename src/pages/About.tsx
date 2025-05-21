// About.tsx
"use client";

// Modules
import { Button, HRTrimmed } from "flowbite-react";

// Components
import {ArrowToRightIcon, GitHubIcon} from "../icons/Icons";

// Hooks
import { useIsVisible  } from "../hooks/useIsVisible";

// Assets
import pdf from "../assets/CV_Joshua.pdf";

export const About: React.FC = () => {
    const { ref, isVisible } = useIsVisible<HTMLDivElement>({ threshold: 0.2 });

    // data for each line of the info card
    const cardInfo = [
        { id: 1, content: "datacard.json", color: "text-white", type: "text" },
        { id: 2, content: "{", color: "text-red-400", type: "text" },
        { id: 3, prefix: '"name":', content: '"@joshua_guevara"', color: "text-amber-300"},
        { id: 4, prefix: '"title":', content: '"Ing. TICs"', color: "text-green-400"},
        { id: 5, prefix: '"email":', content: '"joguevara84@gmail.com"', color: "text-cyan-300"},
        { id: 6, prefix: '"link":', content: '"joshuaguevara.free.nf"', color: "text-blue-300"},
        { id: 7, content: "}", color: "text-red-400", type: "text" }
    ];

    return (
        <section id="about">
            <h2><span className="me-2 text-2xl">👷</span><br/>Sobre mí</h2>
            <HRTrimmed />
            <div className="flex lg:flex-row flex-col gap-4">
                <div className='space-y-4 w-full lg:w-2/4'>
                    <p>Mi primer proyecto web fue un CRUD realizado en HTML, CSS, un poco de JavaScript y Php.</p>
                    <p>Este proyecto me impulsó a querer aprender sobre el desarrollo Frontend. Con el paso del tiempo empecé a desarrollar proyectos web donde enfatizaba en el diseño, además del backend.</p>
                    <p>He utilizado frameworks frontend como Bootstrap y React junto a TilwindCSS, y frameworks Backend como DJango.</p>
                    
                    <div className='flex'>
                        <Button href='https://github.com/JoshuaGuevaraJ1' className='group'>
                            <span className="animate-jumps group-hover:animate-none"><GitHubIcon /></span>
                            <span className='ms-4 me-auto'>Visitame en GitHub</span>
                            <span className='ms-4 group-hover:translate-x-2 transition-transform ease-in-out'><ArrowToRightIcon /></span>
                        </Button>
                    </div>
                </div>
                <div ref={ref} className={`font-courier w-full lg:w-2/4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/30 rounded-xl overflow-hidden shadow-md transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-x-0': 'opacity-0 translate-x-20'}`}>
                    <div className="bg-gray-900 px-6 py-2 border-b border-gray-700 flex items-center">
                        <div className="flex space-x-2">
                        {['bg-red-500', 'bg-amber-400', 'bg-green-500'].map((color) => (
                            <div key={color} className={`w-3 h-3 rounded-full ${color}`}></div>
                        ))}
                        </div>
                        <span className="text-gray-400 ml-4 text-sm">datacard.json</span>
                    </div>
      
                    <div className="p-6 text-[13px] md:text-lg">
                        <div className="space-y-1 text-gray-300 overflow-auto">
                            {cardInfo.map(renderCardInfo)}
                        </div>
                        <Button href={pdf} aria-label="Descargar CV de Joshua Guevara" className="hover:scale-105 mt-8 inline-block w-full bg-gray-700 hover:bg-gray-600 text-white text-center py-3 px-4 rounded-lg shadow">
                        Descargar CV
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}


type CardInfo = {
    id: number;
    content: string;
    color: string;
    type?: string;
    prefix?: string;
  };

const renderCardInfo = (line: CardInfo) => {
    return (
        <div key={line.id} className="flex">
            <span className="text-blue-400 mr-2">{line.id}</span>
            {line.prefix && (
                <span className="ms-3 md:ms-8 text-purple-400">{line.prefix}</span>
            )}
            {line.type === 'text' ? (
                <span className={line.color}>{line.content}</span>
            ) : (
                <span className={`${line.color} ms-1 md:ms-2`}>
                    <span>{line.content}</span>
                </span>
            )}
        </div>
    );
}