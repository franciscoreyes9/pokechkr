import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokedexGrid from "./components/pokedex/PokedexGrid";
import Auth from "./pages/Auth";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokedexGrid />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Router>
    );
}

export default App;