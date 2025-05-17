import { Modal, ModalHeader, ModalBody, ToggleSwitch, ModalFooter, Button } from "flowbite-react"
import { ThemeSelector } from "./ThemeSelector"
import { CloseIcon } from "../icons/Icons";

interface ModalSettingsProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    animation: boolean;
    setAnimation: (animation: boolean) => void;
    blurCircles: boolean;
    setBlurCircles: (blurCircles: boolean) => void;
    grayscale: boolean;
    setGrayscale: (grayscale: boolean) => void;
}

export const ModalSettings: React.FC<ModalSettingsProps> = ({openModal, setOpenModal, animation, setAnimation, blurCircles, setBlurCircles, grayscale, setGrayscale}) => {
    return (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} theme={{ content: { inner: grayscale ? 'grayscale' : '' }}} >
        <ModalHeader>Configuraciones</ModalHeader>
        <ModalBody>
        <div className='overflow-auto space-y-3 '>
                <div className='border border-white/50 dark:border-gray-600/50 p-3 rounded-2xl'>
                  <h4 className='font-semibold text-gray-500 dark:text-gray-100 text-lg'>Efectos Visuales</h4>
                  <div className='flex items-center mt-4'>
                    <h6>✨ Animaciones de fondo</h6>
                    <div className='ml-auto'>
                      <ToggleSwitch checked={animation} onChange={setAnimation} sizing='lg' />
                    </div>
                  </div>

                  <div className='flex items-center mt-4'>
                    <h6>🔵 Circulos de fondo desvanecidos</h6>
                    <div className='ml-auto'>
                      <ToggleSwitch checked={blurCircles} onChange={setBlurCircles} sizing='lg' disabled={!animation} />
                    </div>
                  </div>
                </div>

                <div className='border border-white/50 dark:border-gray-600/50 p-3 rounded-2xl'>
                  <h4 className='font-semibold text-gray-500 dark:text-gray-100 text-lg'>Accesibilidad</h4>
                  <div className='flex items-center mt-4'>
                    <h6>🔳 Modo escala de grises</h6>
                    <div className='ml-auto'>
                      <ToggleSwitch checked={grayscale} onChange={setGrayscale} sizing='lg' />
                    </div>
                  </div>
                  
                  <div className='flex items-center mt-4'>
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