import { filtrarTop10  } from "@/services/servicos"
import Cards from "@/components/Cards"
import estilos from "./top10.module.css"

export default function top10() {
    const top10Filtrado = filtrarTop10()

    return (
        <div className={estilos.secao_cards}>
            <h2>TOP 10 DA HISTORIA</h2>
            <span className={estilos.chatgpt}>De acordo com o ChatGpt</span>
            <div className={estilos.cards}>
                {top10Filtrado.map((jogador, index) => (
                    <Cards 
                        key={index}
                        imagem={jogador.imagem}
                        nome={jogador.nome}
                        nome_completo={jogador.nome_completo}
                        posicao={jogador.posicao}
                        anos_ativo={jogador.anos_ativos}
                        conquistas={jogador.conquistas}
                        estatisticas={jogador.estatisticas}
                        descricao={jogador.descricao}
                    />
                ))}
            </div>
        </div>
    )
}