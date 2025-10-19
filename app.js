// Dados estáticos simulando posts
let posts = [
  {
    text: "🙌 O Senhor é o meu pastor e nada me faltará! (Salmo 23:1)",
    date: "Hoje, 09:30",
  },
  {
    text: "📖 Aula poderosa na EBD de hoje! Que o Espírito Santo continue a nos ensinar.",
    date: "Ontem, 16:45",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
  {
    text: "💒 Domingo é dia de comunhão e aprendizado! Não perca a EBD amanhã 🙏",
    date: "Sexta, 18:00",
  },
];

// Função para carregar o feed com os dados estáticos
function carregarPosts() {
  const feed = document.getElementById("feed");
  feed.innerHTML = posts
    .map(
      (p) => `
      <div class="post">
        <div class="post-header">
          <img src="https://i.pravatar.cc/150?u=${Math.random()}" alt="user" />
          <h3>Usuário EBD</h3>
        </div>
        <div class="post-content">${p.text}</div>
        <div class="post-footer">
          <button>❤️</button>
          <button>💬</button>
          <small>${p.date}</small>
        </div>
      </div>
    `
    )
    .join("");
}

// Quando clicar em “Publicar”
document.getElementById("sendPost").addEventListener("click", () => {
  const text = document.getElementById("postText").value.trim();
  if (!text) return alert("Escreve algo!");

  const novoPost = {
    text,
    date: "Agora mesmo",
  };

  // Adiciona no início do array (como no Instagram)
  posts.unshift(novoPost);
  document.getElementById("postText").value = "";
  carregarPosts();
});

// Botão de atualizar
document.getElementById("refreshBtn").addEventListener("click", carregarPosts);

// Registrar Service Worker (PWA)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

// Inicializa o feed
carregarPosts();
