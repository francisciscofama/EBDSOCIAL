self.addEventListener("install", () => {
  console.log("Service Worker instalado");
});

self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: "imagens/ebd-192x192.png",
  });
});
