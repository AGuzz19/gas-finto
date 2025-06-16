elements.mio_elemento_personalizzato = {
    name: "Test" // nome
	color: "#ff0000",       // Colore rosso
    behavior: behaviors.LIQUID,  // Si comporta come un liquido
    category: "Liquids",    // Categoria nel menu
    density: 1000,          // Valore di densità
    state: "liquid",        // Stato (solido/liquido/gas)
    temp: 20,               // Temperatura predefinita
    tempHigh: 100,          // Si trasforma in vapore a 100°C
    stateHigh: "steam",
	reactions: { 
	"metal": { elem2: "rust", chance: 0.8 },  // 80% di ruggine
        "plant": { elem2: "dead_plant", chance: 0.5 }  // 50% di pianta morta
    },
};
