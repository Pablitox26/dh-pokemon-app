import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import useFetch from '../hooks/useFetch';

const PokemonDetail = () => {
  const { id } = useParams();
  const { data: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  if (loading) return <p>Loading...</p>;

  const isFavorite = favorites.some((fav) => fav.id === pokemon.id);

  return (
    <div className="container">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {isFavorite ? (
        <button onClick={() => removeFavorite(pokemon.id)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addFavorite(pokemon)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default PokemonDetail;
