import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import SponsorsPage from './components/SponsorsPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/sponsors" element={<SponsorsPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

