console.log('SW Startup');

self.addEventListener('install', event => console.log('SW installed'));
self.addEventListener('activate', event => console.log('SW activated'));
self.addEventListener('fetch', event => {
    console.log('Caught a fetch');
//    event.respondWith(new Response('Hello World'));
});