// Contact.tsx
"use client";

// Modules
import React from "react";

// Components
import { Button, HRTrimmed, Label, Textarea, TextInput } from "flowbite-react";

export const Contact: React.FC = () => {
    // Form state
    const [form, setForm] = React.useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    // Handle form change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Convert form data to mailto link
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Nuevo mensaje de ${form.nombre}`);
        const body = encodeURIComponent(`Nombre: ${form.nombre}\nCorreo: ${form.email}\n\n${form.mensaje}`);
        const mailtoLink = `mailto:joguevara84@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact">
            <h2><span className="me-2 text-2xl">📧</span><br/>Contáctame</h2>
            <HRTrimmed />

            <p className='text-gray-900 dark:text-gray-100 mb-4'>Siempre hay algo nuevo que aprender y algo nuevo que emprender, o simplemente envíame un saludo.</p>
                <div className="w-full mx-auto rounded-xl p-8 border border-white dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-2xl shadow-md">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        
                        {/* Nombre */}
                        <div>
                            <Label className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">Nombre</Label>
                            <TextInput 
                                type="text" 
                                name="nombre" 
                                placeholder="Tu nombre" 
                                required
                                value={form.nombre}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div>
                            <Label className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">Correo</Label>
                            <TextInput 
                                type="email" 
                                name="email" 
                                placeholder="tucorreo@ejemplo.com" 
                                required
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
    
                        <div className="md:col-span-2" >
                            <Label className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">Mensaje</Label>
                            <Textarea 
                                name="mensaje" 
                                rows={5}
                                placeholder="Escríbeme algo..." 
                                required
                                value={form.mensaje}
                                onChange={handleChange}
                            ></Textarea>
                        </div>
    
                        <div className="md:col-span-2 ml-auto" >
                            <Button type="submit" className='group'>
                                <span className="inline-block transition-all duration-300 group-hover:translate-x-3 opacity-100 ">
                                    Enviar mensaje
                                </span>
                                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 -translate-x-full opacity-0 group-hover:-translate-x-13 group-hover:opacity-100">
                                    📤
                                </div>
                            </Button>
                        </div>
                    </form>
                </div>
        </section>
    );
}