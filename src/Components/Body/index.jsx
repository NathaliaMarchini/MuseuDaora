import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

export function Body() {
    const [infoBanner, setInfoBanner] = useState([]);

    useEffect(() => {
        // Requisição para o endpoint do banner
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setInfoBanner(data))
            .catch((error) => console.error('Erro ao carregar o banner:', error));
    }, []);

    return (
        <section>
            <div className="Centro">
                <div className="word">
                    <p className="Sign">Sing Up</p>
                </div>

                <div className="secaoT">
                    <div className="titulo">
                        <h1>Museum Of Paleontology</h1>
                    </div>
                </div>

                <section className="Paty2">
                    <div className="Roi1">
                       <section className="row">
                       <h1>Imagem fóssil</h1>
                       </section>
                    </div>
                    <div className="Roi2">
                       <section className="row2">
                            <p>texto</p>
                       </section>
                    </div>
                </section>

                
                <section className="Paty3">
                    <div className="foot1">
                        <div className="pe"></div>
                        <div className="meio"></div>
                        <div className="pe2"></div>
                    </div>
                    <div className="foot2">
                        <div className="pe3"></div>
                        <div className="meio2"></div>
                        <div className="pe4"></div>
                    </div>
                </section>
                <div className="fim">
                    <div className="divBotao">
                        <div className="photo"></div>
                    </div>
                </div>


            </div>

        </section>
    );
}
