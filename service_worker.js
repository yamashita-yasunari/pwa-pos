//service_worker.js
self.addEventListener('install', funstion(e)){
  console.log('[serviceWorker] Install');
}

self.addEventListener('activate', funstion(e)){
  console.log('[serviceWorker] Activate');
}

self.addEventListener('fetch', funstion(event)){});