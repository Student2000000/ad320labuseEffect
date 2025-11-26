import { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon';
import './App.css'


function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [page, setPage] = useState([0, 5]);

  useEffect(() => {
    getPokes();
  }, [page]);

  const getPokes = async () => {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    let data = await res.json();
    setCurrentPokemon(data.results);
  };

  const onClickNext = () => {
    if (page[1] < 20) {
      setPage((prev) => [prev[0] + 5, prev[1] + 5]);
    } else {
      setPage( [0, 5]);
    }
  };

  const onClickBack = () => {
    console.log(page); 
    if (page[0] <= 0) {
      setPage([20, 25]);
    } else {
      console.log(page); 
      setPage((prev) => [prev[0] - 5, prev[1] - 5]);
    }
  };

  return (
    <div className='App'>
      <h1> Pokemons! </h1>
      <div className="main-container ">
        <div>
          <Pokemon currentPokemon={currentPokemon} />
          <button onClick={onClickBack}>Back!</button>
          <button onClick={onClickNext}>Next Page!</button>
        </div>
      </div>
    </div>
  );
};

export default App;
