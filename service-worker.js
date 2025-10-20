const CACHE_NAME = "ebd-cache-v3"; // atualize a cada mudança importante
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/imagens/ebd-192x192.png",
  "/imagens/ebd-512x512.png",
];

// Instala e pré-cacheia
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Ativa e remove caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
  );
  self.clients.claim();
});

// Fetch: tenta rede primeiro, se falhar vai pro cache
self.addEventListener("fetch", (event) => {
  if (FILES_TO_CACHE.includes(new URL(event.request.url).pathname)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Para arquivos externos, usa cache se existir
    event.respondWith(
      caches.match(event.request).then((res) => res || fetch(event.request))
    );
  }
});
