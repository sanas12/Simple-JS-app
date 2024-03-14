let pokemonList = [
  { name: "Bulbasaur", height: 7, types: ['grass', 'poison'] },
  { name: "Charmander", height: 6, types: ['fire'] },
  { name: "Squirtle", height: 5, types: ['water'] }
];

// Set the height threshold for special Pokémon
const specialPokemonThreshold = 6;

let pokemonRepository = (function () {
 
  function getAll() {
    return pokemonList;
  }
  
  function add(pokemon) {
    
    pokemonList.push(pokemon);
  }
  // Return public functions
  return {
    getAll: getAll,
    add: add
  };
  
  
})();

pokemonRepository.add({ name: 'Pikachu', height: 4, types: ['electric'] });

// Iterate over each Pokémon in the repository
pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + ' (height: ' + pokemon.height + ')');

  // Check if the height is above the special threshold
  if (pokemon.height > specialPokemonThreshold) {
    // Add the label for special Pokémon
    document.write(" - Wow, that’s big!");
  }
  
  // Add line break for better formatting
  document.write("<br>");
});
