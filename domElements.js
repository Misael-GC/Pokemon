//seleccionar las etiquetas
const pokeImg = document.querySelector('#poke-img');
let canvasGraphicDetail = document.getElementById("GraficoDetails").getContext("2d");
const pokeName = document.querySelector('#NamePokemon')
let pokeAtaqueName;
let pokeAtaque;
let pokeDefName;
let pokeDef;
let pokeSpAtckName;
let pokeSpAtck;
let pokeSpDefName;
let pokeSpDef;
let pokeSpeedName;
let pokeSpeed;
let pokeHpName;
let pokeHp;
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
        // console.log(currentPokemon)

        //nombre e imagen del pokemon
        pokeImg.src = currentPokemon.sprites.other["official-artwork"].front_default;
        pokeName.textContent = currentPokemon.name;
         //console.log(data.sprites.other["official-artwork"].front_default)

         pokeAtaqueName = currentPokemon.stats[1].stat.name;
         pokeAtaque = currentPokemon.stats[1].base_stat;

         pokeDefName = currentPokemon.stats[2].stat.name;
         pokeDef = currentPokemon.stats[2].base_stat;

         pokeSpAtckName = currentPokemon.stats[3].stat.name;
         pokeSpAtck = currentPokemon.stats[3].base_stat;

         pokeSpDefName = currentPokemon.stats[4].stat.name;
         pokeSpDef = currentPokemon.stats[4].base_stat;

         pokeSpeedName = currentPokemon.stats[5].stat.name;
         pokeSpeed = currentPokemon.stats[5].base_stat;

         pokeHpName=currentPokemon.stats[0].stat.name;
         pokeHp = currentPokemon.stats[0].base_stat;

        //Grafico
         window.myChart = new Chart(canvasGraphicDetail,{
            type: "polarArea",
            data:{
                labels:[pokeAtaqueName, pokeDefName, pokeSpAtckName, pokeSpDefName, pokeSpeedName, pokeHpName],
                datasets:[
                    {
                        label: "Detalles",
                        backgroundColor: [
                            '#d40005',
                            'rgb(54, 162, 235)',
                            '#000000',
                            '#B3B6B7',
                            '#D0E325',
                            '#94E325',
                          ],
                        
                        data:[ pokeAtaque, pokeDef, pokeSpAtck, pokeSpDef, pokeSpeed, pokeHp ]
                    }
                ]
            },
            options: {
              plugins: {
                  legend: {
                      display: true,
                      labels: {
                          color: 'rgb(255, 255,255)'
                      }
                  }
              }
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


printPokemon(1)

