
const CACHE_NAME = "recetafacil-v3";

const ARCHIVOS = [
    "./",
    "./index.html",
    "./css/styles.css",
    "./js/app.js",
    "./manifest.json"
];

// INSTALACIÓN
self.addEventListener("install", evento => {
    evento.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ARCHIVOS);
        })
    );

    self.skipWaiting();
});

// ACTIVACIÓN
self.addEventListener("activate", evento => {
    evento.waitUntil(
        caches.keys().then(claves => {
            return Promise.all(
                claves
                    .filter(clave => clave !== CACHE_NAME)
                    .map(clave => caches.delete(clave))
            );
        })
    );

    self.clients.claim();
});

// CARGA DE ARCHIVOS ACTUALIZADOS
self.addEventListener("fetch", evento => {
    if (evento.request.method !== "GET") return;

    const url = new URL(evento.request.url);

    // Solo trabajar con archivos del proyecto
    if (url.origin !== self.location.origin) return;

    evento.respondWith(
        fetch(evento.request)
            .then(respuesta => {
                if (!respuesta || !respuesta.ok) {
                    throw new Error("No se pudo cargar el archivo");
                }

                const copia = respuesta.clone();

                caches.open(CACHE_NAME).then(cache => {
                    cache.put(evento.request, copia);
                });

                return respuesta;
            })
            .catch(() => {
                return caches.match(evento.request).then(guardado => {
                    if (guardado) return guardado;

                    if (evento.request.mode === "navigate") {
                        return caches.match("./index.html");
                    }

                    return new Response("Archivo no disponible", {
                        status: 404
                    });
                });
            })
    );
});
