import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Renomeei para BrowserRouter e importei Routes
import './App.css';
/* import { Body } from './Components/Body';*/
import { Home } from './Page/Home';
import { Conteudo } from './Page/conteudo/dino';
import { CadConteudo } from './Page/CadConteudo';

function App() {
  return (
    <Router> {/* Coloque suas rotas dentro do Router */}
      <Routes> {/* Use Routes para envolver suas rotas */}
        <Route path="/" element={<Home />} /> {/* Defina suas rotas */}
        <Route path="/dino" element={<Conteudo />} />
        <Route path="/cadastro" element={<CadConteudo />} />
      </Routes>
    </Router>
  );
}

export default App;
