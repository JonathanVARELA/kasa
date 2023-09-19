import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Page404 from './pages/page404';
import About from './pages/about';
import FicheLogement from './pages/detailsLogements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/about" element={<About />} />
        <Route path="/detailsLogements/:id" element={<FicheLogement />} />
      </Routes>
    </Router>
  )
}

export default App;