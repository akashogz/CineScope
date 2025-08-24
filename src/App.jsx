import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Footer from "./components/Footer.jsx";
import Details from "./components/Details.jsx";
import Movies from "./components/Movies.jsx";
import Search from "./components/Search.jsx";
import Shows from "./components/Shows.jsx"
import TVdetails from "./components/TVdetails.jsx";
import About from "./components/About.jsx";
import Overlay from "./components/Overlay.jsx";

function App() {
  const [searchFor, setSearchFor] = useState('');

  function handleSearch() {
    const value = document.getElementById('search').value;
    setSearchFor(value);
    console.log(value);
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="">
          <Routes>
            <Route path="/" element={<Landing handleSearch={handleSearch} searchFor={searchFor} setSearchFor={setSearchFor}/>} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/movie/:id" element={<Details />} />
            <Route path="/tv/:id" element={<TVdetails />} />
            <Route path="/search" element={<Search searchFor={searchFor} />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Overlay/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}


export default App;
