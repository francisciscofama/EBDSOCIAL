// Importa os scripts necessários do Firebase
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js"
);

// Configuração do Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBsv7Flba-MzRtBeYPkQ4s0uysdZm5LrVk",
  authDomain: "ebd---redecrista.firebaseapp.com",
  projectId: "ebd---redecrista",
  storageBucket: "ebd---redecrista.firebasestorage.app",
  messagingSenderId: "801507398801",
  appId: "1:801507398801:web:e337a96ea9a52f64a2db30",
  measurementId: "G-N1VW23ZRLH",
});

// Inicializa o serviço de mensagens
const messaging = firebase.messaging();

// Mostra a notificação quando chega em segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Notificação recebida em segundo plano:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/imagens/ebd-192x192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
