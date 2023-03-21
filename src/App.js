import React from 'react';
import { Link, Route } from 'wouter';
import { Gif } from './components/Gifs';
import './App.css';

function App() {

  return (
    <main className="App">
      <section>
        <h2>APP</h2>
        <Link to="/gif/goku">goku</Link>
        <Link to="/gif/mexico">mexico</Link>
        <Route 
          component={Gif}
          path="/gif/:keyword"    // Lo hacemos dinámico -> genera una props { params }
        />
      </section>
    </main>
  );
}

export default App;
