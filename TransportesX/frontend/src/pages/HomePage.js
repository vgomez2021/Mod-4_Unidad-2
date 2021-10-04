import React from "react";
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis placeat modi facere unde aspernatur eius rem ea fuga? Cumque repellat accusamus illum odio deserunt ad molestias fugit amet doloribus voluptate.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis placeat modi facere unde aspernatur eius rem ea fuga? Cumque repellat accusamus illum odio deserunt ad molestias fugit amet doloribus voluptate.</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Perez</span>
                        <br></br>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default HomePage;