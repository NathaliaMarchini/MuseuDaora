import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Renomeei para BrowserRouter e importei Routes
import './App.css';
import { Body } from './Components/Body';
import { Conteudo } from './Page/conteudo/dino';
import { Home } from './Page/Home';

function App() {
  return (
    <Router> {/* Coloque suas rotas dentro do Router */}
      <Routes> {/* Use Routes para envolver suas rotas */}
        <Route path="/" element={<Home />} /> {/* Defina suas rotas */}
        <Route path="/conteudo" element={<Conteudo />} />
      </Routes>
    </Router>
  );
}

export default App;
