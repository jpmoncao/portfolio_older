import { SiInstagram, SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { Form } from "./Form";

const SocialButton = ({ link, iconComponent }) => {
    return (
        <a href={link} target='_blank' className="transition-shadow hover:transition-shadow hover:drop-shadow-[0_12px_12px_rgba(121,176,242,0.4)]">
            {iconComponent}
        </a>
    )
}

export function Contacts() {
    return (
        <div id="contacts" className="pt-24 w-full h-full bg-slate-900">
            <h1 className="font-bold text-4xl text-center mb-5">Contatos</h1>
            <div className="space-y-12 pb-20">
                <div className="flex justify-center gap-x-8">
                    <SocialButton
                        link='https://www.instagram.com/jpmoncao/'
                        iconComponent={<SiInstagram size={36} />}
                    />
                    <SocialButton
                        link='https://www.linkedin.com/in/jpmoncao/'
                        iconComponent={<SiLinkedin size={36} />}
                    />
                    <SocialButton
                        link='https://github.com/jpmoncao'
                        iconComponent={<SiGithub size={36} />}
                    />
                    <SocialButton
                        link='https://wa.me/5517988116153?text=Oi,%20vi%20seu%20portfólio.%20Tudo%20bem?%20Queria%20conversar%20com%20você%20sobre...%20'
                        iconComponent={<SiWhatsapp size={36} />}
                    />
                </div>

                <Form />
            </div>

            <footer>
                <h3 className="text-center text-xs">Desenvolvido por <a className="text-blue-300 hover:text-blue-400 hover:underline" href="https://github.com/jpmoncao/" target='_blank'>João Pedro Monção</a>, 2022</h3>
            </footer>
        </div>
    )
}