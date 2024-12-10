import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import useFetch from '../hooks/useFetch';

const PokemonDetail = () => {
  const { id } = useParams();
  const { data: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button onClick={() => addFavorite(pokemon)}>Add to Favorites</button>
      <button onClick={() => removeFavorite(pokemon.id)}>Remove from Favorites</button>
    </div>
  );
};

export default PokemonDetail;
