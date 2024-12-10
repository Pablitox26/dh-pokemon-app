import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const PokemonList = () => {
  const { data, loading } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=20');

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {data.results.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
