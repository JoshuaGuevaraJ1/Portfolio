// Navbar.tsx
"use client";

// // Modules
import React from "react";

// Components
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

// Hooks
import { useIsNavbarItemActive } from "../hooks/IsNavbarItemActive";
import { SettingsIcon } from "../icons/Icons";
import { ModalSettings } from "./ModalSettings";

interface NavBarProps {
  animation: boolean;
  setAnimation: (animation: boolean) => void;
  blurCircles: boolean;
  setBlurCircles: (blurCircles: boolean) => void;
  grayscale: boolean;
  setGrayscale: (grayscale: boolean) => void;
}


export const NavBar: React.FC<NavBarProps> = ({animation, setAnimation, blurCircles, setBlurCircles, grayscale, setGrayscale}) => {
  const activeLinks = useIsNavbarItemActive();

  const [isOpenModal, setIsOpenModal] = React.useState(false);

  // Define the items for the navbar
  const items = [
      { name: "Inicio", href: "#hero", label: "hero" },
      { name: "Sobre mí", href: "#about", label: "about" },
      { name: "Tecnologías", href: "#technologies", label: "technologies" },
      { name: "Proyectos", href: "#projects", label: "projects" },
      { name: "Experiencia", href: "#experience", label: "experience" },
      { name: "Contacto", href: "#contact", label: "contact" },
  ]

  return(
    <>
    <Navbar border applyTheme={{ root: { bordered: "replace" } }} className={grayscale ? 'grayscale' : ''}>
      <NavbarBrand href="#hero">
        Joshua Guevara
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <button onClick={() => setIsOpenModal(true)} className="animate-spinonce text-gray-500 dark:text-gray-400 rounded-lg p-px hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-700"><SettingsIcon  /></button>
        <NavbarToggle />
      </div>
      <NavbarCollapse applyTheme={{ hidden: { on: "replace" } }}>

        {/* Map through the items and create NavbarLink components */}
        {items.map((item, index) => (
          <NavbarLink key={index} href={item.href} active={activeLinks.includes(item.label)}  applyTheme={{ active: { off: "replace" } }}>
            <span className={`transition-all ${activeLinks.includes(item.label) ? 'text-xl md:text-lg' : ''}`}>{item.name}</span>
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
    <ModalSettings openModal={isOpenModal} setOpenModal={setIsOpenModal} animation={animation} setAnimation={setAnimation} grayscale={grayscale} setGrayscale={setGrayscale} blurCircles={blurCircles} setBlurCircles={setBlurCircles}/>
    </>
  );
};