import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/navbar/Navbar";
import AddVideo from "./pages/AddVideo";
import EditVideo from "./pages/EditVideo";
import Home from "./pages/Home";
import Video from "./pages/Video";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
