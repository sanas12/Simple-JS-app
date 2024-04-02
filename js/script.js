let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add('btn-primary', 'btn-block', 'btn-lg', 'mb-3');
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');

    
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

 

  let modal = document.querySelector('.modal');

  function showDetails(item) {
      pokemonRepo.loadDetails(item).then(function() {
          showModal(item)
      })
  }

  function showModal(pokemon) {
      let modalBody = document.querySelector('.modal-body');
      let modalHeader = document.querySelector('.modal-header');
      modalBody.innerHTML = '';


      let modalTitle = document.querySelector('.modal-title');
      let closeButtonElement = document.querySelector('.close');

      let imageElement = document.createElement('img');
      imageElement.classList.add('modal-img');
      imageElement.src = pokemon.imageUrl;
      imageElement.alt = 'image of' + pokemon.name;

      let typesElement = document.createElement('p');
      let types = [pokemon.types[0].type.name];
      for (let i = 1; i < pokemon.types.length; i++) {
          types.push(', ' + pokemon.types[i].type.name);
      }
      typesElement.innerHTML = 'Types:' + types.join('');

      let heightElement = document.createElement('p');
      heightElement.innerHTML = 'Height:' + pokemon.height;

      let weightElement = document.createElement('p');
      weightElement.innerHTML = 'Weight:' + pokemon.weight;

      let abilities = document.createElement('p');
      let abilitiesList = [pokemon.abilities[0].ability.name];
      for (let i = 1; i < pokemon.abilities.length; i++) {
          abilitiesList.push(', ' + pokemon.abilities[i].ability.name);
      }
      abilities.innerHTML = 'Abilities:' + abilitiesList.join('');

      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(closeButtonElement);
      modalBody.appendChild(imageElement);
      modalBody.appendChild(typesElement);
      modalBody.appendChild(heightElement);
      modalBody.appendChild(weightElement);
      modalBody.appendChild(abilities);
  }
  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  // Close modal by clicking outside of it
  document.querySelector("#modal-container").addEventListener("click", function(e) {
    let target = e.target;
    if (target === document.querySelector("#modal-container")) {
      hideModal();
    }
  });

  // Close modal with the escape key
  window.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && document.querySelector("#modal-container").classList.contains("is-visible")) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
