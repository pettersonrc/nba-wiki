import estilos from "./Posicoes.module.css"
import { BiSolidBasketball } from "react-icons/bi";
import { GiBasketballBasket } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { PiCourtBasketballFill } from "react-icons/pi";

export default function Posicoes( {handleFiltro, botaoClicado} ) {
    return (
        <section className={estilos.container_posicoes}>
            <button className={`${botaoClicado === "Point Guard" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Point Guard")}>
                <GiBrain />
                <span>Point Guard</span>
            </button>
            <button className={`${botaoClicado === "Shooting Guard" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Shooting Guard")}>
                <GiBasketballBasket />
                <span>Shooting Guard</span>
            </button>
            <button className={`${botaoClicado === "Small Forward" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Small Forward")}>
                <BiSolidBasketball />
                <span>Small Forward</span>
            </button>
            <button className={`${botaoClicado === "Power Forward" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Power Forward")}>
                <GiStrong />
                <span>Power Forward</span>
            </button>
            <button className={`${botaoClicado === "Center" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Center")}>
                <GiBasketballJersey />
                <span>Center</span>
            </button>
            <button className={`${botaoClicado === "Todos" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Todos")}>
                <PiCourtBasketballFill />
                <span>Todos</span>
            </button>
        </section>
    )
}