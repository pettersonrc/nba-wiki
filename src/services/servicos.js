import { jogadores } from "../data/data_jogadores.js";

export const buscarJogador = (textoDigitado) => {
    return jogadores.filter((jogador) =>
        jogador.nome.toLowerCase().includes(textoDigitado.toLowerCase())
    );
};

export const filtrarJogador = (posicao) => {
    return jogadores.filter((jogador) => jogador.posicao === posicao);
};

export const filtrarTop10 = () => {
    return jogadores.filter((jogador) => jogador.top10);
};

export const getTodosJogadores = () => {
    return jogadores.filter((jogador) => jogador);
};

export const todosJogadores = getTodosJogadores();
