// Contact.tsx
"use client";

// Modules
import React from "react";

// Components
import { Button, HRTrimmed, Label, Spinner, Textarea, TextInput } from "flowbite-react";
import { SendEmailIcon } from "../icons/Icons";

export const Contact: React.FC = () => {
    const [loading, setLoading] = React.useState(false);


    // Form state
    const [form, setForm] = React.useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [touched, setTouched] = React.useState({
        nombre: false,
        mensaje: false,
        email: false,
      });

    // Handle form change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        setForm((prev) => ({
          ...prev,
          [name]: value
        }));
    
        // Marcar como tocado
        if (!touched[name as keyof typeof touched]) {
          setTouched((prev) => ({
            ...prev,
            [name]: true,
          }));
        }
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
      const isNombreValid = form.nombre.trim().length > 0;
      const isMessageValid = form.mensaje.trim().length > 0;
      const isEmailValid = validateEmail(form.email);
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        const subject = encodeURIComponent(`Nuevo mensaje de ${form.nombre}`);
        const body = encodeURIComponent(`Nombre: ${form.nombre}\nCorreo: ${form.email}\n\n${form.mensaje}`);
        
        setTimeout(() => {
            window.location.href = `mailto:joguevara84@gmail.com?subject=${subject}&body=${body}`;
            setLoading(false);
          }, 500);
      };

    return (
        <section id="contact">
            <h2><span className="me-2 text-2xl">📧</span><br/>Contáctame</h2>
            <HRTrimmed />

            <p className='text-gray-900 dark:text-gray-100 mb-4'>Siempre hay algo nuevo que aprender y algo nuevo que emprender, o simplemente envíame un saludo.</p>
                <div className="w-full mx-auto rounded-xl p-8 border border-white dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 shadow-md">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        
                        {/* Nombre */}
                        <div>
                            <Label htmlFor="nombre" className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">Nombre<span className="text-red-600 ms-px">*</span></Label>
                            <TextInput 
                                id="nombre"
                                type="text" 
                                name="nombre" 
                                placeholder="Tu nombre" 
                                required
                                value={form.nombre}
                                onChange={handleChange}
                                color={touched.nombre ? isNombreValid ? 'success' : 'failure' : 'gray'}
                            />
                        </div>
    
                        <div>
                            <Label htmlFor="email" className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">Correo<span className="text-red-600 ms-px">*</span></Label>
                            <TextInput 
                                id="email"
                                type="email" 
                                name="email" 
                                placeholder="tucorreo@ejemplo.com" 
                                required
                                value={form.email}
                                onChange={handleChange}
                                color={touched.email ? isEmailValid ? 'success' : 'failure' : 'gray'}
                            />
                        </div>
    
                        <div className="md:col-span-2" >
                            <Label htmlFor="mensaje" className="block mb-1 text-gray-700 dark:text-gray-300 font-semibold">Mensaje<span className="text-red-600 ms-px">*</span></Label>
                            <Textarea 
                                id="mensaje"
                                name="mensaje" 
                                rows={5}
                                placeholder="Escríbeme algo..." 
                                required
                                value={form.mensaje}
                                onChange={handleChange}
                                color={touched.mensaje ? isMessageValid ? 'success' : 'failure' : 'gray'}
                            ></Textarea>
                        </div>
    
                        <div className="md:col-span-2 ml-auto" >
                            <Button type="submit" className='group' disabled={loading}>
                                {loading ? (
                                    <Spinner aria-label="Enviando..." className="transition-all duration-200 ease-in-out mr-2" color="success" size="md" />
                                ) : (
                                    <span className="transition-transform duration-300 group-hover:transform group-hover:-skew-x-12 me-2"><SendEmailIcon /></span>
                                )}
                                Enviar correo
                            </Button>
                        </div>
                    </form>
                </div>
        </section>
    );
}