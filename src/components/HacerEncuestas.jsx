import React from 'react';
import '../App.css';

function HacerEncuestas({ Encuesta }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {Encuesta.map(encuesta => (
                    <li key={encuesta.id} className= "titulo">
                        <p>{encuesta.pregunta}</p>
                        <ul className="opciones">
                            {encuesta.opciones.map(opcion => (
                                <li key={opcion}>{opcion}</li>
                            ))}
                        </ul>
                    </li>
                ))}             
            </ul>
        </div>
    );
}
export default HacerEncuestas;