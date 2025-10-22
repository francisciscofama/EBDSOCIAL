// Importar os módulos necessários
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBsv7Flba-MzRtBeYPkQ4s0uysdZm5LrVk",
  authDomain: "ebd---redecrista.firebaseapp.com",
  projectId: "ebd---redecrista",
  storageBucket: "ebd---redecrista.firebasestorage.app",
  messagingSenderId: "801507398801",
  appId: "1:801507398801:web:e337a96ea9a52f64a2db30",
  measurementId: "G-N1VW23ZRLH",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 👉 Adiciona aqui para testar
console.log("✅ Firebase inicializado:", app.name);
