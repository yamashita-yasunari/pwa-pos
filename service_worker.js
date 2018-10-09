//service_worker.js
self.addEventListener('install', function(e){
  console.log('[serviceWorker] Install');
});

self.addEventListener('activate', function(e){
  console.log('[serviceWorker] Activate');
});

self.addEventListener('fetch', function(event) {});