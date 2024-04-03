import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./Components/Body";
import { Conteudo } from "./Page/conteudo/dino";
import { Home } from "./Page/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/conteudo" element={<Conteudo />} />
            </Routes>
            <Body />
        </BrowserRouter>
    );
}

export default App;
