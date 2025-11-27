const PokemonDetail = ({pokes}) => {
    return (
        <div className="poke-detail">
            <h2>{pokes.name}</h2>
            <h2>{pokes.height}</h2>
        
        </div>
    );
};

export default PokemonDetail;