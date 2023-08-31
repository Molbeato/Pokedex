import "./Pokedex.css"

import { useContext } from "react"
import { UserNameContext } from "../../context/UserNameContext"
import { PokemonList } from "../../components/common/pokedex/PokemonList/PokemonList"
import { useLoaderData } from "react-router-dom";
import FilterForm from "../../components/common/pokedex/FilterForm/FilterForm";

const Pokedex = () => {
    const { pokemons, pokemonName, pokemonTypeId }= useLoaderData();
    const { userName }= useContext(UserNameContext);

  return (
    <section className="main-content">
        <p className="pokedex-message">
            Welcome 
            <span className="pokedex-user"> {userName}! </span>
        </p>

        <FilterForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/>

        {!pokemons.length ? (
        <p>No pokemons available</p> 
        ) : (
            <PokemonList pokemons={pokemons}/>
        )}

    
    </section>
    
  )
}

export default Pokedex