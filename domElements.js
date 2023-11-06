//seleccionar las etiquetas
const pokeImg = document.querySelector('#poke-img');
let canvasGraphicDetail = document.getElementById("GraficoDetails").getContext("2d");
const pokeName = document.querySelector('#NamePokemon')
let pokeAtaqueName;
let pokeAtaque;
let pokeDefName;
let pokeDef;
let pokeSpeed;
let pokeSpDef;
let pokeSpAtck;
let myChart; //definir la variable para el gráfico que se va a destruir

//https://platzi.com/clases/3102-portafolio-web-2022/50516-arreglando-los-bugs-de-wordle-sesion-11-6-de-junio/
//MINUTO 45

//llamar la API
const BASE_API = 'https://pokeapi.co/api/v2';
const pokemon_API = `${BASE_API}/pokemon`;

let currentPokemon;

const fetchData = (API) => {
    return  fetch(API)
        .then((res) => res.json())
        .then((data) => data)
};

//Describir el pokemon toma la API y un nodo


 const printPokemon = (pokemon) => {
     fetchData(`${pokemon_API}/${pokemon}`)
     .then(data =>{

         // Destruye el gráfico anterior si existe
      if (window.myChart) {
        window.myChart.destroy();
      }

        currentPokemon = data;
        console.log(currentPokemon)

        //nombre e imagen del pokemon
        pokeImg.src = currentPokemon.sprites.other["official-artwork"].front_default;
        pokeName.textContent = currentPokemon.name;
         //console.log(data.sprites.other["official-artwork"].front_default)
         //Nombre y puntaje del daño
         pokeAtaqueName = currentPokemon.stats[1].stat.name;
         pokeAtaque = currentPokemon.stats[1].base_stat;

         pokeDefName = currentPokemon.stats[2].stat.name;
         pokeDef = currentPokemon.stats[2].base_stat;
         console.log(pokeAtaqueName)

        //Grafico
         window.myChart = new Chart(canvasGraphicDetail,{
            type: "polarArea",
            data:{
                labels:[pokeAtaqueName, pokeDefName, "vida"],
                datasets:[
                    {
                        label: "Detalles",
                        backgroundColor: [
                            '#d40005',
                            'rgb(54, 162, 235)',
                            '#B3B6B7',
                            '#000000',
                          ],
                        
                        data:[ pokeAtaque, pokeDef, pokeSpeed]
                    }
                ]
            }
         });
         return data;
     })
};



const prevPokemon = () =>{
    if(currentPokemon.id === 1){
        currentPokemon.id = 250;
    }
    printPokemon(currentPokemon.id - 1)
}

const nextPokemon = () =>{
  // Aumentar el ID del Pokémon actual
  currentPokemon.id++;
  
  // Si el ID es mayor que 250, volver al primer Pokémon
  if (currentPokemon.id > 250) {
    currentPokemon.id = 1;
  }
  
  // Llamar a la función para imprimir los detalles del nuevo Pokémon
  printPokemon(currentPokemon.id);
}

 console.log('vivo')

// // ...


printPokemon(1)
