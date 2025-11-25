const CACHE_NAME = 'study-game-v1';
const FILES_TO_CACHE = ['/', 'index.html', 'app.js', 'style.css', 'icon-192.png', 'icon-512.png', 'manifest.json'];

self.addEventListener('install', (evt) => {
  evt.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
});
self.addEventListener('fetch', (evt) => {
  evt.respondWith(caches.match(evt.request).then(resp => resp || fetch(evt.request)));
});
