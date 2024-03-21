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

  function addListItem(pokemon){
    let element= document.querySelector('.pokemon-list');
  let listitem=document.createElement('li');
  let button=document.createElement('button');
    button.addEventListener('click', function() { showDetails(pokemon) });

  button.innerText= pokemon.name;
  button.classList.add('custom-button');
listitem.appendChild(button);
element.appendChild(listitem);



  }
  function showDetails(pokemon){
    console.log(pokemon);
  }
  // Return public functions
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  };
  
  
})();

pokemonRepository.add({ name: 'Pikachu', height: 4, types: ['electric'] });

// Iterate over each Pokémon in the repository
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  

  // Add line break for better formatting
  document.write("<br>");
  
  
  
  
});
