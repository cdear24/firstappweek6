// Dictionary mapping animals to Pokémon names
const animalMap = {
  turtle: ["squirtle", "wartortle", "blastoise", "turtwig", "tirtouga", "drednaw"],
  tortoise: ["torkoal", "turtwig", "grotle", "torterra"],
  fox: ["vulpix", "ninetales", "eevee", "fennekin", "nickit", "zorua"],
  mouse: ["pikachu", "raichu", "sandshrew", "marill", "dedenne", "pawmi"],
  rat: ["rattata", "raticate"],
  cat: ["meowth", "persian", "skitty", "purrloin", "litten", "sprigatito"],
  dog: ["growlithe", "arcanine", "snubbull", "electrike", "yamper", "fidough"],
  wolf: ["lycanroc", "mightyena", "zacian", "zamazenta"],
  bear: ["teddiursa", "ursaring", "beartic", "pancham", "bewear", "kubfu"],
  owl: ["hoothoot", "noctowl", "rowlet", "dartrix", "decidueye"],
  dragon: ["dratini", "dragonair", "dragonite", "gible", "axew", "druddigon"],
  monkey: ["mankey", "primeape", "chimchar", "grookey", "pansear", "pansage"],
  frog: ["poliwag", "croagunk", "froakie", "frogadier", "greninja", "tadbulb"],
  snake: ["ekans", "arbok", "seviper", "silicobra"],
  duck: ["psyduck", "golduck", "farfetchd", "ducklett", "quaxly"],
  bird: ["pidgey", "spearow", "tailow", "starly", "pikipek", "rookidee"],
  rhino: ["rhyhorn", "rhydon", "rhyperior"],
  rabbit: ["buneary", "bunnelby", "scorbunny", "lopunny"],
  lion: ["shinx", "luxio", "luxray", "pyroar", "solgaleo", "litleo"],
  tiger: ["raikou", "incineroar"],
  elephant: ["phanpy", "donphan", "cufant", "copperajah"],
  pig: ["swinub", "tepig", "pignite", "emboar", "lechonk"],
  penguin: ["piplup", "prinplup", "empoleon", "eiscue"],
  horse: ["ponyta", "rapidash", "blitzle", "zebstrika", "spectrier"],
  butterfly: ["butterfree", "beautifly", "vivillon"],
  spider: ["spinarak", "ariados", "joltik", "tarountula"],
  fish: ["magikarp", "goldeen", "feebas", "finneon", "wishiwashi"],
  shark: ["sharpedo", "garchomp"],
  crocodile: ["totodile", "croconaw", "feraligatr", "sandile", "fuecoco"],
  alligator: ["totodile", "sandile", "fuecoco"],
  bat: ["zubat", "golbat", "crobat", "woobat", "noibat"],
  bee: ["beedrill", "combee", "vespiquen"],
  chameleon: ["charmander", "charmeleon", "kecleon"],
  whale: ["wailmer", "wailord", "kyogre"],
  eagle: ["braviary"]
};

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsGrid = document.getElementById('resultsGrid');



async function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  resultsGrid.innerHTML = '<p class="message">Searching Pokédex...</p>';

  if (!query) {
    resultsGrid.innerHTML = '<p class="message">Please enter an animal name.</p>';
    return;
  }

  const matchingPokemon = animalMap[query];

  if (!matchingPokemon || matchingPokemon.length === 0) {
    resultsGrid.innerHTML = `<p class="message">No matching Pokémon found for "${query}". Please try again.</p>`;
    return;
  }

  resultsGrid.innerHTML = ''; 

  for (const name of matchingPokemon) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) continue;

      const data = await response.json();
      const types = data.types.map(t => t.type.name).join(' / ');
      const imageUrl = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;

      const card = document.createElement('div');
      card.className = 'pokemon-card';
      card.innerHTML = `
        <img src="${imageUrl}" alt="${data.name}">
        <div class="pokemon-name">${data.name}</div>
        <div class="pokemon-type">${types}</div>
      `;

      resultsGrid.appendChild(card);
    } catch (error) {
      console.error(`Error fetching Pokémon ${name}:`, error);
    }
  }
}


searchBtn.addEventListener('click', handleSearch);

searchInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleSearch();
  }
});