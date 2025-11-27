import { useState } from "react";
import PokemonDetail from "./PokemonDetail";

const Pokemon = ({ currentPokemon }) => {
    const [selectedPoke, setSelectecPoke] = useState();

    const fetchPokeByName = async (name) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            
            if (!response.ok) {
                throw new Error("Poke lost!"); 
            }
            
            const data = await response.json();
            setSelectecPoke(data);
        } catch (error) {
            console.error("Error fetching Poke :( :", error);
        }
    };

    return (
        <div className="cards">
            {currentPokemon.map((c, index) => (
                <div
                    key = {index}
                    className="card"
                    onClick={() => fetchPokeByName(c.name)} >
                    {c.name}
                </div>
            ))}
            {selectedPoke && <PokemonDetail pokes={selectedPoke} />}
        </div>
    );
};

export default Pokemon;