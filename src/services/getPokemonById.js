import { axiosInstance } from "../api/axiosInstance";

const getPokemonImg = (sprites) => {
    const firstOption= sprites.other.dream_world.front_default;
    const secondOption= sprites.other["official-artwork"].front_default;
    const thirdOption= sprites.other.front_default;

    if (firstOption) return firstOption;
    if (secondOption) return secondOption;
    if (thirdOption) return thirdOption;
}

export const getPokemonById = async (id) => {
    try {
        const res = await axiosInstance.get(`pokemon/${id}`);
        const pokemonData= res.data;
        
        const adaptedPokemonData = {
            name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
            types: pokemonData.types.map(typeInfo => typeInfo.type.name),
            stats: pokemonData.stats.map(statInfo => ({ name: statInfo.stat.name,
            value: statInfo.base_stat
            })),
            image: getPokemonImg(pokemonData.sprites),
            moves: pokemonData.moves.map(moveInfo => moveInfo.move.name),
            abilities: pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name),
        }

        return adaptedPokemonData;
    } catch (error) {
        console.error(error)
    }
}