
function convertPokemonTypesToList(pokemonTypes) {
  return pokemonTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToItemList(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${convertPokemonTypesToList(pokemon.types).join('')}
        </ol>

        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
      </div>
    </li>
  `;
}

const pokemonsList = document.getElementById("pokemonList");

pokeAPI.getPokemons().then((pokemons = []) => {
  pokemonsList.innerHTML += pokemons.map(convertPokemonToItemList).join('');    
})
