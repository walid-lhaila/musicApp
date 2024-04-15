import React from "react";
import {Routes, Link, Route} from "react-router-dom";
import AllMusic from "./components/Music/AllMusic";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="flex justify-start w-[80%] mx-auto py-4">
            <h1 className="text-black font-bold font-serif text-4xl">MUSIC</h1>
        </div>

        <Routes>
            <Route path="/AllMusic" element={<AllMusic/>}/>
        </Routes>
    </div>
  );
}

export default App;
