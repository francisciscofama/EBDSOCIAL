// // Service Worker atualizado para atualização automática
// const CACHE_NAME = "ebd-cache-v2"; // atualize a cada mudança importante
// const FILES_TO_CACHE = [
//   "/",
//   "/index.html",
//   "/style.css",
//   "/app.js",
//   "/imagens/ebd-192x192.png",
//   "/imagens/ebd-512x512.png",
// ];

// // Evento de instalação: adiciona arquivos ao cache
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
//   );
//   self.skipWaiting();
// });

// // Evento de ativação: limpa caches antigos
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches
//       .keys()
//       .then((cacheNames) =>
//         Promise.all(
//           cacheNames
//             .filter((name) => name !== CACHE_NAME)
//             .map((name) => caches.delete(name))
//         )
//       )
//   );
//   self.clients.claim();
// });

// // Evento fetch: busca do cache primeiro, depois da rede
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Se tiver no cache, retorna
//       if (response) return response;

//       // Senão, busca na rede e adiciona ao cache
//       return fetch(event.request).then((networkResponse) => {
//         return caches.open(CACHE_NAME).then((cache) => {
//           // Evita caching de requisições externas (como vídeos)
//           if (event.request.url.startsWith(self.origin)) {
//             cache.put(event.request, networkResponse.clone());
//           }
//           return networkResponse;
//         });
//       });
//     })
//   );
// });
