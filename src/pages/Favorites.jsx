import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1>My Favorite Pokémon</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Go add some Pokémon!</p>
      ) : (
        <ul>
          {favorites.map((pokemon) => (
            <li key={pokemon.id}>
              <div className="card">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
                <button onClick={() => removeFavorite(pokemon.id)}>Remove from Favorites</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
