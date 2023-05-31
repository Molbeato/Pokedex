import { useState } from "react"
import { usePagination } from "../../../../hooks/usePagination"
import PagesComponent from "../PagesComponent/PagesComponent";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Link } from "react-router-dom"; 

import "./PokemonList.css"

export const PokemonList = ({pokemons}) => {
    const [pokemonsPerPage, setPokemonsPerPage] = useState(15);
    const [currentPage, totalPages, pokemonsSlice, changePageTo] = usePagination(pokemons, pokemonsPerPage)

  return (
    <section>
        <PagesComponent 
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onPreviousPage={() => changePageTo(currentPage - 1)}/>
        
        <ul className="pokemons-card_container">
            {pokemonsSlice.map((pokemon) => (
              <li className="pokemons-cards" key={pokemon.url}>
                <Link style={{color: 'unset', textDecoration: "unset",}}  to={`/pokedex/${pokemon.url.split("/").at(-2)}`}>
                <PokemonCard pokemonId={pokemon.url.split("/").at(-2)}/>
                </Link>
              </li>
            ))}
        </ul>

<PagesComponent 
        totalPages={totalPages}
        onChangePage={changePageTo}
        onNextPage={() => changePageTo(currentPage + 1)}
        onPreviousPage={() => changePageTo(currentPage - 1)}/>
    </section>

    
  )
}

export default PokemonList