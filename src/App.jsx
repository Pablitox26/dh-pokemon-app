import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta Home */}
          <Route path="/pokemons" element={<PokemonList />} /> {/* Lista de Pokemons */}
          <Route path="/pokemon/:id" element={<PokemonDetail />} /> {/* Detalle de un Pokemon */}
          <Route path="/favorites" element={<Favorites />} /> {/* Nueva ruta */}
          <Route path="/contact" element={<Contact />} /> {/* Página de contacto */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
