const feed = document.getElementById("feed");

const posts = [
  {
    user: "Igreja Betel",
    avatar: "https://i.pravatar.cc/150?img=12",
    video: "https://youtube.com/shorts/k162i_r2n68?si=b3oUbtoztHI953Tq",
    text: "🎶 Louvai ao Senhor, porque Ele é bom! 🙌",
    date: "18 de Outubro, 2025",
  },
  {
    user: "EBD Central",
    avatar: "https://i.pravatar.cc/150?img=23",
    video: "https://youtube.com/shorts/hHWWRl04CiU?si=QWxpVo8ETFfFUnmI",
    text: "📖 Tema da semana: 'Andar na luz' 💡",
    date: "17 de Outubro, 2025",
  },
  {
    user: "Juventude Cristã",
    avatar: "https://i.pravatar.cc/150?img=45",
    video: "https://www.youtube.com/watch?v=LHgpTnz_g9M",
    text: "🙌 Deus tem grandes planos para ti!",
    date: "16 de Outubro, 2025",
  },
  {
    user: "Louvor Jovem",
    avatar: "https://i.pravatar.cc/150?img=34",
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    text: "🎤 Adoração com todo o coração ❤️",
    date: "15 de Outubro, 2025",
  },
  {
    user: "Ministério Infantil",
    avatar: "https://i.pravatar.cc/150?img=29",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "👧 Aprendendo a palavra com alegria!",
    date: "14 de Outubro, 2025",
  },

  {
    user: "EBD Central",
    avatar: "https://i.pravatar.cc/150?img=23",
    video: "https://youtube.com/shorts/hHWWRl04CiU?si=QWxpVo8ETFfFUnmI",
    text: "📖 Tema da semana: 'Andar na luz' 💡",
    date: "17 de Outubro, 2025",
  },
  {
    user: "Juventude Cristã",
    avatar: "https://i.pravatar.cc/150?img=45",
    video: "https://www.youtube.com/watch?v=LHgpTnz_g9M",
    text: "🙌 Deus tem grandes planos para ti!",
    date: "16 de Outubro, 2025",
  },
  {
    user: "Louvor Jovem",
    avatar: "https://i.pravatar.cc/150?img=34",
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    text: "🎤 Adoração com todo o coração ❤️",
    date: "15 de Outubro, 2025",
  },
  {
    user: "Ministério Infantil",
    avatar: "https://i.pravatar.cc/150?img=29",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "👧 Aprendendo a palavra com alegria!",
    date: "14 de Outubro, 2025",
  },
  {
    user: "EBD Central",
    avatar: "https://i.pravatar.cc/150?img=23",
    video: "https://youtube.com/shorts/hHWWRl04CiU?si=QWxpVo8ETFfFUnmI",
    text: "📖 Tema da semana: 'Andar na luz' 💡",
    date: "17 de Outubro, 2025",
  },
  {
    user: "Juventude Cristã",
    avatar: "https://i.pravatar.cc/150?img=45",
    video: "https://www.youtube.com/watch?v=LHgpTnz_g9M",
    text: "🙌 Deus tem grandes planos para ti!",
    date: "16 de Outubro, 2025",
  },
  {
    user: "Louvor Jovem",
    avatar: "https://i.pravatar.cc/150?img=34",
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    text: "🎤 Adoração com todo o coração ❤️",
    date: "15 de Outubro, 2025",
  },
  {
    user: "Ministério Infantil",
    avatar: "https://i.pravatar.cc/150?img=29",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "👧 Aprendendo a palavra com alegria!",
    date: "14 de Outubro, 2025",
  },
  {
    user: "EBD Central",
    avatar: "https://i.pravatar.cc/150?img=23",
    video: "https://youtube.com/shorts/hHWWRl04CiU?si=QWxpVo8ETFfFUnmI",
    text: "📖 Tema da semana: 'Andar na luz' 💡",
    date: "17 de Outubro, 2025",
  },
  {
    user: "Juventude Cristã",
    avatar: "https://i.pravatar.cc/150?img=45",
    video: "https://www.youtube.com/watch?v=LHgpTnz_g9M",
    text: "🙌 Deus tem grandes planos para ti!",
    date: "16 de Outubro, 2025",
  },
  {
    user: "Louvor Jovem",
    avatar: "https://i.pravatar.cc/150?img=34",
    video: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    text: "🎤 Adoração com todo o coração ❤️",
    date: "15 de Outubro, 2025",
  },
  {
    user: "Ministério Infantil",
    avatar: "https://i.pravatar.cc/150?img=29",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    text: "👧 Aprendendo a palavra com alegria!",
    date: "14 de Outubro, 2025",
  },
];

// 🔧 Converte qualquer link YouTube/Shorts/Watch para formato embed
function toEmbedLink(url) {
  if (url.includes("embed")) return url;
  let id = "";

  if (url.includes("shorts/")) {
    id = url.split("shorts/")[1].split("?")[0];
  } else if (url.includes("watch?v=")) {
    id = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    id = url.split("youtu.be/")[1].split("?")[0];
  }

  return `https://www.youtube.com/embed/${id}`;
}

function carregarPosts() {
  feed.innerHTML = posts
    .map(
      (p) => `
      <div class="post">
        <div class="post-header">
          <img src="${p.avatar}" alt="${p.user}" />
          <h3>${p.user}</h3>
        </div>

        <div class="post-video">
          <iframe
            src="${toEmbedLink(p.video)}"
            title="${p.text}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
