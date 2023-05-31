import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexloader } from "./loaders/pokedexloader";
import PokemonDetails from "../pages/PokemonDetails/PokemonDetails";

// ":" la hace dinamica

export const router= createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/pokedex",
        element: (
            <ProtectedRoute>
                <Layout/>
            </ProtectedRoute>
        ),
        children:[
            {
                path: "",
                element: <Pokedex/>,
                loader: pokedexloader,

            },
            {
                path: ":pokemonId",
                element: <PokemonDetails/>
            }
        ]
    }
]);
