import estilos from "./Rodape.module.css"
import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCopyright } from "react-icons/fa";



export default function Rodape() {
    return (
        <footer className={estilos.rodape}>
            <div className={estilos.container_largura}>
                <h3>Contato</h3>
                <div className={estilos.container_links}>
                        <Link href="https://github.com/pettersonrc" target="_blank" rel="noopener noreferrer" className={estilos.links}>
                            <FaGithub />
                            <span>Github</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/petterson-rodolpho-4a4682299/" target="_blank" rel="noopener noreferrer" className={estilos.links}>
                            <FaLinkedin />
                            <span>Linkedin</span>
                        </Link>
                        <Link href="https://wa.me/11945253908" target="_blank" rel="noopener noreferrer" className={estilos.links}>
                            <IoLogoWhatsapp />
                            <span>11 94525-3908</span>
                        </Link>
                        <Link href="mailto:pettersondacunharodolpho@gmail.com" target="_blank" rel="noopener noreferrer" className={estilos.links}>
                            <MdEmail />
                            <span>pettersondacunharodolpho@gmail.com</span>
                        </Link>
                </div>
                <div className={estilos.container_copyright}>
                    <p><FaCopyright /> 2025 <span>Petterson Rodolpho</span></p>
                </div>
            </div>
        </footer>
    )
}