
import './App.css';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import Home from './Pages/Home';
import PokemonDetail from './Pages/PokemonDetail';
import Pokemons from './Pages/Pokemons'

function App() {
  return (
    <Wrapper>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pokemonDetail' element={<PokemonDetail/>} />
      <Route path='/pokemons' element={<Pokemons/>} />
    </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`