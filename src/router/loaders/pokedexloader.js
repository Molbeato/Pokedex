import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonByTypeId } from "../../services/getPokemonByTypeId";

export const pokedexloader = async ({request}) => {   
    const url = new URL(request.url);
    const pokemonName= url.searchParams.get('pokemonName') ?? '';
    const pokemonTypeId= url.searchParams.get('pokemonType') ?? '';

    let pokemons;

   if (pokemonName && pokemonTypeId) {
        pokemons = await getPokemonByTypeId(pokemonTypeId);
        pokemons = pokemons.filter((pokemon) => 
          pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );
        
   } else if (!pokemonName && !pokemonTypeId) {
        pokemons= await getAllPokemons();

   } else if (pokemonName) {
        pokemons= await getAllPokemons();
        pokemons = pokemons.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );

   } else if (pokemonTypeId) {
        pokemons = await getPokemonByTypeId(pokemonTypeId);
   }

    return { pokemons, pokemonName, pokemonTypeId }
}