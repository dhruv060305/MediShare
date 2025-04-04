import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componets/Nav';
import Hero from './componets/Hero';
import About from './componets/About';
import Center from './componets/Center';
import Donations from './componets/Donations';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}

        <Route path="/donation-center" element={<Center />} />

        <Route path="/donations" element={<Donations />} />

      </Routes>
    </Router>
  );
}

export default App;
