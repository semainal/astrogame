import React from 'react'
import { Link } from 'react-router-dom';
import  "./home.css"




export default function Home() {

 

  
  return (
    <>
    <div className="home">
      <h1 className='welcome'>Astro Life'a Hoşgeldiniz..</h1>
    <button className='homeButton'>
    <Link className='link' to="/planets">Gezegenler</Link>
    </button>

    <button className='homeButton'>
    <Link className='link' to="/signs">Burçlar</Link>
    </button>

    <button className='homeButton'>
    <Link className='link' to="/houses">Evler</Link>
    </button>

    <button className='homeButton'>
    <Link className='link' to="/elements">Elementler & Nitelikler</Link>
    </button>

    <button className='homeButton'>
    <Link className='link' to="/exam">Quiz</Link>
    </button>
      
 
    
    </div>
    </>
  );
  

 
}
