import estilos from "./Topo.module.css"
import Link from 'next/link'

export default function Topo() {
    return (
        <header>
            <div className={estilos.banner}>
                <div className={estilos.container_titulo}>
                    <h1 className="animate__animated animate__backInLeft">NBAwiki</h1>
                    <p className="animate__animated animate__backInLeft">Lendas da NBA</p>
                </div>
                <nav className={estilos.container_links}>
                    <Link 
                    href="/top10" 
                    className={`${estilos.link} animate__animated animate__backInLeft`}
                    >
                        TOP 10
                    </Link>
                    <Link 
                    href="/" 
                    className={`${estilos.link} animate__animated animate__backInLeft`}
                    >
                        PAGINAL INICIAL
                    </Link>
                </nav>
            </div>
        </header>
    )
}