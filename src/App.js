import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
