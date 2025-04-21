self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('geektolead-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/assets/icon-192x192.png',
                '/assets/icon-512x512.png',
                '/assets/leadership_toolkit.pdf',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
