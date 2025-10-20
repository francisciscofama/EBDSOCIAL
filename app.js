const feed = document.getElementById("feed");

const posts = [
  {
    user: "Igreja Betel",
    avatar: "https://i.pravatar.cc/150?img=12",
    image: "https://picsum.photos/500/300?random=1",
    text: "🎶 Louvai ao Senhor, porque Ele é bom! 🙌",
    date: "18 de Outubro, 2025",
  },
  {
    user: "EBD Central",
    avatar: "https://i.pravatar.cc/150?img=23",
    image: "https://picsum.photos/500/300?random=2",
    text: "📖 Tema da semana: 'Andar na luz' 💡",
    date: "17 de Outubro, 2025",
  },
  {
    user: "Juventude Cristã",
    avatar: "https://i.pravatar.cc/150?img=45",
    image: "https://picsum.photos/500/300?random=3",
    text: "🙌 Deus tem grandes planos para ti!",
    date: "16 de Outubro, 2025",
  },

  {
    user: "Igreja Betel",
    avatar: "https://i.pravatar.cc/150?img=12",
    image: "https://picsum.photos/500/300?random=1",
    text: "🎶 Louvai ao Senhor, porque Ele é bom! 🙌",
    date: "18 de Outubro, 2025",
  },
  {
    user: "EBD Central",
    avatar: "https://i.pravatar.cc/150?img=23",
    image: "https://picsum.photos/500/300?random=2",
    text: "📖 Tema da semana: 'Andar na luz' 💡",
    date: "17 de Outubro, 2025",
  },
  {
    user: "Juventude Cristã",
    avatar: "https://i.pravatar.cc/150?img=45",
    image: "https://picsum.photos/500/300?random=3",
    text: "🙌 Deus tem grandes planos para ti!",
    date: "16 de Outubro, 2025",
  },
  {
    user: "Igreja Betel",
    avatar: "https://i.pravatar.cc/150?img=12",
    image: "https://picsum.photos/500/300?random=1",
    text: "🎶 Louvai ao Senhor, porque Ele é bom! 🙌",
    date: "18 de Outubro, 2025",
  },
  {
    user: "EBD Central",
    avatar: "https://i.pravatar.cc/150?img=23",
    image: "https://picsum.photos/500/300?random=2",
    text: "📖 Tema da semana: 'Andar na luz' 💡",
    date: "17 de Outubro, 2025",
  },
  {
    user: "Juventude Cristã",
    avatar: "https://i.pravatar.cc/150?img=45",
    image: "https://picsum.photos/500/300?random=3",
    text: "🙌 Deus tem grandes planos para ti!",
    date: "16 de Outubro, 2025",
  },
];

function carregarPosts() {
  feed.innerHTML = posts
    .map(
      (p) => `
      <div class="post">
        <div class="post-header">
          <img src="${p.avatar}" alt="${p.user}" />
          <h3>${p.user}</h3>
        </div>
        <div class="post-image">
          <img src="${p.image}" alt="Publicação" />
        </div>
        <div class="post-content">${p.text}</div>
        <div class="post-footer">
          <div>
            <button title="Curtir"><i class="fa-regular fa-heart"></i></button>
            <button title="Comentar"><i class="fa-regular fa-comment"></i></button>
            <button title="Compartilhar"><i class="fa-solid fa-share"></i></button>
          </div>
          <small>${p.date}</small>
        </div>
      </div>
    `
    )
    .join("");
}

carregarPosts();
