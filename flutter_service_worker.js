'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a9182567518ff1905b5e90fe75774840",
"assets/AssetManifest.bin.json": "660dd98ae18b3abf02c58df4db82aac9",
"assets/AssetManifest.json": "648e60b0546533fc0396d74512aabbca",
"assets/assets/fonts/AirbnbCereal_W_Bk.otf": "e0d7024f3f89e85aa9303cd0fe5afa82",
"assets/assets/fonts/Kufam-regular.ttf": "3de079d8ab5c1d8580983a7556677af7",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/fonts/Valentino.otf": "a3d0c972171c85ac72d8c7c168a5e953",
"assets/assets/images/background.jpg": "28acc3e62907b27b6bf34fc0aa92e1d6",
"assets/assets/images/bg2.png": "c9f5279f7fc5a4183843d8aeffe46d23",
"assets/assets/images/blackout.jpg": "1b2da1e600d4282eb0803de521a6a733",
"assets/assets/images/blinds.jpg": "83015c07bc750455c5b93da360696947",
"assets/assets/images/coffee.svg": "0518c6c2bc2c4cf49a4505387e90c99b",
"assets/assets/images/Collections.json": "92dbc608abfd1438ea684fd2aa757914",
"assets/assets/images/curtain.svg": "29354442b08b54f46908e4312c7ddf47",
"assets/assets/images/Expert-Design-Team.json": "602c3835ed4618202727a0e5461018d9",
"assets/assets/images/instagram.svg": "e8d6a98d0f53f45d03f4a3a3e41c23e9",
"assets/assets/images/logo.png": "955b1f9fc8d6e08689dd268687bc0fea",
"assets/assets/images/logo.svg": "ffe34075f98e74cdd2923f404603cb9b",
"assets/assets/images/map.png": "98ceda4562a9c02487aad8a9398a19e0",
"assets/assets/images/map.svg": "92de4f8a3eab6b05251452e30f3a78bf",
"assets/assets/images/phone.svg": "0393801d912061a9908c83c26d4af49d",
"assets/assets/images/pinterest.svg": "3daf31e07cf1bf74d24b9fc921ef6ffa",
"assets/assets/images/repair.svg": "bbb9f41d99906b6e92d9897f38eafeda",
"assets/assets/images/rewind-time.svg": "4da6629afb11dee3de081b48db245a14",
"assets/assets/images/roller.jpg": "3ce0c0229852988e0eb290ed998bb325",
"assets/assets/images/seat1.jpg": "c2c4f8ce3ff16ba2cb3692d4ca33b75b",
"assets/assets/images/seat2.jpg": "090a0b4e8cc16da335cb605d52086876",
"assets/assets/images/seat3.jpg": "a682fa6f8f2afc840d494f08a148f768",
"assets/assets/images/seat4.jpg": "f6800be2519f135cffefad955a84161d",
"assets/assets/images/Steamless-Project-management.json": "3e51e074a6f3797ce2ad649ca4d0d218",
"assets/assets/images/style-guide.svg": "969c47edb881169094567dca0e5c1e7f",
"assets/assets/images/wave.jpg": "ce6afb1a57caffdb05aac34766c9fbb9",
"assets/assets/images/whatsapp.png": "6d631d41fe5f850f2e47427a30af3e4f",
"assets/assets/images/whatsapp.svg": "e2583a0ca44eff76b0fa69cc85a336b1",
"assets/FontManifest.json": "b47d5857bcd9bfe1c69bf84446210a00",
"assets/fonts/MaterialIcons-Regular.otf": "3a44a78d34f4e8add1a089e33c0f0d76",
"assets/NOTICES": "366af30b231b442ada74bfdcf85b2bbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "321aa0c874f6112cabafc27a74a784b4",
"canvaskit/canvaskit.js.symbols": "15066d786d0fefb6bf6b07e90a54b72f",
"canvaskit/canvaskit.wasm": "209e2935b87cb67108a2383327092c8b",
"canvaskit/chromium/canvaskit.js": "bc979fce6b4b3cc75d54b0d162cafaa7",
"canvaskit/chromium/canvaskit.js.symbols": "aa827903660a477d251e8dba03b59a8a",
"canvaskit/chromium/canvaskit.wasm": "9f249d9e9f2586da273d99ff33356f6c",
"canvaskit/skwasm.js": "411f776c9a5204d1e466141767f5a8fa",
"canvaskit/skwasm.js.symbols": "9f92a7410d7e7817623df1b44f7dd034",
"canvaskit/skwasm.wasm": "54112cfd3a0dd75501454de6387e601d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "40163f4181b6ac60c1880f97444e13d6",
"/": "40163f4181b6ac60c1880f97444e13d6",
"main.dart.js": "97857e834192ac65f05a0cb16e414bff",
"manifest.json": "d92c3847ce020e74bd8ee257c53f36ec",
"version.json": "5f96edf65535125630611a5752205926"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
