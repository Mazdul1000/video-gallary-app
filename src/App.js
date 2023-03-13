import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:videoId" element={<Video />} />
            </Routes>
        </div>
    );
}

export default App;
