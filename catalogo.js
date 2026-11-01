/* Catálogo de Episodios de Terranula
   Añade cada partida aprobada como un objeto dentro de la lista. Ejemplo de ficha (bórrale las barras para usarla):

  {
    id: "la-casa-del-faro",                 // sin espacios ni tildes; sirve de enlace directo: tuweb/#la-casa-del-faro
    titulo: "La casa del faro",
    autor: "Nombre o seudónimo",
    idioma: "es",                            // "es", "en" o "bi" (bilingüe)
    estado: "publicada",                     // "publicada" o "preparacion"
    generos: ["cosmico", "misterio"],        // hasta 3 claves: terror, cosmico, gotico, fantasia, epica, comedia, misterio,
                                             // cifi, ciberpunk, postapo, historico, mitologico, pulp, intriga, western,
                                             // belico, superheroes, iniciacion
    sistema: "coc7",                         // dnd2024, dnd5e, coc7, cocant, ratas, vtm5, vtmclasico, wod, pf2, aquelarre,
                                             // anillo, osr, fate, pbta, propio, otro
    sistemaOtro: "",                         // solo si sistema es "otro": nombre del juego
    publico: "16",                           // "tp" (todos los públicos), "12", "16" o "18"
    advertencias: ["ahogamiento", "locura"], // advertencias de contenido que declara el autor
    jugadores: "3–5",
    sesiones: 1,
    nivel: "Investigadores novatos",         // nivel, experiencia o generación, en texto libre
    ambientacion: "Galicia, 1925",
    resumen: { es: "Resumen en castellano…", en: "Summary in English…" },
    etiquetas: ["one-shot", "costa", "años veinte"],
    licencia: "CC BY-NC-SA 4.0",             // "CC BY-NC-SA 4.0", "CC BY-NC 4.0" o "CC0 1.0"
    pdf: "partidas/la-casa-del-faro.pdf",    // ruta del PDF dentro de la web; vacío si aún no está disponible
    paginas: 24,
    fecha: "2026-11-01"
  },
*/
window.CATALOGO = [
];
