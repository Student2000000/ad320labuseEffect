const PokemonDetail = ({pokes}) => {
    return (
        <div className="card-detail">
            <h2>{pokes.name}</h2>

            <img 
                src={pokes.sprites.front_default}
                width={120}
            />

            <p>Height: {pokes.height}</p>
            <p>Weight: {pokes.weight}</p>
        
            <p>Types: </p>
            <ul>
                {pokes.types.map((t) => (
                    <li key={t.type.name}>{t.type.name}</li>
                ))}
            </ul>

        </div>
        
    );
};

export default PokemonDetail;