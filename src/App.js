import React from 'react';
import { Route } from 'wouter';
import { Gif } from './components/Gifs';
import { Home } from './page/Home';
import { PopularGif } from './components/PopularGif'
import './App.css';

function App() {

  return (
    <main className="App">
        <Route 
          component={Home}
          path="https://marcogeofis.github.io/react-gif-app/" 
        />
        <Route 
          component={Gif}
          path="https://marcogeofis.github.io/react-gif-app/gif/:keyword"    // Lo hacemos dinámico -> genera una props { params }
        />
        <Route 
          component={PopularGif}
          path="https://marcogeofis.github.io/react-gif-app/popular-gif/:keyword"    // Lo hacemos dinámico -> genera una props { params }
        />
    </main>
  );
}

export default App;
