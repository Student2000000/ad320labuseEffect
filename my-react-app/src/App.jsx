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

    console.log(data.results);
    setCurrentPokemon(data.results);
  };

  const onClickNext = () => {
      setOffset((prev) => LIMIT + prev);
  };


  const onClickBack = () => {
    if (offset <= 0) {
      setOffset(0);
    } else {
      setOffset(offset - LIMIT);
    }
      //setOffset((prev) => Math.max(prev - LIMIT, 0));
  };

  console.log(currentPokemon);

  return (
    <div className='App'>
      <h1> Pokemons! </h1>
      <div className="main-container ">
        <div>
          <Pokemon currentPokemon={currentPokemon} />
          <button onClick={onClickBack} disabled={offset === 0}> Back </button>
          <button onClick={onClickNext}> Next </button>
        </div>
      </div>
    </div>
  );
};

export default App;
