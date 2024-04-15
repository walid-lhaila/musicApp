import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import MusicDetail from './components/music/MusicDetail';
function App() {
  return (
    <Routes>
      <Route path="/MusicDetail" element={<MusicDetail/>}/>
    </Routes>
  );
}

export default App;
