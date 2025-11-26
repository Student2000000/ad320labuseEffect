import { useState } from "react";
import PokemonDetail from "./PokemonDetail";

const Pokemon = ({ currentPokemon }) => {
    const [selectedPoke, setSelectecPoke] = useState();

    const fetchPokeByID = async (id) => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/${id}');
            const data = await response.json();
            setSelectecPoke(data);
            if (!response.ok) {
                throw new Error("Poke lost!"); 
            }
        } catch (error) {
            console.error("Error fetching Poke :( :", error);
        }
    };

    return (
        <div className="Pokemon">
            {currentPokemon.map((c, index) => (
                <div
                    key = {index}
                    className = "pokemon"
                    onClick={() => fetchPokeByID(c.id)} >
                    {c.name}
                </div>
            ))}
            {selectedPoke && <PokemonDetail pokes={selectedPoke} />}
        </div>
    );
};

export default Pokemon;