import estilos from "./Cards.module.css"
import Image from 'next/image'

export default function Card(props) { 
    return ( 
        <div className={estilos.card}>
            <figure>
                <Image 
                    className={estilos.img} 
                    src={props.imagem}
                    alt={props.nome}>   
                </Image>
            </figure>
            <div className={estilos.container_titulo}>
                <h3>{props.nome}</h3>
                <p>{props.nome_completo}</p>
                <span>{props.posicao}</span>
            </div>
            <div className={estilos.container_texto}>
                <p>{props.anos_ativo}</p>
                <div>
                    {props.conquistas.map((titulo, index) => (
                        <p key={index}>{titulo}</p>
                    ))}
                </div>
                <ul>
                    <li>PPG: {props.estatisticas.pontos_por_jogo.toFixed(1)}</li>
                    <li>Rebotes: {props.estatisticas.rebotes.toFixed(1)}</li>
                    <li>Assistências: {props.estatisticas.assistencias.toFixed(1)}</li>
                </ul>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}