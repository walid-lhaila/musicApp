import React from "react";
import AllMusic from "./components/Music/AllMusic";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import MusicDetail from './components/music/MusicDetail';
function App() {
  return (
    <div className="App">
        <div className="flex justify-start w-[80%] mx-auto py-4">
            <h1 className="text-black font-bold font-serif text-4xl">MUSIC</h1>
        </div>

        <Routes>
            <Route path="/AllMusic" element={<AllMusic/>}/>
            <Route path="/MusicDetail" element={<MusicDetail/>}/>
        </Routes>

    </div>
  );
}

export default App;
