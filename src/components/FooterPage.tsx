// FooterPage.tsx

// Components
import { Footer, FooterTitle, FooterLinkGroup, FooterLink, FooterDivider, FooterCopyright, FooterIcon } from "flowbite-react";
import { GitSocialIcon, InstagramIcon } from "../icons/Icons";


export const FooterPage: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Footer container className="mt-10">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-center md:flex md:grid-cols-1">
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <FooterTitle title="links" />
                        <FooterLinkGroup col>
                            <FooterLink href="#hero">Inicio</FooterLink>
                            <FooterLink href="#about">Sobre mí</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Contáctame" />
                        <FooterLinkGroup col>
                            <FooterLink href="https://github.com/JoshuaGuevaraJ1">Github</FooterLink>
                            <FooterLink href="https://www.instagram.com/josh.sh_?igsh=bTJlM3drN3J6Mnhw">Instagram</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="#" by="Joshua Guevara" year={currentYear} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon href="https://github.com/JoshuaGuevaraJ1" icon={GitSocialIcon} />
                        <FooterIcon href="https://www.instagram.com/josh.sh_?igsh=bTJlM3drN3J6Mnhw" icon={InstagramIcon} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}