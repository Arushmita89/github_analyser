self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ai-github-analyzer-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/offline.html",
        "/vite.svg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then(res => res || caches.match("/offline.html")))
  );
});
