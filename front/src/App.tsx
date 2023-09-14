import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/Example';
import Pokedex from './components/Pokedex';
import MainPage from './components/MainPage';
import Button from './components/Button'
import { blue } from '@mui/material/colors';

function App() {
  return (
    <div className="App">
      <MainPage></MainPage>
    </div>
  );
}

export default App;