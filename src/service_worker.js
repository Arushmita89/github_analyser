
const CACHE_NAME = "ai-github-cache-v1";
const urlsToCache = ["/", "/offline.html"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then(res => res || caches.match("/offline.html"))
    )
  );
});
