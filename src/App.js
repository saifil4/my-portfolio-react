import Home from './pages/Home';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes, useLocation } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
