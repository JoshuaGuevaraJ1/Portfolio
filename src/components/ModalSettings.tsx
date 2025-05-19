import React from "react";

import { Modal, ModalHeader, ModalBody, ToggleSwitch, ModalFooter, Button } from "flowbite-react"
import { ThemeSelector } from "./ThemeSelector"
import { CloseIcon } from "../icons/Icons";
import { useAppSettings } from "../context/AppSettingsContext";

// Context

interface ModalSettingsProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const ModalSettingsComponent: React.FC<ModalSettingsProps> = ({openModal, setOpenModal}) => {
    const { grayscale, setGrayscale, animation, setAnimation } = useAppSettings();

    return (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} theme={{ content: { inner: grayscale ? 'grayscale' : '' }}} >
        <ModalHeader>Configuraciones</ModalHeader>
        <ModalBody>
        <div className='overflow-auto space-y-2'>
                <div className='border border-white/50 dark:border-gray-600/50 p-3 rounded-2xl space-y-2'>
                    <h4 className='font-semibold text-gray-500 dark:text-gray-100 text-lg'>Efectos Visuales</h4>
                    <div className='flex items-center'>
                        <h6>✨ Animaciones de fondo</h6>
                        <div className='ml-auto'>
                            <ToggleSwitch checked={animation} onChange={setAnimation} sizing='lg' />
                        </div>
                    </div>
                </div>

                <div className='border border-white/50 dark:border-gray-600/50 p-3 rounded-2xl space-y-2'>
                    <h4 className='font-semibold text-gray-500 dark:text-gray-100 text-lg'>Accesibilidad</h4>
                    <div className='flex items-center'>
                        <h6>🔳 Modo escala de grises</h6>
                        <div className='ml-auto'>
                            <ToggleSwitch checked={grayscale} onChange={setGrayscale} sizing='lg' />
                        </div>
                    </div>
                  
                    <div className='flex items-center'>
                        <h6>🎨 Tema</h6>
                        <div className='ml-auto'>
                            <ThemeSelector />
                        </div>
                    </div>
                </div>
              </div>
        </ModalBody>
        <ModalFooter>
          <div className="w-full flex justify-end space-x-2">
            <Button onClick={() => setOpenModal(false)} className="gap-2" aria-label="Cerrar configuración"><CloseIcon height={20} width={20}/>Cerrar</Button>
          </div>
          
        </ModalFooter>
      </Modal>
    )
}

export const ModalSettings = React.memo(ModalSettingsComponent);