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
  {
    id: "el-tesoro-del-duergar",
    titulo: "El Tesoro del Duergar",
    autor: "Jorge Gómez Vaello",
    idioma: "es",
    estado: "publicada",
    generos: ["mitologico", "fantasia", "gotico"],
    sistema: "dnd5e",
    sistemaOtro: "",
    publico: "16",
    advertencias: ["muerte de un animal", "hambre y frío extremos", "violencia", "restos humanos", "transformación corporal", "paranoia"],
    jugadores: "4–5",
    sesiones: 2,
    nivel: "Nivel 2",
    ambientacion: "Valle helado de inspiración nórdica",
    resumen: {
      es: "Perdidos y hambrientos en un valle helado, los personajes cazan un animal junto a un río… y descubren que era el hijo de un rey duergar. Para salvar la vida deberán pagar un rescate imposible: cubrir de oro la piel del muerto con el tesoro de una criatura que no quiere desprenderse de él. Una tragedia en dos sesiones inspirada en el primer episodio de la saga de Sigurd, con un puzle de runas, una gruta llena de trampas y una maldición que pone a prueba la lealtad del grupo.",
      en: "Lost and starving in a frozen valley, the characters hunt an animal by a river… and learn it was the son of a duergar king. To save their lives they must pay an impossible ransom: cover the dead one's hide in gold taken from a creature that will not give it up. A two-session tragedy inspired by the opening episode of the Sigurd saga, with a rune puzzle, a trap-filled grotto and a curse that tests the party's loyalty.",
      de: "Verirrt und ausgehungert in einem vereisten Tal erlegen die Charaktere ein Tier an einem Fluss … und erfahren, dass es der Sohn eines Duergar-Königs war. Um ihr Leben zu retten, müssen sie ein unmögliches Wergeld zahlen: das Fell des Toten mit dem Gold einer Kreatur bedecken, die es nicht hergeben will. Eine Tragödie in zwei Sitzungen nach der ersten Episode der Sigurd-Sage, mit einem Runenrätsel, einer Grotte voller Fallen und einem Fluch, der die Treue der Gruppe prüft.",
      fr: "Perdus et affamés dans une vallée gelée, les personnages chassent un animal au bord d’une rivière… et découvrent qu’il était le fils d’un roi duergar. Pour sauver leur vie, ils doivent payer une rançon impossible : couvrir d’or la peau du défunt avec le trésor d’une créature qui refuse de s’en séparer. Une tragédie en deux séances inspirée du premier épisode de la saga de Sigurd, avec une énigme runique, une grotte piégée et une malédiction qui met à l’épreuve la loyauté du groupe.",
      it: "Perduti e affamati in una valle gelata, i personaggi cacciano un animale vicino a un fiume… e scoprono che era il figlio di un re duergar. Per salvarsi devono pagare un riscatto impossibile: coprire d’oro la pelle del morto con il tesoro di una creatura che non vuole separarsene. Una tragedia in due sessioni ispirata al primo episodio della saga di Sigurd, con un enigma di rune, una grotta piena di trappole e una maledizione che mette alla prova la lealtà del gruppo."
    },
    etiquetas: ["doubleshot", "mitología nórdica", "maldición", "puzle"],
    licencia: "CC BY-NC-SA 4.0",
    pdf: "partidas/el-tesoro-del-duergar.pdf",
    paginas: 32,
    fecha: "2026-11-02"
  },
  {
    id: "la-sombra-en-la-ermita-de-la-luz",
    titulo: "La Sombra en la Ermita de la Luz",
    autor: "Jorge Gómez Vaello",
    idioma: "es",
    estado: "publicada",
    generos: ["fantasia", "misterio", "iniciacion"],
    sistema: "dnd5e",
    sistemaOtro: "",
    publico: "12",
    advertencias: ["menor desaparecido", "criatura infernal", "violencia fantástica leve"],
    jugadores: "3–5",
    sesiones: 1,
    nivel: "Nivel 1",
    ambientacion: "Auriscantia, reino de fantasía tras una guerra infernal",
    resumen: {
      es: "Luces extrañas bailan en una ermita en ruinas y un muchacho de Villa Alba ha desaparecido tras entrar en ella. Los aldeanos hablan de fantasmas, pero lo que espera bajo el altar es algo muy distinto. Una partida de iniciación de una sola sesión, ideal para enseñar el juego: rumores que investigar, un combate sencillo en el bosque, unas ruinas sagradas, un acertijo y un enfrentamiento final contra un enemigo astuto.",
      en: "Strange lights dance in a ruined hermitage, and a boy from Villa Alba has vanished after going inside. The villagers speak of ghosts, but what waits beneath the altar is something else entirely. A one-session starter adventure, ideal for teaching the game: rumours to investigate, a simple fight in the woods, sacred ruins, a riddle and a final showdown with a cunning foe.",
      de: "Seltsame Lichter tanzen in einer verfallenen Einsiedelei, und ein Junge aus Villa Alba ist verschwunden, nachdem er hineingegangen ist. Die Dorfbewohner sprechen von Geistern, doch was unter dem Altar wartet, ist etwas ganz anderes. Ein Einsteigerabenteuer für eine Sitzung, ideal zum Erlernen des Spiels: Gerüchte, ein einfacher Kampf im Wald, heilige Ruinen, ein Rätsel und ein Endkampf gegen einen listigen Gegner.",
      fr: "D’étranges lueurs dansent dans un ermitage en ruine, et un garçon de Villa Alba a disparu après y être entré. Les villageois parlent de fantômes, mais ce qui attend sous l’autel est tout autre chose. Une aventure d’initiation en une séance, idéale pour découvrir le jeu : des rumeurs à suivre, un combat simple en forêt, des ruines sacrées, une énigme et un affrontement final contre un ennemi rusé.",
      it: "Strane luci danzano in un eremo in rovina e un ragazzo di Villa Alba è scomparso dopo esservi entrato. Gli abitanti parlano di fantasmi, ma ciò che attende sotto l’altare è tutt’altra cosa. Un’avventura introduttiva di una sola sessione, ideale per insegnare il gioco: voci da indagare, un semplice scontro nel bosco, rovine sacre, un indovinello e uno scontro finale con un nemico astuto."
    },
    etiquetas: ["one-shot", "iniciación", "acertijo", "ruinas"],
    licencia: "CC BY-NC-SA 4.0",
    pdf: "partidas/la-sombra-en-la-ermita-de-la-luz.pdf",
    paginas: 17,
    fecha: "2026-11-02"
  }
];
