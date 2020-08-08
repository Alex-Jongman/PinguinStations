console.log('SW Startup');

navigator.serviceWorker.register('serviceWorker.js').then(
    function (reg) {
        console.log(':-)', reg);
    },
    function (err) {
        console.log(':-(', err);
    }
);

self.addEventListener('install', event => console.log('SW installed'));
self.addEventListener('activate', event => console.log('SW activated'));
self.addEventListener('fetch', event => {
    console.log('Caught a fetch');
//    event.respondWith(new Response('Hello World'));
});