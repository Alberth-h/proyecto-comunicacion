import React from 'react';
import IA1 from '../IA1.jpg';
import IA2 from '../IA2.png';
import AR from '../AR.png';
import Imp1 from '../Imp1.png';
import Imp2 from '../Imp2.png';
import R1 from '../R1.jpg';
import Game_1 from '../Game_1.png';
import Game_2 from '../Game_2.jpeg';
import './Page.css'

const Work = () => {
    return (
       <div className="center">
          <h2>¿Qué hago?</h2>
          <br/>
          <h5>Experiencia con inteligencia artificial (Machine Learning).</h5>
          <p>Detección en fallos de torres eléctricas y reconocimiento de objetos.</p>
          <img src={IA2} alt="IA2" style={{ width:'200px' }}/>
          <img src={IA1} alt="IA1" style={{ width:'200px' }}/>
          <br/>
          <br/>
          <h5>Experiencia con realidad aumentada.</h5>
          <p>Proyecto de aplicación de móvil de hackathon de Space Apps en donde se muestran planetas en realidad aumentada.</p>
          <img src={AR} alt="AR" style={{ width:'250px' }}/>
          <br/>
          <br/>
          <h5>Desarrollo de implementaciones funcionales.</h5>
          <p>Geolocalización de imágenes a través de metadatos y simulación de movimiento parabólico.</p>
          <img src={Imp1} alt="Imp1" style={{ width:'250px' }}/>
          <img src={Imp2} alt="Imp2" style={{ width:'200px' }}/>
          <br/>
          <br/>
          <h5>Renders.</h5>
          <p>Render de un auto de F1 para la escudería de Kaavara.</p>
          <img src={R1} alt="R1" style={{ width:'400px' }}/>
          <br/>
          <br/>
          <h5>Desarrollo de videojuegos.</h5>
          <p>Videojuegos en donde he colaborado para su desarrollo.</p>
          <img src={Game_1} alt="Game_1" style={{ width:'200px' }}/>
          <img src={Game_2} alt="Game_2" style={{ width:'220px' }}/>
          <br/>
          <br/>
       </div>
    );
}
 
export default Work;