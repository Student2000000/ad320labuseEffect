import { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon';
import './App.css'


function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);

  useEffect(() => {
    getPokes();
  }, []);

  const getPokes = async () => {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    let data = await res.json();
    setCurrentPokemon(data.results);
  };

  return (
    <div className='App'>
      <h1> Pokemons! </h1>
      <div className="main-container ">
        <div>
          <Pokemon currentPokemon={currentPokemon} />
        </div>
      </div>
    </div>
  );
};

export default App;
