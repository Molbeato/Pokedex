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
        <h2  className="pokemon-card_tittle" >{pokemon.name}
        </h2>

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
                <span style={{width: stat.value + 100}} className={`pokemon-card__stat ${pokemon.types[0]}`}>{stat.name.toUpperCase()}</span>
                <span className="pokemon-card__stat-value">{stat.value}</span>
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