const feed = document.getElementById("feed");

const posts = [
  {
    user: "Igreja Betel",
    avatar: "https://i.pravatar.cc/150?img=12",
    video: "https://youtube.com/shorts/YH-D95pf_VY?si=FMWm8dohTvj9LFvC",
    text: "🎶 Louvai ao Senhor, porque Ele é bom! 🙌",
    date: "18 de Outubro, 2025",
  },

  {
    user: "Francisco Marques Afonso",
    avatar: "https://i.pravatar.cc/150?img=12",
    video:
      "https://web.facebook.com/share/r/19Si1LQPMb/?mibextid=rS40aB7S9Ucbxw6v",
    text: "🎶 Louvai ao Senhor, porque Ele é bom! 🙌",
    date: "18 de Outubro, 2025",
  },
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
    video: "https://youtu.be/LHgpTnz_g9M?si=VuAYsXncgc6iXQj0",
    text: "🎤 Adoração com todo o coração ❤️",
    date: "15 de Outubro, 2025",
  },
  {
    user: "Ministério Infantil",
    avatar: "https://i.pravatar.cc/150?img=29",
    video: "https://youtube.com/shorts/F9CGJI2cmZY?si=ZIY8PiPJ97pCkbQy",
    text: "👧 Aprendendo a palavra com alegria!",
    date: "14 de Outubro, 2025",
  },
];

// 🔧 Converte qualquer link YouTube para embed e remove controles
function toEmbedLink(url) {
  if (url.includes("embed")) return url;

  let id = "";
  if (url.includes("shorts/")) id = url.split("shorts/")[1].split("?")[0];
  else if (url.includes("watch?v="))
    id = url.split("watch?v=")[1].split("&")[0];
  else if (url.includes("youtu.be/"))
    id = url.split("youtu.be/")[1].split("?")[0];

  // Parâmetros para esconder controles e elementos do YouTube
  return `https://www.youtube.com/embed/${id}?enablejsapi=1&origin=${location.origin}&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`;
}

// 🧩 Carrega os posts no feed
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
            class="video-frame"
            src="${toEmbedLink(p.video)}"
            title="${p.text}"
            frameborder="0"
            allow="autoplay; encrypted-media"
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

  iniciarAutoPlay();
}

// 🎬 Faz autoplay quando o vídeo entra na tela
function iniciarAutoPlay() {
  const iframes = document.querySelectorAll(".video-frame");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const iframe = entry.target;
        const command = entry.isIntersecting
          ? '{"event":"command","func":"playVideo","args":""}'
          : '{"event":"command","func":"pauseVideo","args":""}';
        iframe.contentWindow.postMessage(command, "*");
      });
    },
    { threshold: 0.6 } // Toca se 60% do vídeo estiver visível
  );

  iframes.forEach((iframe) => observer.observe(iframe));
}

carregarPosts();

let deferredPrompt;
const installBtn = document.getElementById("btn-instalar");

installBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") console.log("Usuário aceitou instalar a app");
    else console.log("Usuário recusou instalar a app");
    deferredPrompt = null;
    installBtn.style.display = "none";
  }
});

// Detecta instalação concluída
window.addEventListener("appinstalled", () => {
  console.log("PWA instalada!");
  installBtn.style.display = "none";
});

const btnPerfil = document.getElementById("btnPerfil");

btnPerfil.addEventListener("click", () => {
  window.location.href = "perfil.html";
});
