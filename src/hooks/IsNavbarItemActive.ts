// IsNavbarItemActive.ts
import React from "react";

// This hook is used to determine which navbar item is currently active based on the section in view.
export const useIsNavbarItemActive = () => {
    const [activeLinks, setActiveLinks] = React.useState<string[]>([]);
    
    React.useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting) { // Check if the section is in view
                    // Add the section ID to the active links if it's not already there
                    setActiveLinks((prev) => {
                    if (!prev.includes(sectionId)) {
                        return [...prev, sectionId];
                    }
                    return prev;
                    });
                } else {
                    setActiveLinks((prev) => prev.filter(id => id !== sectionId)); // Remove the section ID if it's not in view
                }
            });
        }, { threshold: 0.2 });

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);
    return activeLinks;
};