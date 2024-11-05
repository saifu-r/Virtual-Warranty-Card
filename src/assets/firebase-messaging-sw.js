
// This sample application is using 9.22, make sure you are importing the same version

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-sw.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCWPVAWLsQdurEBK4xN8A33oh1CJu5LEBE",
  authDomain: "virtual-card-86b61.firebaseapp.com",
  projectId: "virtual-card-86b61",
  storageBucket: "virtual-card-86b61.firebasestorage.app",
  messagingSenderId: "96040981038",
  appId: "1:96040981038:web:b2284fcbc606d2ba3845bf",
  measurementId: "G-3JJRFNKEPQ"
});

const messaging = getMessaging(firebaseApp);