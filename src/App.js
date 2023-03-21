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
          path="/" 
        />
        <Route 
          component={Gif}
          path="/gif/:keyword"    // Lo hacemos dinámico -> genera una props { params }
        />
        <Route 
          component={PopularGif}
          path="/popular-gif/:keyword"    // Lo hacemos dinámico -> genera una props { params }
        />
    </main>
  );
}

export default App;
