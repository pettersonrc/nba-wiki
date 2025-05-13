import jordan from "/public/michael-jordan.jpg";
import lebron from "../../public/lebron.jpg";
import iverson from "/public/allen-iverson.jpg";
import bill from "/public/bill-russell.jpg";
import bird from "/public/bird.jpg";
import barkley from "/public/charles-barkley.jpg";
import paul from "/public/chris-paul.jpg";
import curry from "/public/curry.jpg";
import robinson from "/public/david-robinson.jpg";
import dirk from "/public/dirk.jpg";
import doncic from "/public/doncic.jpg";
import duncan from "/public/duncan.jpg";
import durant from "/public/durant.jpg";
import garnett from "/public/garnett.jpg";
import giannis from "/public/giannis.jpg";
import hakeem from "/public/hakeem.jpg";
import harden from "/public/harden.jpg";
import isaiah from "/public/isaiah-thomas.jpg";
import kidd from "/public/jason-kidd.jpg";
import jokic from "/public/jokic.jpg";
import kareem from "/public/kareem.jpg";
import kobe from "/public/kobe.jpg";
import magic from "/public/magic.jpg";
import malone from "/public/malone.jpg";
import robertson from "/public/oscar-robertson.jpg";
import pippen from "/public/pippen.jpeg";
import shaq from "/public/shaq.jpeg";
import nash from "/public/steve-nash.jpg";
import wade from "/public/wade.jpg";
import wilt from "/public/wilt.jpg";

export const jogadores = [
    {
        top10: true,
        nome: "Michael Jordan",
        nome_completo: "Michael Jeffrey Jordan",
        posicao: "Shooting Guard",
        anos_ativos: "1984–2003",
        conquistas: [
            "6× Campeão da NBA",
            "5× MVP da temporada",
            "6× MVP das finais",
            "14× All-Star",
            "10× cestinha da liga",
            "1× Melhor defensor da NBA",
            "2× Ouro olímpico",
        ],
        estatisticas: {
            pontos_por_jogo: 30.1,
            rebotes: 6.2,
            assistencias: 5.3,
        },
        descricao:
            "Considerado por muitos o maior jogador de todos os tempos. Dominou as finais da NBA com os Bulls e teve enorme impacto cultural.",
        imagem: jordan,
    },
    {
        top10: true,
        nome: "Lebron James",
        nome_completo: "LeBron Raymone James",
        posicao: "Small Forward",
        anos_ativos: "2003–presente",
        conquistas: [
            "4× Campeão da NBA",
            "4× MVP da temporada",
            "4× MVP das finais",
            "20× All-Star",
            "Maior pontuador da história da NBA",
            "2× Ouro olímpico",
        ],
        estatisticas: {
            pontos_por_jogo: 27.1,
            rebotes: 7.5,
            assistencias: 7.4,
        },
        descricao:
            "Atleta mais completo da história da NBA, com enorme longevidade e impacto dentro e fora das quadras.",
        imagem: lebron,
    },
    {
        top10: true,
        nome: "Kareem Abdul-Jabbar",
        nome_completo: "Ferdinand Lewis Alcindor Jr.",
        posicao: "Center",
        anos_ativos: "1969–1989",
        conquistas: [
            "6× Campeão da NBA",
            "6× MVP da temporada",
            "19× All-Star",
            "Maior pontuador da história até 2023",
        ],
        estatisticas: {
            pontos_por_jogo: 24.6,
            rebotes: 11.2,
            assistencias: 3.6,
        },
        descricao:
            "Dominante por duas décadas, dono do indefensável gancho do céu e lenda dos Lakers.",
        imagem: kareem,
    },
    {
        top10: true,
        nome: "Magic Johnson",
        nome_completo: "Earvin Johnson Jr.",
        posicao: "Point Guard",
        anos_ativos: "1979–1996",
        conquistas: [
            "5× Campeão da NBA",
            "3× MVP da temporada",
            "3× MVP das finais",
            "12× All-Star",
        ],
        estatisticas: {
            pontos_por_jogo: 19.5,
            rebotes: 7.2,
            assistencias: 11.2,
        },
        descricao:
            "Revolucionou a posição de armador com altura, visão e estilo no Showtime Lakers.",
        imagem: magic,
    },
    {
        top10: true,
        nome: "Larry Bird",
        nome_completo: "Larry Joe Bird",
        posicao: "Small Forward",
        anos_ativos: "1979–1992",
        conquistas: [
            "3× Campeão da NBA",
            "3× MVP da temporada",
            "2× MVP das finais",
            "12× All-Star",
        ],
        estatisticas: {
            pontos_por_jogo: 24.3,
            rebotes: 10.0,
            assistencias: 6.3,
        },
        descricao:
            "Ícone dos Celtics, conhecido por sua inteligência, arremesso mortal e rivalidade com Magic.",
        imagem: bird,
    },
    {
        top10: false,
        nome: "Bill Russell",
        nome_completo: "William Felton Russell",
        posicao: "Center",
        anos_ativos: "1956–1969",
        conquistas: [
            "11× Campeão da NBA",
            "5× MVP da temporada",
            "12× All-Star",
        ],
        estatisticas: {
            pontos_por_jogo: 15.1,
            rebotes: 22.5,
            assistencias: 4.3,
        },
        descricao:
            "Maior campeão da história da NBA e símbolo de defesa, liderança e integridade.",
        imagem: bill,
    },
    {
        top10: true,
        nome: "Wilt Chamberlain",
        nome_completo: "Wilton Norman Chamberlain",
        posicao: "Center",
        anos_ativos: "1959–1973",
        conquistas: [
            "2× Campeão da NBA",
            "4× MVP da temporada",
            "13× All-Star",
            "Recorde de 100 pontos em um jogo",
        ],
        estatisticas: {
            pontos_por_jogo: 30.1,
            rebotes: 22.9,
            assistencias: 4.4,
        },
        descricao:
            "Gigante físico e estatístico, dono de recordes quase inalcançáveis.",
        imagem: wilt,
    },
    {
        top10: true,
        nome: "Kobe Bryant",
        nome_completo: "Kobe Bean Bryant",
        posicao: "Shooting Guard",
        anos_ativos: "1996–2016",
        conquistas: [
            "5× Campeão da NBA",
            "1× MVP da temporada",
            "2× MVP das finais",
            "18× All-Star",
            "2× Ouro olímpico",
        ],
        estatisticas: {
            pontos_por_jogo: 25.0,
            rebotes: 5.2,
            assistencias: 4.7,
        },
        descricao:
            "Ícone dos Lakers, exemplo de ética de trabalho e mentalidade vencedora com a 'Mamba Mentality'.",
        imagem: kobe,
    },
    {
        top10: true,
        nome: "Tim Duncan",
        nome_completo: "Timothy Theodore Duncan",
        posicao: "Power Forward",
        anos_ativos: "1997–2016",
        conquistas: [
            "5× Campeão da NBA",
            "2× MVP da temporada",
            "3× MVP das finais",
            "15× All-Star",
        ],
        estatisticas: {
            pontos_por_jogo: 19.0,
            rebotes: 10.8,
            assistencias: 3.0,
        },
        descricao:
            "Líder silencioso dos Spurs, conhecido por consistência, humildade e eficiência.",
        imagem: duncan,
    },
    {
        top10: true,
        nome: "Shaquille O'Neal",
        nome_completo: "Shaquille Rashaun O’Neal",
        posicao: "Center",
        anos_ativos: "1992–2011",
        conquistas: [
            "4× Campeão da NBA",
            "1× MVP da temporada",
            "3× MVP das finais",
            "15× All-Star",
        ],
        estatisticas: {
            pontos_por_jogo: 23.7,
            rebotes: 10.9,
            assistencias: 2.5,
        },
        descricao:
            "Pivô dominante fisicamente, estrela dentro e fora das quadras.",
        imagem: shaq,
    },
    {
        top10: true,
        nome: "Stephen Curry",
        nome_completo: "Wardell Stephen Curry II",
        posicao: "Point Guard",
        anos_ativos: "2009–presente",
        conquistas: [
            "4× Campeão da NBA",
            "2× MVP da temporada",
            "1× MVP das finais",
            "9× All-Star",
            "Maior arremessador de 3 pontos da história",
        ],
        estatisticas: {
            pontos_por_jogo: 24.8,
            assistencias: 6.5,
            rebotes: 4.7,
        },
        descricao:
            "Mudou o jogo com seu arremesso de longa distância, transformando os Warriors em uma dinastia.",
        imagem: curry,
    },
    {
        top10: false,
        nome: "Hakeem Olajuwon",
        nome_completo: "Hakeem Abdul Olajuwon",
        posicao: "Center",
        anos_ativos: "1984–2002",
        conquistas: [
            "2× Campeão da NBA",
            "1× MVP da temporada",
            "2× MVP das finais",
            "12× All-Star",
            "3× líder em tocos da liga",
        ],
        estatisticas: {
            pontos_por_jogo: 21.8,
            rebotes: 11.1,
            assistencias: 2.5,
        },
        descricao:
            "Técnica refinada e defesa elite, dominou os anos 90 com os Rockets.",
        imagem: hakeem,
    },
    {
        top10: false,
        nome: "Kevin Durant",
        nome_completo: "Kevin Wayne Durant",
        posicao: "Small Forward",
        anos_ativos: "2007–presente",
        conquistas: [
            "2× Campeão da NBA",
            "1× MVP da temporada",
            "2× MVP das finais",
            "13× All-Star",
            "4× cestinha da liga",
        ],
        estatisticas: {
            pontos_por_jogo: 27.3,
            rebotes: 7.1,
            assistencias: 4.3,
        },
        descricao:
            "Pontuador letal e versátil, dominou diferentes eras em várias franquias.",
        imagem: durant,
    },
    {
        top10: false,
        nome: "Oscar Robertson",
        nome_completo: "Oscar Palmer Robertson",
        posicao: "Point Guard",
        anos_ativos: "1960–1974",
        conquistas: [
            "1× Campeão da NBA",
            "1× MVP da temporada",
            "12× All-Star",
            "Primeiro jogador a ter média de triplo-duplo em uma temporada",
        ],
        estatisticas: {
            pontos_por_jogo: 25.7,
            rebotes: 7.5,
            assistencias: 9.5,
        },
        descricao:
            "Pioneiro no jogo completo, armador dominante em todas as áreas.",
        imagem: robertson,
    },
    {
        top10: false,
        nome: "Dirk Nowitzki",
        nome_completo: "Dirk Werner Nowitzki",
        posicao: "Power Forward",
        anos_ativos: "1998–2019",
        conquistas: [
            "1× Campeão da NBA",
            "1× MVP da temporada",
            "14× All-Star",
        ],
        estatisticas: {
            pontos_por_jogo: 20.7,
            rebotes: 7.5,
            assistencias: 2.4,
        },
        descricao:
            "Revolucionou o jogo para os europeus, com arremesso preciso e lealdade aos Mavericks.",
        imagem: dirk,
    },
    {
        top10: false,
        nome: "Karl Malone",
        nome_completo: "Karl Anthony Malone",
        posicao: "Power Forward",
        anos_ativos: "1985–2004",
        conquistas: [
            "2× MVP da temporada",
            "14× All-Star",
            "2× medalha de ouro olímpica",
        ],
        estatisticas: {
            pontos_por_jogo: 25.0,
            rebotes: 10.1,
            assistencias: 3.6,
        },
        descricao:
            "Segundo maior pontuador da história por anos, símbolo de durabilidade e força física.",
        imagem: malone,
    },
    {
        top10: false,
        nome: "Giannis Antetokounmpo",
        nome_completo: "Giannis Sina Ugo Antetokounmpo",
        posicao: "Power Forward",
        anos_ativos: "2013–presente",
        conquistas: [
            "1× Campeão da NBA",
            "2× MVP da temporada",
            "1× MVP das finais",
            "7× All-Star",
            "1× Jogador Defensivo do Ano",
        ],
        estatisticas: {
            pontos_por_jogo: 23.0,
            rebotes: 9.8,
            assistencias: 4.7,
        },
        descricao:
            "Força atlética e versatilidade definem o 'Greek Freak', já entre os grandes da NBA moderna.",
        imagem: giannis,
    },
    {
        top10: false,
        nome: "Charles Barkley",
        nome_completo: "Charles Wade Barkley",
        posicao: "Power Forward",
        anos_ativos: "1984–2000",
        conquistas: [
            "1× MVP da temporada",
            "11× All-Star",
            "2× medalha de ouro olímpica",
        ],
        estatisticas: {
            pontos_por_jogo: 22.1,
            rebotes: 11.7,
            assistencias: 3.9,
        },
        descricao:
            "Um dos maiores jogadores sem título, Barkley foi dominante em rebotes e personalidade marcante.",
        imagem: barkley,
    },
    {
        top10: false,
        nome: "Kevin Garnett",
        nome_completo: "Kevin Maurice Garnett",
        posicao: "Power Forward",
        anos_ativos: "1995–2016",
        conquistas: [
            "1× Campeão da NBA",
            "1× MVP da temporada",
            "15× All-Star",
            "1× Jogador Defensivo do Ano",
        ],
        estatisticas: {
            pontos_por_jogo: 17.8,
            rebotes: 10.0,
            assistencias: 3.7,
        },
        descricao:
            "Intensidade defensiva e liderança foram marcas do ícone dos Timberwolves e Celtics.",
        imagem: garnett,
    },
    {
        top10: false,
        nome: "Dwayne Wade",
        nome_completo: "Dwyane Tyrone Wade Jr.",
        posicao: "Shooting Guard",
        anos_ativos: "2003–2019",
        conquistas: [
            "3× Campeão da NBA",
            "1× MVP das finais",
            "13× All-Star",
            "1× Ouro olímpico",
        ],
        estatisticas: {
            pontos_por_jogo: 22.0,
            rebotes: 4.7,
            assistencias: 5.4,
        },
        descricao:
            "Ídolo do Miami Heat, conhecido por sua explosão atlética, defesa e habilidade decisiva.",
        imagem: wade,
    },
    {
        top10: false,
        nome: "David Robinson",
        nome_completo: "David Maurice Robinson",
        posicao: "Center",
        anos_ativos: "1989–2003",
        conquistas: [
            "2× Campeão da NBA",
            "1× MVP da temporada",
            "10× All-Star",
            "1× Jogador Defensivo do Ano",
            "2× Ouro olímpico",
        ],
        estatisticas: {
            pontos_por_jogo: 21.1,
            rebotes: 10.6,
            assistencias: 2.5,
        },
        descricao:
            "O 'Almirante' combinava talento atlético e caráter, liderando os Spurs na transição para a era Duncan.",
        imagem: robinson,
    },
    {
        top10: false,
        nome: "Chris Paul",
        nome_completo: "Christopher Emmanuel Paul",
        posicao: "Point Guard",
        anos_ativos: "2005–presente",
        conquistas: [
            "12× All-Star",
            "4× líder em assistências",
            "6× líder em roubos",
            "2× medalha de ouro olímpica",
        ],
        estatisticas: {
            pontos_por_jogo: 17.9,
            assistencias: 9.5,
            rebotes: 4.5,
        },
        descricao:
            "Um dos armadores mais inteligentes e eficientes da história, ainda busca seu primeiro título.",
        imagem: paul,
    },
    {
        top10: false,
        nome: "Isaiah Thomas",
        nome_completo: "Isiah Lord Thomas III",
        posicao: "Point Guard",
        anos_ativos: "1981–1994",
        conquistas: ["2× Campeão da NBA", "1× MVP das finais", "12× All-Star"],
        estatisticas: {
            pontos_por_jogo: 19.2,
            assistencias: 9.3,
            rebotes: 3.6,
        },
        descricao:
            "Líder dos 'Bad Boys' Pistons, conhecido por sua dureza, habilidade e coração competitivo.",
        imagem: isaiah,
    },
    {
        top10: false,
        nome: "Scottie Pippen",
        nome_completo: "Scottie Maurice Pippen",
        posicao: "Small Forward",
        anos_ativos: "1987–2004",
        conquistas: [
            "6× Campeão da NBA",
            "7× All-Star",
            "10× All-Defensive Team",
            "2× medalha de ouro olímpica",
        ],
        estatisticas: {
            pontos_por_jogo: 16.1,
            rebotes: 6.4,
            assistencias: 5.2,
        },
        descricao:
            "Parceiro de Jordan nos Bulls, defensor completo e versátil, essencial para o sucesso da equipe.",
        imagem: pippen,
    },
    {
        top10: false,
        nome: "Allen Iverson",
        nome_completo: "Allen Ezail Iverson",
        posicao: "Point Guard",
        anos_ativos: "1996–2010",
        conquistas: [
            "1× MVP da temporada",
            "11× All-Star",
            "4× cestinha da NBA",
        ],
        estatisticas: {
            pontos_por_jogo: 26.7,
            assistencias: 6.2,
            rebotes: 3.7,
        },
        descricao:
            "Um dos jogadores mais influentes e talentosos da era moderna, conhecido por sua garra e estilo único.",
        imagem: iverson,
    },
    {
        top10: false,
        nome: "Jason Kidd",
        nome_completo: "Jason Frederick Kidd",
        posicao: "Point Guard",
        anos_ativos: "1994–2013",
        conquistas: [
            "1× Campeão da NBA",
            "10× All-Star",
            "5× líder em assistências da liga",
            "2× medalha de ouro olímpica",
        ],
        estatisticas: {
            pontos_por_jogo: 12.6,
            assistencias: 8.7,
            rebotes: 6.3,
        },
        descricao:
            "Um dos maiores armadores da história, conhecido por visão de jogo, defesa e liderança.",
        imagem: kidd,
    },
    {
        top10: false,
        nome: "Steve Nash",
        nome_completo: "Stephen John Nash",
        posicao: "Point Guard",
        anos_ativos: "1996–2014",
        conquistas: [
            "2× MVP da temporada",
            "8× All-Star",
            "5× líder em assistências da liga",
        ],
        estatisticas: {
            pontos_por_jogo: 14.3,
            assistencias: 8.5,
            rebotes: 3.0,
        },
        descricao:
            "Maestro do ataque, famoso pela inteligência, eficiência e comando ofensivo com os Suns.",
        imagem: nash,
    },
    {
        top10: false,
        nome: "James Harden",
        nome_completo: "James Edward Harden Jr.",
        posicao: "Point Guard",
        anos_ativos: "2009–presente",
        conquistas: [
            "1× MVP da temporada",
            "10× All-Star",
            "3× cestinha da NBA",
            "2× líder em assistências da liga",
        ],
        estatisticas: {
            pontos_por_jogo: 24.4,
            assistencias: 7.1,
            rebotes: 5.6,
        },
        descricao:
            "Ofensivamente prolífico, redefiniu o jogo com seu step-back e controle de ritmo.",
        imagem: harden,
    },
    {
        top10: false,
        nome: "Nikola Jokić",
        nome_completo: "Nikola Jokić",
        posicao: "Center",
        anos_ativos: "2015–presente",
        conquistas: [
            "1× Campeão da NBA",
            "2× MVP da temporada",
            "1× MVP das finais",
            "6× All-Star",
        ],
        estatisticas: {
            pontos_por_jogo: 20.9,
            rebotes: 10.7,
            assistencias: 7.0,
        },
        descricao:
            "Pivô com visão de jogo única, redefiniu o papel da posição com sua inteligência e versatilidade.",
        imagem: jokic,
    },
    {
        top10: false,
        nome: "Luka Dončić",
        nome_completo: "Luka Dončić",
        posicao: "Point Guard",
        anos_ativos: "2018–presente",
        conquistas: [
            "5× All-Star",
            "3× All-NBA First Team",
            "Novato do Ano 2019",
        ],
        estatisticas: {
            pontos_por_jogo: 27.6,
            rebotes: 8.6,
            assistencias: 8.0,
        },
        descricao:
            "Fenômeno esloveno, já entre os principais jogadores da liga com grande potencial histórico.",
        imagem: doncic,
    },
];

export default jogadores;
