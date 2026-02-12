self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("mafia-Cache").then(Cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icon.png"
            ]);
        })
    );
});