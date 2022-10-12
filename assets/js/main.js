const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 151
let offset = 0;

//const maxRecord = 15

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemon = []) => {
        const newHTML = pokemon.map((pokemon)=>`
                <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">

                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}">
                </div>
            </li> 
            `).join('')
        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)
 
loadMoreButton.addEventListener('click', () => {
    offset += limit

    if (qtdRecord => maxRecord) {
        const newLimit = qtdRecord - maxRecord
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(limit, offset)
    }
})