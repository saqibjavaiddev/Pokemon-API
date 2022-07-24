const poke_container = document.querySelector('#poke_container');
const pokemons_number = 150;

const getpokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createpokemoncard(pokemon);
}

const fetchpokemons = async() => {
    for (let i=1 ; i <= pokemons_number ; i++) {
        await getpokemon(i);
    }
}

fetchpokemons();

const createpokemoncard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const poke_type = pokemon.types.map(type => type.type.name);

    const pokeinnerHTML = `
    <div class="img-container">
    <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
    </div>
    <div class="info">
        <span class="number">${pokemon.id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${poke_type[0]}</span></small>
    </div>
    `;

    pokemonEl.innerHTML = pokeinnerHTML;
    poke_container.appendChild(pokemonEl);
}