/* Episodios de Terranula: service worker de la aplicación instalable.
   - Páginas y catálogo: primero la red (así las partidas nuevas aparecen al momento); sin conexión, la copia guardada.
   - PDF de /partidas/: se guardan al abrirlos y siguen disponibles sin conexión.
   - Fuentes, iconos y animación: copia guardada, que se renueva en segundo plano.
   Cambia VERSION solo si cambian los archivos de PRECACHE (fuentes, iconos). */
const VERSION = "et-v1";
const PRECACHE = [
  "/",
  "/catalogo.js",
  "/site.webmanifest",
  "/favicon.png",
  "/apple-touch-icon.png",
  "/icon-192.png",
  "/icon-512.png",
  "/isotipo-tl.png",
  "/logo-terranula.png",
  "/darkpack.png",
  "/lifecraft-terranula.woff2",
  "/fonts/fonts.css",
  "/fonts/alegreya-latin-400-italic.woff2",
  "/fonts/alegreya-latin-400-normal.woff2",
  "/fonts/alegreya-latin-500-normal.woff2",
  "/fonts/alegreya-latin-700-normal.woff2",
  "/fonts/alegreya-latin-ext-400-italic.woff2",
  "/fonts/alegreya-latin-ext-400-normal.woff2",
  "/fonts/alegreya-latin-ext-500-normal.woff2",
  "/fonts/alegreya-latin-ext-700-normal.woff2",
  "/fonts/cinzel-latin-500-normal.woff2",
  "/fonts/cinzel-latin-700-normal.woff2",
  "/fonts/cinzel-latin-ext-500-normal.woff2",
  "/fonts/cinzel-latin-ext-700-normal.woff2",
  "/fonts/ibm-plex-mono-latin-400-normal.woff2",
  "/fonts/ibm-plex-mono-latin-500-normal.woff2",
  "/fonts/ibm-plex-mono-latin-ext-400-normal.woff2",
  "/fonts/ibm-plex-mono-latin-ext-500-normal.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const put = (req, res) => { if(res && res.ok && res.status === 200 && !res.redirected){ const c = res.clone(); caches.open(VERSION).then(ca => ca.put(req, c)); } return res; };
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if(req.method !== "GET" || url.origin !== location.origin) return;
  if(req.headers.has("range")) return; /* vídeo por fragmentos: lo sirve la red */
  if(req.mode === "navigate"){
    const key = new Request(url.pathname === "/" || url.pathname === "/index.html" ? "/" : url.pathname);
    e.respondWith(fetch(req).then(r => put(key, r)).catch(() => caches.match(key).then(r => r || caches.match("/"))));
    return;
  }
  if(url.pathname === "/catalogo.js" || url.pathname.startsWith("/partidas/")){
    const key = new Request(url.pathname);
    e.respondWith(fetch(req).then(r => put(key, r)).catch(() => caches.match(key)));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => put(req, r)).catch(() => hit);
    return hit || net;
  }));
});
