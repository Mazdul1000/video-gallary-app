import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
import AddVideo from "./pages/AddVideo";
import EditVideo from "./pages/EditVideo";
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos/:videoId" element={<Video />} />
                <Route path="/video/add" element={<AddVideo />} />
                <Route path="/video/edit/:videoId" element={<EditVideo />} />
            </Routes>
        </div>
    );
}

export default App;
