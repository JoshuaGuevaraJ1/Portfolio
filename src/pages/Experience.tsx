// Experience.tsx
"use client";

// Components
import { HRTrimmed, List, ListItem, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle, } from "flowbite-react";

// Hooks
import { useIsVisible } from "../hooks/useIsVisible";

// Timeline items for each experience
const timelineItems = [
    {
        date: "Enero 2023 - Junio 2023",
        title: "Servicio Social en Centro de Cómputo",
        company: "Instituto Tecnológico de Apizaco",
        description: [
            "Desarrollo de Sistemas de Información,",
            "Soporte y Mantenimiento de infraestructura,",
            "Desarrollo de Manuales de Usuario de sistemas de información."
        ]
    },
    {
        date: "Enero 2024 - Junio 2024",
        title: "Practicante en Oficina de Sistemas y Computación",
        company: "Miracle Business Network S.A. de C.V.",
        description: [
            "Gestión y Mantenimiento del sitio web,",
            "Soporte técnico interno,",
            "Mantenimiento de la infraestructura de la red."
        ]
    }
];

export const Experience: React.FC = () => {
    
    return (
        <section id="experience">
            <h2><span className="me-2 text-2xl">💼</span><br/>Experiencia</h2>
            <HRTrimmed />

            <Timeline horizontal>
                {timelineItems.map((item, index) => (
                    <ItemDate key={index} item={item} />
                ))}
            </Timeline>
        </section>
    );
}

type Items = {
    date: string;
    title: string;
    company: string;
    description: string[];
}

const ItemDate: React.FC<{ item: Items }> = ({ item }) => {
    const { ref, isVisible } = useIsVisible<HTMLLIElement>({ threshold: 0.2 });

    return (
        <TimelineItem ref={ref} className={`transition-all ease-in-out ${isVisible ? 'opacity-100 scale-100':'opacity-0 scale-0'}`}>
            <TimelinePoint icon={() => <p>💼 </p>} />
            <TimelineContent>
                <TimelineTime>{item.date}</TimelineTime>
                <TimelineTitle>{item.title} <i className='text-gray-800 dark:text-gray-100'>{item.company}</i></TimelineTitle>
                <TimelineBody>
                    <List>
                        {item.description.map((desc, index) => (
                            <ListItem key={index}>{desc}</ListItem>
                        ))}
                    </List>
                </TimelineBody>
            </TimelineContent>
        </TimelineItem>
    )
};