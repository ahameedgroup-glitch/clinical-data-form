const CACHE_NAME = 'data-form-v1';
const ASSETS = [
  'Data_Collection_Form.html',
  'manifest.json'
  // Add any external CSS/JS files or images here
];

// Install the service worker and cache files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Intercept network requests to serve from cache when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});