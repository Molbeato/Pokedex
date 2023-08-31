import "./PokemonCard.css"

import { useEffect, useState } from "react"
import { getPokemonById } from "../../../../services/getPokemonById"
import { Discuss } from "react-loader-spinner"


const backgroundColorByType = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  unknown: "#68A090",
}

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
    <>
    <article className="pokemon-card">
      {!pokemon && <div class="pokemon-loader">
</div>}

      {pokemon && (
      <>
      <div className={`pokemon-card__container ${pokemon.types[0]}`}>
      <div className="pokemon-card_img">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
        <div className='pokemon-info_container'>
        <h2  className="pokemon-card_tittle">{pokemon.name}</h2>

        <section className="pokemon-type_container">
          

         <ul className="pokemon-card_types">
          {pokemon.types.map((type) => (
            <li key={type} className={`pokemon-card_types ${type}`} >{type}</li>
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
        </div>
        </div>
        </>
        )}
    </article>
    </>
  )
}

export default PokemonCard