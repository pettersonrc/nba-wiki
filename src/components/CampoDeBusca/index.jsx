import estilos from "./CampoDeBusca.module.css"
import { IoSearch } from "react-icons/io5";
import Image from "next/image"

export default function CampoDeBusca({ textoBuscaDigitado, handleBusca}) {
    return (
        <div className={estilos.container_campo_busca}>
            <IoSearch 
                className={estilos.img_lupa}
            />
            <input 
                type="text"
                value={textoBuscaDigitado}
                onChange={(event) => handleBusca(event.target.value)}
                className={estilos.campo_de_busca}
                placeholder="Pesquise aqui um jogador da NBA">
            </input>
        </div>
    )
}