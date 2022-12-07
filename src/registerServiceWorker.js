export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('firebase-messaging-sw.js')
      .then((registration) => {
        // eslint-disable-next-line no-console
        console.log('[SW]: SCOPE: ', registration.scope);
        return registration.scope;
      })
      .catch((err) => {
        return err;
      });
  }
};
