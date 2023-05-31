import { useParams } from "react-router-dom"
import { getPokemonById } from "../../services/getPokemonById";
import { useEffect, useState } from "react";

import "./PokemonDetails.css"

const PokemonDetails = () => {

  const [pokemon, setPokemon] = useState('')

    const {pokemonId} = useParams();

    useEffect(() => {
      const loadPokemon = async () => {
        const pokemonData = await getPokemonById(pokemonId);
        setPokemon(pokemonData);
      };
  
      loadPokemon();
    }, [])

  return (


    <article className="pokemon-details_container" >
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
      <>
      
      <div className="pokemon-details_img">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>

      <p className="pokemon-detail_id">#{pokemonId}</p>
      <hr />

        <h2 className="pokemon-detail_name">{pokemon.name}</h2>
        <hr />
        
      <section className="pokemon-abilities_container">
    
          {pokemon.abilities.map((ability) => (
            <p className="pokemon-abilities" key={ability} >{ability}</p>
          ))}

      </section>

        <section className="pokemon-moves_container">

         <ul className="">
          {pokemon.moves.map((move) => (
            <li key={move} className="pokemon-moves" >{move}</li>
          ))}
          </ul>
        </section>
        </>
        )}
    </article>

  )
}

export default PokemonDetails