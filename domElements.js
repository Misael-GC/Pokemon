//seleccionar las etiquetas
const pokeImg = document.querySelector('#poke-img');


//llamar la API
const BASE_API = 'https://pokeapi.co/api/v2';
const pokemon_API = `${BASE_API}/pokemon`;


const fetchData = (API) => {
    return  fetch(API)
        .then((res) => res.json())
        .then((data) => data)
};

//Describir el pokemon toma la API y un nodo


 const printPokemon = (pokemon) => {
     fetchData(`${pokemon_API}/${pokemon}`)
     .then(data =>{
        pokeImg.src = data.sprites.other["official-artwork"].front_default;
         //console.log(data.sprites.other["official-artwork"].front_default)
     })
};

 console.log('vivo')


printPokemon(1)
