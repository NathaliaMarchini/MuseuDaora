import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./Components/Body";
import { Conteudo } from "./Page/conteudo/dino";
import { Home } from "./Page/Home";
import { CadConteudo } from "./Page/CadConteudo";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dino" element={<Conteudo />} />
                <Route path="/cadastro" element={<CadConteudo />} />
            </Routes>
            <Body />
        </BrowserRouter>
    );
}

export default App;
