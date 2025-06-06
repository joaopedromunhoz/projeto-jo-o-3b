function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 🔁 Frases rotativas (já inserido antes)
const frases = [
  "🌿 Campo e cidade: diferentes, mas inseparáveis!",
  "🚜 Quem planta colhe, quem aprende cresce!",
  "🎶 O campo canta, a cidade dança.",
  "🌞 Sol para o campo, luz para a cidade!"
];
let i = 0;
function trocarFrase() {
  document.getElementById('frase')?.textContent = frases[i];
  i = (i + 1) % frases.length;
}
setInterval(trocarFrase, 4000);
trocarFrase();

// ✅ QUIZ
const perguntas = [
  {
    pergunta: "O que é mais comum no campo?",
    opcoes: ["Prédios", "Tratores", "Aeroportos"],
    resposta: "Tratores"
  },
  {
    pergunta: "Qual item é típico da cidade?",
    opcoes: ["Colheita de milho", "Festa junina na roça", "Semáforos"],
    resposta: "Semáforos"
  },
  {
    pergunta: "Onde há maior presença de natureza?",
    opcoes: ["Shopping", "Campo", "Avenida"],
    resposta: "Campo"
  }
];

let perguntaAtual = 0;
function mostrarPergunta() {
  const p = perguntas[perguntaAtual];
  document.getElementById("pergunta").textContent = p.pergunta;
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";
  p.opcoes.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => {
      document.getElementById("resultado").textContent = op === p.resposta
        ? "✅ Correto!"
        : "❌ Tente novamente!";
    };
    opcoesDiv.appendChild(btn);
  });
}
function proximaPergunta() {
  perguntaAtual = (perguntaAtual + 1) % perguntas.length;
  mostrarPergunta();
  document.getElementById("resultado").textContent = "";
}
mostrarPergunta();

// 📜 CERTIFICADO
function gerarCertificado() {
  const nome = document.getElementById("nome").value;
  if (nome.length < 3) {
    alert("Digite seu nome completo!");
    return;
  }
  const msg = `Parabéns, ${nome}! Você participou do Agrinho 2025 - Festejando o Campo e a Cidade! 🎉`;
  document.getElementById("certificado-preview").textContent = msg;
}
