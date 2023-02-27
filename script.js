const  pokemonName = document.querySelector('.name');
const  pokemonNumber = document.querySelector('.number');
const  pokemonGif = document.querySelector('.image');
const  form = document.querySelector('.form');
const  input = document.querySelector('.input_search');
const  prev = document.querySelector(".Prev")
const next = document.querySelector(".Next")
var id = 0


const fetchPokemon= async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    const data = await APIResponse.json();
    return data;
}
const renderPokemon= async (pokemon) => {
    const data  = await fetchPokemon(pokemon);
    id = Number(data['id'])
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data['id'];
    pokemonGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';

}

renderPokemon('1')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    renderPokemon(input.value);
    
});
prev.addEventListener('click', (event)=>{
    const x = id-1
    renderPokemon(`${x}`);
  
})
next.addEventListener('click', (event)=>{
    const x = id+1
    renderPokemon(`${x}`);
  
})
