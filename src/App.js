import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import Navigation from "./components/Navigation";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";



function App() {
  return (
    <div style={{ backgroundColor: 'black', }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
