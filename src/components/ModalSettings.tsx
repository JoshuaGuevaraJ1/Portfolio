// ModalSettings.tsx

// Modules
import React, { useEffect, useState } from "react";

// Components
import {
  Modal,
  ModalHeader,
  ModalBody,
  ToggleSwitch,
  ModalFooter,
  Button,
} from "flowbite-react";
import { ThemeSelector } from "./ThemeSelector";
import { CloseIcon } from "../icons/Icons";

// Hooks & context
import { useAppSettings } from "../context/AppSettingsContext";


interface ModalSettingsProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const ModalSettingsComponent: React.FC<ModalSettingsProps> = ({openModal, setOpenModal}) => {
    const { grayscale, setGrayscale, animation, setAnimation } = useAppSettings();

    // Add animations
    const [shouldRender, setShouldRender] = useState(openModal);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (openModal) {
        setShouldRender(true);
        setTimeout(() => setAnimate(true), 40);
        } else {
        setAnimate(false);
        const timeout = setTimeout(() => setShouldRender(false), 300);
        return () => clearTimeout(timeout);
        }
    }, [openModal]);

    if (!shouldRender) return null;

    return (
        <Modal
            dismissible popup
            show={true}
            onClose={() => setOpenModal(false)}
            theme={{
                root: {show: {on:  animate ? 'opacity-100': 'opacity-0'}},
                content: {inner: `${animate ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'} ${grayscale ? "grayscale" : ""}`,},
            }}
            
        >
            <ModalHeader>Configuraciones</ModalHeader>
            <ModalBody>
                <div className="space-y-2 overflow-hidden">
                    <div className="border border-white/50 dark:border-gray-600/50 p-3 rounded-2xl space-y-2">
                        <h4 className="font-semibold text-gray-500 dark:text-gray-100 text-lg">Efectos Visuales</h4>
                        <div className={`flex items-center transition-all ease-in-out duration-500 ${animate ? 'opacity-100 translate-y-0 delay-500':'opacity-0 translate-y-8'}`}>
                            <h6>✨ Animaciones de fondo</h6>
                            <div className="ml-auto">
                            <ToggleSwitch
                                checked={animation}
                                onChange={setAnimation}
                                sizing="lg"
                            />
                            </div>
                        </div>
                    </div>

                    <div className="border border-white/50 dark:border-gray-600/50 p-3 rounded-2xl space-y-2">
                        <h4 className="font-semibold text-gray-500 dark:text-gray-100 text-lg">Accesibilidad</h4>
                        <div className={`flex items-center transition-all ease-in-out duration-500 ${animate ? 'opacity-100 translate-y-0 delay-500':'opacity-0 translate-y-8'}`}>
                            <h6>🔳 Modo escala de grises</h6>
                            <div className="ml-auto">
                            <ToggleSwitch
                                checked={grayscale}
                                onChange={setGrayscale}
                                sizing="lg"
                            />
                            </div>
                        </div>

                        <div className={`flex items-center transition-all ease-in-out duration-500 ${animate ? 'opacity-100 translate-y-0 delay-500':'opacity-0 translate-y-8'}`}>
                            <h6>🎨 Tema</h6>
                            <div className="ml-auto">
                            <ThemeSelector />
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <div className="w-full flex justify-end space-x-2">
                    <Button onClick={() => setOpenModal(false)} className="gap-2" aria-label="Cerrar configuración">
                        <CloseIcon height={20} width={20} />
                        Cerrar
                    </Button>
                </div>
            </ModalFooter>
       </Modal>
    );
};

export const ModalSettings = React.memo(ModalSettingsComponent);