import React, { useState} from "react";
import "./elements.css";




function Elements() {
    const fire = require("../../img/fire.gif")
    const air = require("../../img/air.gif")
    const earth = require("../../img/earth.gif")
    const water = require("../../img/water.gif")
    const oncu = require("../../img/oncu.gif")
    const sabit = require("../../img/sabit.gif")
    const degisken = require("../../img/degisken.gif")
    const planets = require("../../img/planets.gif")
   


    const signs = {fire,air,earth, water, oncu, sabit, degisken}

    const [selected, setSelected] = useState(signs)
    




  return (
    <>
    <div className="elementsTitle">Elementler & Nitelikler</div>
    <div className="elements">
        <div className="osdButtons">
        <button className="oncuButton" onClick={()=> setSelected(signs.oncu)}>ÖNCÜ</button>
    <button className="sabitButton" onClick={()=> setSelected(signs.sabit)}>SABİT</button>
    <button className="degiskenButton" onClick={()=> setSelected(signs.degisken)}>DEĞİŞKEN</button>
        </div>

        <img src={planets} alt="" className="elementsCenterImg" />
   
        <div className="buttons">
        <button className="fireButton"  onClick={()=> setSelected(signs.fire)}>ATEŞ</button>
    <button className="airButton" onClick={()=> setSelected(signs.air)}>HAVA</button>
    <button className="earthButton" onClick={()=> setSelected(signs.earth)}>TOPRAK</button>
    <button className="waterButton" onClick={()=> setSelected(signs.water)}>SU</button>
        </div>
       
   
    <img src={selected} alt="" className="elementsImg" />

    

    </div>
    </>
  );
}

export default Elements;