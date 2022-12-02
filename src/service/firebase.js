/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { setPushToken } from './userApi';

const firebaseConfig = {
  apiKey: 'AIzaSyAOsglt91e9wRm6aqQDyGqqTNq3eRfa5ck',
  authDomain: 'prode-f3134.firebaseapp.com',
  projectId: 'prode-f3134',
  storageBucket: 'prode-f3134.appspot.com',
  messagingSenderId: '482392305470',
  appId: '1:482392305470:web:fd6ed49e3beb06362e866f',
  measurementId: 'G-YKKEX8XVF4',
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging();

const getTokenPush = () => {
  return getToken(messaging, {
    vapidKey:
      'BIRurMVEEPL5FTg6CCNAanpKShjanyLi5To7WT-GUdxc-zFmQdRZsIuktGWz5kTmoEipG4Gt_H93CWizQ__z0Jg',
  })
    .then((currentToken) => {
      if (currentToken) {
        setPushToken(currentToken);
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving push token. ', err);
    });
};

const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export { app, getTokenPush, onMessageListener, messaging };
