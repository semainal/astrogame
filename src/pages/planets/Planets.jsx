import React from 'react'
import "./planets.css"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import venus from "../../img/venus.png"
import merkur from "../../img/merkur.png"
import mars from "../../img/mars.png"
import jupiter from "../../img/jupiter.png"
import saturn from "../../img/saturn.png"
import uranus from "../../img/uranus.png"
import neptun from "../../img/neptun.png"
import pluto from "../../img/pluto.png"



export default function Planets() {
  return (
    <>
     <div className='planetsTitle'>GEZEGENLER</div>
     <div className='planets'>
      
   

         <div className='planetContent'>

        <div className='kolom'>
          <div className='top'>
            <img src={sun} alt="" className='planetImg' />
          </div>
          <div className='center'>
            GÜNEŞ
          </div>
          <div className='bottom'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit, nulla culpa molestiae quis excepturi aperiam rerum rem eius expedita distinctio officia, tempora, amet doloremque alias eaque deleniti!</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={moon} alt="" className='planetImg' />
        </div>
        <div className='center'>
         AY
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit, nulla culpa molestiae quis excepturi aperiam rerum rem eius expedita distinctio officia, tempora, amet doloremque alias eaque deleniti!</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={merkur} alt="" className='planetImg' />
        </div>
        <div className='center'>
        MERKÜR
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit, nulla culpa molestiae quis excepturi aperiam rerum rem eius expedita distinctio officia, tempora, amet doloremque alias eaque deleniti!</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={venus} alt="" className='planetImg' />
        </div>
        <div className='center'>
        VENÜS
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit, nulla culpa molestiae quis excepturi aperiam rerum rem eius expedita distinctio officia, tempora, amet doloremque alias eaque deleniti!</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={mars} alt="" className='planetImg' />
        </div>
        <div className='center'>
        MARS
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit, nulla culpa molestiae quis excepturi aperiam rerum rem eius expedita distinctio officia, tempora, amet doloremque alias eaque deleniti!</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={jupiter} alt="" className='planetImg' />
        </div>
        <div className='center'>
        JÜPİTER
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima omnis quisquam beatae a fuga exercitationem quo ad eveniet iure?</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={saturn} alt="" className='planetImg' />
        </div>
        <div className='center'>
        SATÜRN
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae eaque voluptatem cumque voluptatibus dolorem, magnam quasi natus rem quisquam!</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={uranus} alt="" className='planetImg' />
        </div>
        <div className='center'>
        URANÜS
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti, impedit laboriosam eligendi libero fuga maxime magnam ex iste sapiente.</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={neptun} alt="" className='planetImg' />
        </div>
        <div className='center'>
        NEPTÜN
        </div>
          <div className='bottom'>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat magnam deserunt porro saepe ut repellat non rerum, aliquam nisi quod!</p>
          </div>
        </div>
        <div className='kolom'>
        <div className='top'>
        <img src={pluto} alt="" className='planetImg' />
        </div>
        <div className='center'>
        PLÜTON
        </div>
          <div className='bottom'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugit, nulla culpa molestiae quis excepturi aperiam rerum rem eius expedita distinctio officia, tempora, amet doloremque alias eaque deleniti!</p>
          </div>
        </div>

      </div>
    </div>
    </>

  )
}
