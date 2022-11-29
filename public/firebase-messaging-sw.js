/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

self.addEventListener('notificationclick', (event) => {
  if (event.notification.data && event.notification.data.click_action) {
    self.clients.openWindow(event.notification.data.click_action);
  } else {
    self.clients.openWindow(event.currentTarget.origin);
  }

  event.notification.close();
});

importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js'
);
importScripts(
  'https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyAOsglt91e9wRm6aqQDyGqqTNq3eRfa5ck',
  authDomain: 'prode-f3134.firebaseapp.com',
  projectId: 'prode-f3134',
  storageBucket: 'prode-f3134.appspot.com',
  messagingSenderId: '482392305470',
  appId: '1:482392305470:web:fd6ed49e3beb06362e866f',
  measurementId: 'G-YKKEX8XVF4',
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage((payload) => {
  console.log('New push notification ', payload);
});
