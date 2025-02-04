const questions = [
    { 
        question: "Você vê um cachorrinho na rua, o que faz?",
        answers: [
            "Faço carinho e converso com ele.",  
            "Tiro uma foto pro Instagram.", 
            "Sigo meu caminho, mas com o coração partido.", 
            "Desafio o cachorro para um duelo de olhares até alguém piscar primeiro." 
        ],
        correctAnswer: 0,
        myAnswer: 3, 
        wrongFeedbacks: [
            "",
            "Você tirou foto, mas não deu carinho? O cachorro agora está triste. 😭",
            "Ignorar um cachorro fofo? Seu coração de gelo me assusta. ❄️🐶",
            "Você realmente desafiou um cachorro para um duelo? Ele provavelmente ganhou. 🐶🔥"
        ],
        rightFeedback: "Parabéns! Você sabe que cachorros merecem carinho. 🐶",
        myAnswerFeedback: "Como eu respondi essa? 'Desafiei o cachorro para um duelo'. Ele ganhou. Ainda não superei. 🐶😔"
    },
    { 
        question: "Você está num apocalipse zumbi. O que faz primeiro?",
        answers: [
            "Procuro suprimentos e um lugar seguro.",  
            "Tento negociar paz com os zumbis.",  
            "Me escondo no shopping porque tem comida e Wi-Fi.",  
            "Entro no meio dos zumbis fingindo que sou um deles." 
        ],
        correctAnswer: 0,
        myAnswer: 3, 
        wrongFeedbacks: [
            "",
            "Negociar com zumbis? Boa sorte tentando convencer eles a não comerem cérebros. 🧠🧟",
            "Se esconder no shopping é bom... até a comida acabar. E os zumbis invadirem. 🛒",
            "Fingir que é um zumbi? Ótimo, agora você faz parte do time errado. 🧟‍♂️😂"
        ],
        rightFeedback: "Ótima escolha! Melhor estar preparado do que virar lanche. 🔪",
        myAnswerFeedback: "Como eu respondi essa? 'Fingi que era um zumbi'. E me dei tão bem que fui eleito líder deles. 👑🧟‍♂️"
    },
    { 
        question: "Se você pudesse ser um animal por um dia, qual escolheria?",
        answers: [
            "Um pássaro para poder voar livremente.",  
            "Um gato para dormir o dia todo e ser mimado.",  
            "Um tubarão porque ninguém mexe com eles.",  
            "Um ornitorrinco, só para deixar as pessoas confusas." 
        ],
        correctAnswer: 0,
        myAnswer: 3, 
        wrongFeedbacks: [
            "",
            "Ser um gato seria bom... até alguém te expulsar da cama. 🛏️🐱",
            "Ser um tubarão parece legal, mas e se você tiver medo de água? 🌊",
            "Ornitorrinco? Realmente, você seria um mistério da natureza. 🤨🦆"
        ],
        rightFeedback: "Ótima escolha! Voar sem precisar pagar passagem é incrível. 🦅",
        myAnswerFeedback: "Como eu respondi essa? 'Ornitorrinco'. Agora todos se perguntam que bicho estranho eu sou. 🤔"
    },
    { 
        question: "O que você faria se ganhasse na loteria?",
        answers: [
            "Viajaria pelo mundo e aproveitaria a vida.",  
            "Guardaria tudo no banco e viveria de juros.",  
            "Compraria um castelo para morar como um rei.",  
            "Construiria um McDonald's particular só para mim." 
        ],
        correctAnswer: 0,
        myAnswer: 3, 
        wrongFeedbacks: [
            "",
            "Guardar tudo no banco? Chato, mas esperto. 💰",
            "Morar num castelo? Só se tiver Wi-Fi e Netflix. 🏰",
            "Um McDonald's particular? Você vai virar o cliente VIP do Ronald McDonald. 🍔😂"
        ],
        rightFeedback: "Ótima escolha! Viajar e conhecer o mundo seria incrível. ✈️",
        myAnswerFeedback: "Como eu respondi essa? 'Construiria um McDonald's'. Agora sou dono da batata frita infinita. 🍟🔥"
    },
    { 
        question: "Se você tivesse um robô assistente, o que ele faria?",
        answers: [
            "Cuidaria das tarefas de casa para eu relaxar.",  
            "Ajudaria a lembrar de compromissos e senhas.",  
            "Seria um guarda-costas com inteligência artificial.",  
            "Me carregaria para todos os lugares como um rei." 
        ],
        correctAnswer: 0,
        myAnswer: 3, 
        wrongFeedbacks: [
            "",
            "Um robô para lembrar de compromissos? Boa, agora você nunca mais esquece o aniversário de ninguém. 📅🤖",
            "Um robô guarda-costas? Se for tipo o Exterminador do Futuro, pode ser um problema. 🔫😅",
            "Ser carregado pelo robô? Parabéns, você virou um faraó tecnológico. 👑😂"
        ],
        rightFeedback: "Ótima ideia! Deixar o robô cuidar da casa enquanto relaxamos é um sonho. 🤖",
        myAnswerFeedback: "Como eu respondi essa? 'O robô me carregaria'. Agora sou um imperador do sofá. 🛋️😂"
    },
    { 
        question: "Se você pudesse viver em qualquer época, qual escolheria?",
        answers: [
            "No futuro, para ver as tecnologias avançadas.",  
            "Na Idade Média, para ser um cavaleiro.",  
            "Nos anos 80, só para curtir a música.",  
            "Na época dos dinossauros, para tentar domesticá-los." 
        ],
        correctAnswer: 0,
        myAnswer: 3, 
        wrongFeedbacks: [
            "",
            "Idade Média? Você teria que lutar com espada e tomar banho uma vez por mês. ⚔️🛁",
            "Anos 80? Boas músicas, mas prepare-se para usar roupas neon. 🎸🕶️",
            "Domesticar dinossauros? Ok, só não tente ensinar truques para o T-Rex. 🦖😂"
        ],
        rightFeedback: "Ótima escolha! Imaginar as tecnologias do futuro é fascinante. 🚀",
        myAnswerFeedback: "Como eu respondi essa? 'Viver na época dos dinossauros'. Jurassic Park versão YOLO. 🦖🔥"
    },
    { 
        question: "Qual seria o presente perfeito para você?",
        answers: [
            "Uma viagem inesquecível para um lugar incrível.",  
            "Um jantar especial com alguém importante.",  
            "Um videogame de última geração.",  
            "Um caminhão cheio de pizza, para durar uma semana." 
        ],
        correctAnswer: 0,
        myAnswer: 3, 
        wrongFeedbacks: [
            "",
            "Um jantar especial? Ótima escolha... se não for você cozinhando. 😂🍽️",
            "Videogame? Perfeito, mas cuidado para não esquecer do mundo real. 🎮",
            "Um caminhão de pizza? Isso parece um plano de vida. 🍕🔥"
        ],
        rightFeedback: "Ótima escolha! Viajar sempre cria memórias incríveis. ✈️",
        myAnswerFeedback: "Como eu respondi essa? 'Caminhão de pizza'. Agora sou o rei das calorias. 🍕👑"
    }
];


let currentQuestionIndex = 0;
let opponentScore = 0;

const introContainer = document.getElementById("intro");
const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackContainer = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const feedbackCorrectAnswer = document.getElementById("feedback-correct-answer");
const myAnswerText = document.getElementById("my-answer-text"); // Adicionando campo para mostrar sua resposta absurda
const nextQuestionButton = document.getElementById("next-question");
const finalResultContainer = document.getElementById("final-result");
const opponentScoreElement = document.getElementById("opponent-score");
const verdictElement = document.getElementById("verdict");

document.getElementById("start-quiz").addEventListener("click", function () {
    introContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = function () {
            checkAnswer(index, currentQuestion);
        };
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex, question) {
    quizContainer.classList.add("hidden");
    feedbackContainer.classList.remove("hidden");

    if (selectedIndex === question.correctAnswer) {
        opponentScore++;
        feedbackText.innerHTML = `<strong>${question.rightFeedback}</strong>`;
    } else {
        // Exibe o feedback correto para a resposta errada específica
        feedbackText.innerHTML = `<strong>${question.wrongFeedbacks[selectedIndex]}</strong>`;
    }

    feedbackCorrectAnswer.textContent = `A resposta certa era: "${question.answers[question.correctAnswer]}"`;
    myAnswerText.textContent = question.myAnswerFeedback;
}


nextQuestionButton.addEventListener("click", function () {
    feedbackContainer.classList.add("hidden");
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        quizContainer.classList.remove("hidden");
        showQuestion();
    } else {
        finalResultContainer.classList.remove("hidden");
        showFinalLaudo();
    }
});


function showFinalLaudo() {
    finalResultContainer.innerHTML = `
        <h2>Laudo Final: Avaliação Psiquiátrica 📋</h2>
        <p>Após uma análise altamente científica e séria, chegamos à seguinte conclusão:</p>
        <h3>Sua sanidade está... digamos, em observação. 🤔</h3>
        <p>A única forma de confirmar isso é com uma avaliação presencial em um ambiente controlado, e segundo especialistas, o local perfeito para isso é um jantar! 🍽️</p>
        <p>Portanto, você tem duas opções:</p>
        <button id="accept-dinner">Aceitar a avaliação e jantar 🍷</button>
        <button id="reject-dinner">Negar a avaliação ❌</button>
        <p id="error-message" class="hidden" style="color: red; font-weight: bold;"></p>
    `;
    
    document.getElementById("accept-dinner").addEventListener("click", function () {
        const whatsappMessage = encodeURIComponent(
            "Olá! Fiz o teste e aparentemente minha sanidade precisa ser confirmada com um jantar. 🍽️\n\n" +
            "Como sou uma pessoa responsável, estou disposto(a) a passar por essa avaliação presencial e comer muito bem no processo. 😆\n\n" +
            "Então... quando vamos marcar? 😏"
        );
        window.location.href = `https://wa.me/31988884668?text=${whatsappMessage}`;
    });

    document.getElementById("reject-dinner").addEventListener("click", function () {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Erro: Essa opção não é válida. Infelizmente, você é obrigado(a) a jantar comigo. 🤷‍♂️😂";
        errorMessage.classList.remove("hidden");
    });
}





