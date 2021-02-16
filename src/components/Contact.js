import React from 'react';
import yo from '../yo.jpg';
import './Page.css'

const Contact = () => {
    return (
       <div className="center">
         <h3 style={{ textAlign:'center' }}>Mi contacto e información.</h3>
         <img src={yo} alt="yo" className="foto"/>
         <div className="cuadro">
            <p>Nombre: Jesús Alberto Hoyos Félix.</p>
            <p>Ocupación: Estudiante de Ing. Producción Multimedia en Universidad Las Salle Noroeste y desarrollador en backend en Media Area Solutions.</p>
            <p>Correo: jesalbertohyfx@hotmail.com</p>
            <p>Número: 6421122188</p>
         </div>
       </div>
    );
}
 
export default Contact;