// Navbar.tsx
"use client";

// // Modules
import React from "react";

// Components
import {  Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

// Hooks
import { useIsNavbarItemActive } from "../hooks/IsNavbarItemActive";

export const NavBar: React.FC = () => {
  const activeLinks = useIsNavbarItemActive();

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
    <Navbar border applyTheme={{ root: {bordered: "replace"} }}>
        <NavbarBrand href="#hero">
            <span className="text-gray-800 dark:text-gray-200 font-semibold">Joshua Guevara</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <NavbarToggle />
        </div>
        <NavbarCollapse applyTheme={{ hidden: {on: "replace"}}}>
          
          {/* Map through the items and create NavbarLink components */}
          {items.map((item, index) => (
            <NavbarLink key={index} href={item.href} active={activeLinks.includes(item.label)} className="text-gray-800 dark:text-gray-200" applyTheme={{ active: {off: "replace"}}}>
                <span className={`transition-all ${activeLinks.includes(item.label) ? 'text-xl md:text-lg' : ''}`}>{item.name}</span>
            </NavbarLink>
          ))}
        </NavbarCollapse>
    </Navbar>
  );
};