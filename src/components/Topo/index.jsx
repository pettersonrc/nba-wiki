import estilos from "./Topo.module.css"
import Link from 'next/link'

export default function Topo() {
    return (
        <header>
            <div className={estilos.banner}>
                <div className={estilos.container_titulo}>
                    <h1>NBAwiki</h1>
                    <p>Lendas da NBA</p>
                </div>
                <nav className={estilos.container_links}>
                    <Link href="/top10" className={estilos.link}>TOP 10</Link>
                    <Link href="/" className={estilos.link}>PAGINAL INICIAL</Link>
                </nav>
            </div>
        </header>
    )
}