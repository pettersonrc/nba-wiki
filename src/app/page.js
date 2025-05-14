"use client";

import estilos from "./page.module.css";
import Posicoes from "@/components/Posicoes";
import Cards from "@/components/Cards";
import CampoDeBusca from "@/components/CampoDeBusca";
import { useState } from "react";
import {
    filtrarJogador,
    buscarJogador,
    todosJogadores,
    alterarTema,
} from "@/services/servicos";

export default function Home() {
    const [dadosFiltrados, setDadosFiltrados] = useState(todosJogadores);
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
    const [botaoClicado, setBotaoClicado] = useState("Todos");
    const [ehTemaEscuro, setTemaEscuro] = useState(false);

    const handleBusca = (textoDigitado) => {
        setTextoBuscaDigitado(textoDigitado);
        setDadosFiltrados(buscarJogador(textoDigitado));
        setBotaoClicado("");
    };

    const handleFiltro = (posicao) => {
        setTextoBuscaDigitado("");
        if (posicao === "Todos") {
            setDadosFiltrados(todosJogadores);
        } else {
            setDadosFiltrados(filtrarJogador(posicao));
        }
        setBotaoClicado(posicao);
    };

    return (
        <div>
            <Posicoes handleFiltro={handleFiltro} botaoClicado={botaoClicado} />
            <CampoDeBusca
                textoBuscaDigitado={textoBuscaDigitado}
                handleBusca={handleBusca}
            />
            <section className={estilos.secao_cards}>
                <h2>Jogadores</h2>
                <div className={estilos.cards}>
                    {dadosFiltrados.map((jogador, index) => (
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
            </section>
        </div>
    );
}
