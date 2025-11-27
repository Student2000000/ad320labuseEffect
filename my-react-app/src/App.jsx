import { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon';
import './App.css'


function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const LIMIT = 20;  

  useEffect(() => {
    getPokes();
  }, [offset]);

  const getPokes = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
    let data = await res.json();

    //console.log(page);
    console.log(data.results);
    setCurrentPokemon(data.results);
  };

  const onClickNext = () => {
      setOffset((prev) => LIMIT + prev);
  };


  const onClickBack = () => {
    /*
    console.log(page); 
    if (page[0] <= 0) {
      setPage([30, 35]);
    } else {
      console.log(page); 
      setPage((prev) => [prev[0] - 5, prev[1] - 5]);
    }
      */
  };

  console.log(currentPokemon);

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
