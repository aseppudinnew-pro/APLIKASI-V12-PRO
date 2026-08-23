const CACHE_NAME = "myROBOT-V12-v12";

const APP_FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon.svg",
    "./icon-192.png",
    "./icon-512.png"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => {

            return cache.addAll(APP_FILES);

        })

        .then(() => {

            return self.skipWaiting();

        })

    );

});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()

        .then(keys => {

            return Promise.all(

                keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))

            );

        })

        .then(() => {

            return self.clients.claim();

        })

    );

});


self.addEventListener("fetch", event => {

    const request = event.request;

    if (request.method !== "GET") {
        return;
    }


    const url = new URL(request.url);


    if (url.origin === self.location.origin) {

        event.respondWith(

            caches.match(request)

            .then(cached => {

                if (cached) {

                    return cached;

                }


                return fetch(request)

                .then(response => {

                    const copy =
                        response.clone();


                    caches.open(CACHE_NAME)
                    .then(cache => {

                        cache.put(
                            request,
                            copy
                        );

                    });


                    return response;

                })

                .catch(() => {

                    return caches.match(
                        "./index.html"
                    );

                });

            })

        );

    }

});
