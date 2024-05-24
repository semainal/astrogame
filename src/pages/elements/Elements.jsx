import React, { useState } from "react";
import "./elements.css";

function Elements() {
    const fire = require("../../img/fire.gif");
    const air = require("../../img/air.gif");
    const earth = require("../../img/earth.gif");
    const water = require("../../img/water.gif");
    const oncu = require("../../img/oncu.gif");
    const sabit = require("../../img/sabit.gif");
    const degisken = require("../../img/degisken.gif");
    const planets = require("../../img/planets.gif");

    const signs = { fire, air, earth, water, oncu, sabit, degisken };

    const [selected, setSelected] = useState(null);
    const [showCenterGif, setShowCenterGif] = useState(true);

    const handleButtonClick = (sign) => {
        setSelected(sign);
        setShowCenterGif(false);  // Hide the central GIF when any button is clicked
    };

    return (
        <>
            <div className="elementsTitle">Elementler & Nitelikler</div>
            <div className="elements">
                <div className="osdButtons">
                    <button className="oncuButton" onClick={() => handleButtonClick(signs.oncu)}>ÖNCÜ</button>
                    <button className="sabitButton" onClick={() => handleButtonClick(signs.sabit)}>SABİT</button>
                    <button className="degiskenButton" onClick={() => handleButtonClick(signs.degisken)}>DEĞİŞKEN</button>
                </div>

                {showCenterGif && <img src={planets} alt="" className="elementsCenterImg" />}
                
                <div className="buttons">
                    <button className="fireButton" onClick={() => handleButtonClick(signs.fire)}>ATEŞ</button>
                    <button className="airButton" onClick={() => handleButtonClick(signs.air)}>HAVA</button>
                    <button className="earthButton" onClick={() => handleButtonClick(signs.earth)}>TOPRAK</button>
                    <button className="waterButton" onClick={() => handleButtonClick(signs.water)}>SU</button>
                </div>

                {selected && <img src={selected} alt="" className="elementsImg" />}
            </div>
        </>
    );
}

export default Elements;
