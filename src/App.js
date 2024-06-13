import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Probuctpage from "./components/Probuctpage";
import ServicePage from "./components/ServicePage";
import Blogpage from "./components/Blogpage";

function App() {
  return (
    <div className="bg-[#ECECEC]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/productpage" element={<Probuctpage/>} />
        <Route path="/servicePage" element={<ServicePage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
