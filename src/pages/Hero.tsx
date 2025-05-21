// Hero.tsx
"use client";

// Modules
import React from 'react';

// Hooks
import { useIsVisible } from '../hooks/useIsVisible';

// Assets
import img from '../assets/profile.jpg';

export const Hero: React.FC = () => {
    const { ref: refMission, isVisible: isMissionVisible } = useIsVisible<HTMLDivElement>({ threshold: 0.2 });
    const { ref: refMobileProfile, isVisible: isMobileProfileVisible } = useIsVisible<HTMLDivElement>({ threshold: 0.2 });
    const { ref: refDesktopProfile, isVisible: isDesktopProfileVisible } = useIsVisible<HTMLDivElement>({ threshold: 0.2 });
    console.log(isMobileProfileVisible);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center mt-22 md:mt-0">
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <div className="flex flex-col lg:w-3/4 md:w-2/3 gap-4">
                    <div className="h-auto">
                        <h1>¡Hola!, <span className='lg:text-7xl text-4xl'>Soy Joshua </span><span className='animate-wave lg:text-7xl text-4xl'>👋</span></h1>
                        <p className='mt-2 lg:text-lg text-sm text-left'>
                            Explorando nuevas ideas de diseño para mejorar la experiencia de usuario con tecnologías como HTML, CSS, JavaScript y frameworks modernos como React. Crecer profesionalmente mientras aporto valor en cada proyecto.
                        </p>
                    </div>
                    <div className="relative">
                        <div 
                            ref={refMobileProfile} 
                            aria-hidden="true" 
                            className={`md:hidden relative bottom-0 right-0 z-0 h-[600px] w-full rounded-2xl bg-cover bg-bottom shadow-md transition-all ease-in-out duration-700 ${isMobileProfileVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} 
                            style={{ backgroundImage: `url(${img})` }}
                        />
                        <div 
                            ref={refMission} 
                            className={`transition-all ease-in-out duration-700 absolute md:relative bottom-0 z-10 p-5 m-3 md:m-0 bg-white/40 dark:bg-gray-800/50 md:backdrop-blur-none backdrop-blur-2xl rounded-2xl border border-white/50 dark:border-gray-700/50 shadow-md ${isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                        >
                            <h5>🚀 Misión</h5>
                            <p className='text-base md:text-lg'>Crear interfaces web modernas, accesibles y centradas en el usuario que generen experiencias memorables y eficientes, aplicando buenas prácticas de diseño y desarrollo frontend.</p>
                        </div>
                    </div>
                </div>
                        
                <div 
                    ref={refDesktopProfile} 
                    className={`hidden md:block lg:w-1/4 md:w-1/3 transition-all ease-in-out duration-700 ${isDesktopProfileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-full'}`}
                >
                    <div 
                        aria-hidden="true" 
                        className="h-full min-h-[400px] rounded-2xl bg-cover bg-center shadow-md" 
                        style={{ backgroundImage: `url(${img})` }}
                    />
                </div>
            </div>
        </section>
    );
};