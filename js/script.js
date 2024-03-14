let pokemonList = [
    { name: "Bulbasaur", height: 7, types: ['grass', 'poison'] },
    { name: "Charmander", height: 6, types: ['fire'] },
    { name: "Squirtle", height: 5, types: ['water'] }
  ];
  
  // Set the height threshold for special Pokémon
  const specialPokemonThreshold = 6;
  
  // Loop through the pokemonList array
  //for (let i = 0; i < pokemonList.length; i++) {
    // Write Pokémon name and height to the DOM using document.write()
   // document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
   pokemonList.forEach(function(pokemon)
   {
    document.write(pokemon.name + " (height: " + pokemon.height + ")");
   
  
    // Check if the height is above the special threshold
    if (pokemon.height > specialPokemonThreshold) {
      // Add the label for special Pokémon
      document.write(" - Wow, that’s big!");
    }
    document.write("<br>");

  } );
   
    
  