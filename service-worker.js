const CACHE_NAME = 'hmongnotes-cache-v17';

const urlsToCache = [
  '/',    // Root
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  
  'index.html',
  'hmongnotes.html',
  '1.html',
  'png_files/1._Kuv_nyiam_hu_nkauj_4_page000.png',

  'license.html',
  'favicon.ico',
  'service-worker.js',
  'css/index.css',
  'css/slider.css',
  'css/style.css',
  'images/appname.png',
  'images/arrow-l-black.png',
  'images/arrow-r-black.png',
  'images/booktitle.png',
  'images/booktitle_old1.png',
  'images/booktitle_old2.png',
  'images/call.png',
  'images/CC.png',
  'images/footer_bg.png',
  'images/footer_bg1.png',
  'images/logo.png',
  'images/logo.psd',
  'images/music-notes.jpg',
  'images/pin.png',
  'images/search.png',
  'images/search_h.png',
  'images/slide-pagenat.png',
  'images/slider-icons.png',
  'images/slider_bg.jpg',
  'images/slider_bg1.jpg',
  'images/top-move.jpg',
  'fonts/fonts.css',
  'fonts/Phetsarath-Bold.ttf',
  'fonts/Phetsarath-Regular.ttf',
  'js/easing.js',
  'js/font-buttons.js',
  'js/index.js',
  'js/jquery.cslider.js',
  'js/jquery.flexisel.js',
  'js/jquery.min.js',
  'js/modernizr.custom.28468.js',
  'js/move-top.js',
  'js/script.js'
];

let shouldCache = false;

// Unified message handler
self.addEventListener('message', event => {
  switch (event.data) {
    case 'START_CACHING':
      shouldCache = true;
      caches.open(CACHE_NAME).then(cache => {
        Promise.allSettled(urlsToCache.map(url => cache.add(url)))
          .then(results => {
            const failed = results.filter(r => r.status === 'rejected');
            if (failed.length > 0) {
              console.warn(`${failed.length} files failed to cache:`, failed);
            } else {
              console.log('All files cached successfully');
            }
            event.source?.postMessage('CACHING_COMPLETE');
          });
      });
      break;

    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'CLEAR_CACHE':
      shouldCache = false;
      caches.keys().then(cacheNames => {
        Promise.all(cacheNames.map(cache => caches.delete(cache))).then(() => {
          event.source?.postMessage('CACHE_CLEARED');
        });
      });
      break;
  }
});

// Install: wait for opt-in before caching
self.addEventListener('install', event => {
  self.skipWaiting(); // Always activate new SW immediately
  event.waitUntil(Promise.resolve()); // Wait for message
});

// Activate: clean old caches, then claim clients if caching enabled
self.addEventListener('activate', event => {
  event.waitUntil(
    (shouldCache
      ? caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
      : Promise.resolve()
    )
    .then(() =>
      caches.keys().then(cacheNames =>
        Promise.all(
          cacheNames.map(cache => {
            if (cache !== CACHE_NAME) return caches.delete(cache);
          })
        )
      )
    )
    .then(() => self.clients.claim())
  );
});

// Fetch: serve from cache, fallback to network or fallback page
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  if (
    request.mode === 'navigate' ||
    (request.headers.get('accept')?.includes('text/html') && !url.pathname.endsWith('.html'))
  ) {
    const fallbackUrl = url.pathname.endsWith('/')
      ? `${url.pathname}index.html`
      : `${url.pathname}.html`;

    event.respondWith(
      caches.match(fallbackUrl).then(response => {
        return response || fetch(request).catch(() => caches.match('/contents.html'));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(response => {
      if (response) return response;

      return fetch(request).catch(() => {
        if (request.destination === 'document') {
          return caches.match('/contents.html');
        }
        return new Response('', { status: 404, statusText: 'Not found' });
      });
    })
  );
});