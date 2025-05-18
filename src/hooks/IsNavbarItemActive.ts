// IsNavbarItemActive.ts
import React from "react";

// This hook is used to determine which navbar item is currently active based on the section in view.
export const useIsNavbarItemActive = () => {
    const [activeLinks, setActiveLinks] = React.useState<Set<string>>(new Set());
    
    React.useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            const newActiveLinks = new Set(activeLinks);
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting) { // Check if the section is in view
                    // Add the section ID to the active links if it's not already there
                    newActiveLinks.add(sectionId);
                } else {
                    newActiveLinks.delete(sectionId); // Remove the section ID if it's not in view
                }
            });
            if (newActiveLinks.size !== activeLinks.size) {
                setActiveLinks(newActiveLinks);
            }
        }, { threshold: 0.2 });

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, [activeLinks]);
    return Array.from(activeLinks);
};