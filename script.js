principal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você decide fazer academia, poi não está contente com seu físico, então por ser iniciante, fica em dúvida como fazer os exercícios e procura ajuda...",
        alternativas: [
            {
                texto: "Com os professores da academia.",
                afirmacao: "pediu ajuda para os professores. "
            },
            {
                texto: "Pesquisando no celular.",
                afirmacao: "pegou o celular e pesquisou."
            }
        ]
    },
    {
        enunciado: "Após isso, ficou em duvida de como iria evoluir constantemente na academia, pois não pensava em desistir, então...",
        alternativas: [
            {
                texto: "Comprou suplementos via internet, sem saber do que se tratava",
                afirmacao: "entrou em um site duvidoso e comprou coisas aleatórias."
            },
            {
                texto: "Buscou uma loja de suplementos confiável.",
                afirmacao: "viu com os profesores da academia, que lhe recomendaram uma loja confiável de suplementos."
            }
        ]
    },
    {
        enunciado: "Após comprar suplementos, você vê vários marombas e pensa como poderia crescer os músculos de seu corpo de forma saudável.",
        alternativas: [
            {
                texto: "Pequisa no Tiktok.",
                afirmacao: "vê coisas nada haver com o assunto."
            },
            {
                texto: "Paga um personal confiável, que mexe na sua alimentação inteira e pasa treinos que dão resultados.",
                afirmacao: "você começa a ver seus resultados bem rápido."
            }
        ]
    },
    {
        enunciado: "Logo os desafios chegam, as cargas sobem, você consegue massa muscular bem rápido, fazendo seu peso subir, porém uma coisa o preocupa, depois dos treinos você e sente muito fadigado, assim pensando em uma maneira de reverter isso...",
        alternativas: [
            {
                texto: "Você conversa com o seu personal e ele coloca cardio antes de seus treinos.",
                afirmacao: "você percebe uma melhora no seu problema, fazendo você ter mais durabilidade em seus treinos."
            },
            {
                texto: "Você pensa que isso é falta de comida, e começa a comer sem parar.",
                afirmacao: "você comeu muitas coisas e engordou muito, até piorando seu problema de fadiga. "
            }
        ]
    },
    {
        enunciado: "Após anos na academia, voce está sheipado e forte, uma pessoa magrinha vem conversar contigo na academia pedindo dicas para treinar e ficar igual você, oque você faz??",
        alternativas: [
            {
                texto: "Apenas o ignoro e faço meu treino.",
                afirmacao: "você ignorou a pessoa magrinha e ela ficou triste, fazendo ela desistir de treinar."
            },
            {
                texto: "Você explica pra pesoa seus métodos de treino e sobre alimentação .",
                afirmacao: "a pessoa fica muito feliz e você acaba fazendo um novo amigo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
