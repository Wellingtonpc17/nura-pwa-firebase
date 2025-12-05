const CACHE_NAME = 'nura-v5';

const ASSETS = [
  '/',
  '/index.html',
  '/firebase-auth.js',
  '/scripts/script.js',
  '/styles/style.css',
  '/manifest.json',

  '/pages/cadastro.html',
  '/pages/perfil.html',
  '/pages/produtos.html',
  '/pages/carrinho.html',

  '/icons/favicon-192.png',
  '/icons/favicon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});

