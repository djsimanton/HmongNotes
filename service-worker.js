const CACHE_NAME = 'hmongnotes-cache-v19';

const urlsToCache = [
  '/',    // Root
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  
  'index.html',
  'hmongnotes.html',
  '1.html',
    '10.html',
  '100.html',
  '102.html',
  '103.html',
  '104.html',
  '105.html',
  '106.html',
  '107.html',
  '108.html',
  '109.html',
  '11.html',
  '111.html',
  '112.html',
  '113.html',
  '115.html',
  '116.html',
  '117.html',
  '118.html',
  '119.html',
  '12.html',
  '120.html',
  '121.html',
  '123.html',
  '124.html',
  '125.html',
  '126.html',
  '127.html',
  '129.html',
  '13.html',
  '131.html',
  '132.html',
  '133.html',
  '134.html',
  '136.html',
  '137.html',
  '138.html',
  '14.html',
  '140.html',
  '141.html',
  '142.html',
  '143.html',
  '144.html',
  '145.html',
  '146.html',
  '148.html',
  '150.html',
  '151.html',
  '152.html',
  '154.html',
  '155.html',
  '156.html',
  '158.html',
  '16.html',
  '160.html',
  '161.html',
  '162.html',
  '163.html',
  '165.html',
  '167.html',
  '169.html',
  '17.html',
  '171.html',
  '173.html',
  '175.html',
  '177.html',
  '179.html',
  '18.html',
  '181.html',
  '182.html',
  '183.html',
  '185.html',
  '186.html',
  '188.html',
  '189.html',
  '19.html',
  '190.html',
  '191.html',
  '192.html',
  '193.html',
  '194.html',
  '195.html',
  '196.html',
  '197.html',
  '198.html',
  '199.html',
  '2.html',
  '20.html',
  '200.html',
  '201.html',
  '202.html',
  '203.html',
  '205.html',
  '206.html',
  '207.html',
  '208.html',
  '209.html',
  '21.html',
  '210.html',
  '211.html',
  '212.html',
  '213.html',
  '214.html',
  '215.html',
  '216.html',
  '217.html',
  '218.html',
  '219.html',
  '22.html',
  '220.html',
  '221.html',
  '222.html',
  '223.html',
  '224.html',
  '226.html',
  '227.html',
  '228.html',
  '23.html',
  '230.html',
  '232.html',
  '233.html',
  '234.html',
  '235.html',
  '236.html',
  '237.html',
  '238.html',
  '239.html',
  '24.html',
  '240.html',
  '241.html',
  '242.html',
  '244.html',
  '245.html',
  '246.html',
  '248.html',
  '249.html',
  '25.html',
  '250.html',
  '251.html',
  '252.html',
  '254.html',
  '255.html',
  '257.html',
  '258.html',
  '26.html',
  '260.html',
  '261.html',
  '262.html',
  '263.html',
  '264.html',
  '265.html',
  '266.html',
  '267.html',
  '268.html',
  '269.html',
  '27.html',
  '271.html',
  '273.html',
  '274.html',
  '276.html',
  '277.html',
  '278.html',
  '28.html',
  '280.html',
  '281.html',
  '282.html',
  '284.html',
  '286.html',
  '287.html',
  '288.html',
  '289.html',
  '29.html',
  '291.html',
  '292.html',
  '293.html',
  '295.html',
  '297.html',
  '298.html',
  '299.html',
  '3.html',
  '30.html',
  '300.html',
  '301.html',
  '303.html',
  '304.html',
  '305.html',
  '306.html',
  '307.html',
  '309.html',
  '310.html',
  '311.html',
  '312.html',
  '313.html',
  '314.html',
  '315.html',
  '316.html',
  '318.html',
  '32.html',
  '320.html',
  '321.html',
  '322.html',
  '33.html',
  '34.html',
  '35.html',
  '36.html',
  '37.html',
  '39.html',
  '4.html',
  '41.html',
  '42.html',
  '44.html',
  '45.html',
  '46.html',
  '48.html',
  '49.html',
  '5.html',
  '50.html',
  '52.html',
  '53.html',
  '54.html',
  '56.html',
  '57.html',
  '58.html',
  '59.html',
  '6.html',
  '60.html',
  '62.html',
  '63.html',
  '64.html',
  '65.html',
  '66.html',
  '67.html',
  '68.html',
  '69.html',
  '7.html',
  '70.html',
  '72.html',
  '73.html',
  '74.html',
  '76.html',
  '77.html',
  '78.html',
  '79.html',
  '8.html',
  '80.html',
  '82.html',
  '83.html',
  '84.html',
  '85.html',
  '86.html',
  '87.html',
  '88.html',
  '9.html',
  '90.html',
  '91.html',
  '92.html',
  '94.html',
  '95.html',
  '96.html',
  '98.html',
  '99.html',
  'png_files/1._Kuv_nyiam_hu_nkauj_4_page000.png',
  'png_files/10._Thaum_lub_ntuj_kawg_4_page000.png',
  'png_files/100._Take_the_name_of_Jesus_with_You,___101.__Love_one_anothers_page000.png',
  'png_files/100._Take_the_name_of_Jesus_with_You,___101.__Love_one_anothers_page001.png',
  'png_files/102._He_lives_page000.png',
  'png_files/102._He_lives_page001.png',
  'png_files/103._I_m_but_a_stranger_here_page000.png',
  'png_files/104._Blessed_be_the_name_page000.png',
  'png_files/105._He_leadeth_me_page000.png',
  'png_files/106._I_am_so_glad_that_our_Father_page000.png',
  'png_files/107._Jesus_saviour,_pilot_me_page000.png',
  'png_files/108._The_gladness_day_page000.png',
  'png_files/109._Whosoever_heareth,__110._My_life_s_fading_away_page000.png',
  'png_files/109._Whosoever_heareth,__110._My_life_s_fading_away_page001.png',
  'png_files/11._Lord_in_the_morning_page000.png',
  'png_files/111._I_will_sing_of_Jesus__love_page000.png',
  'png_files/112._Thank_you_o_Father_page000.png',
  'png_files/113._To_the_work,__114._Litle_birds_page000.png',
  'png_files/113._To_the_work,__114._Litle_birds_page001.png',
  'png_files/115._Rescue_the_perishing_page000.png',
  'png_files/116._No_not_one_page000.png',
  'png_files/117._Come,_thou_fount_of_every_blessing_page000.png',
  'png_files/118._Be_silent_be_silent_page000.png',
  'png_files/119._There_shall_be_showers_of_blessing_page000.png',

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