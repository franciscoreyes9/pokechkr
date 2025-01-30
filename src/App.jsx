import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PokedexGrid from "./components/pokedex/PokedexGrid";
import Auth from "./pages/Auth";
import TeamBuilder from "./pages/TeamBuilder";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokedexGrid />} />
                <Route path="/pokedex" element={<PokedexGrid />} />
                <Route path="/auth" element={<Auth />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/teambuilder" element={<TeamBuilder />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;