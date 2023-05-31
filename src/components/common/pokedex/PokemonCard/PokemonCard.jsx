import "./PokemonCard.css"

import { useEffect, useState } from "react"
import { getPokemonById } from "../../../../services/getPokemonById"




const PokemonCard = ({pokemonId}) => {

  const [pokemon, setPokemon] = useState(null)

  const statsOfInterest = ['hp', 'attack', 'defense', 'speed']
  const stats= pokemon?.stats.filter((stat) => statsOfInterest.includes(stat.name.toLowerCase()))

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };

    loadPokemon();
  }, [])

  
  
  return (
    <article className="pokemon-card"  >
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
      <>
      <div className="pokemon-card_img">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>

        <h2  className="pokemon-card_tittle">{pokemon.name}</h2>

        <section className="pokemon-type_container">
          

         <ul className="pokemon-card_types">
          {pokemon.types.map((type) => (
            <li key={type} className="pokemons-type" >{type}</li>
          ))}
          </ul>
          <h3 className="pokemon-type_tittle">Type</h3>
        </section>

        <section className="pokemon-stats_container">
          <ul className="pokemon-card_list">
            {stats.map((stat) => (
              <li key={stat.name} className="pokemon-card_stats">
                <span>{stat.name.toUpperCase()}</span>
                <span>{stat.value}</span>
              </li>
            ))}
          </ul>
        </section>
        </>
        )}
    </article>
  )
}

export default PokemonCard