import React from 'react'
import "./signs.css"
import koc1 from "../../img/koc1.png"
import boga1 from "../../img/boga1.png"
import ikizler1 from "../../img/ikizler1.png"
import yengec1 from "../../img/yengec1.png"
import aslan1 from "../../img/aslan1.png"
import basak1 from "../../img/basak1.png"
import terazi1 from "../../img/terazi1.png"
import akrep1 from "../../img/akrep1.png"
import yay1 from "../../img/yay1.png"
import oglak1 from "../../img/oglak1.png"
import kova1 from "../../img/kova1.png"
import balik1 from "../../img/balik1.png"


export default function Signs() {
    return (
      <>
       <div className='signsTitle'>BURÇLAR</div>
       <div className='signs'>

       <div className='signsContent'>
       <div className="circle">
       <div className="box1 box">
        <div className="top">
      <img src={oglak1} alt="" className='signsImg'/>
        </div>
        <div className="center">OĞLAK</div>
        <div className="bottom"></div>
       </div>
        <div className="box2 box"> 
        <div className="top">
            <img src={kova1} alt="" className='signsImg'/>
        </div>
        <div className="center">KOVA</div>
        <div className="bottom"></div>
        </div>
        <div className="box3 box">
        <div className="top">
            <img src={yay1} alt="" className='signsImg'/>
        </div>
        <div className="center">YAY</div>
        <div className="bottom"></div>
        </div>
        <div className="box4 box">
        <div className="top">
            <img src={balik1} alt="" className='signsImg'/>
        </div>
        <div className="center">BALIK</div>
        <div className="bottom"></div>
        </div>
        <div className="box5 box">
        <div className="top">
            <img src={akrep1} alt="" className='signsImg'/>
        </div>
        <div className="center">AKREP</div>
        <div className="bottom"></div>
        </div>

        <div className="box6 box">
        <div className="top">
        <img src={koc1} alt="" className='signsImg' />
        </div>
        <div className="center">KOÇ</div>
        <div className="bottom"></div>
        </div>

       
        <div className="box7 box">
        <div className="top">
        <img src={terazi1} alt="" className='signsImg' />
        </div>
        <div className="center">TERAZİ</div>
        <div className="bottom"></div>
        </div>

        <div className="box8 box">
        <div className="top">
            <img src={boga1} alt="" className='signsImg'/>
        </div>
        <div className="center">BOĞA</div>
        <div className="bottom"></div>
        </div>
       <div className="box9 box">
       <div className="top">
        <img src={basak1} alt="" className='signsImg'/>
       </div>
       <div className="center">BAŞAK</div>
        <div className="bottom"></div>
       </div>
        <div className="box10 box">
        <div className="top">
            <img src={ikizler1} alt="" className='signsImg'/>
        </div>
        <div className="center">İKİZLER</div>
        <div className="bottom"></div>
        </div>
        <div className="box11 box">
        <div className="top">
            <img src={aslan1} alt=""className='signsImg' />
        </div>
        <div className="center">ASLAN</div>
        <div className="bottom"></div>
        </div>
        <div className="box12 box">
        <div className="top">
            <img src={yengec1} alt="" className='signsImg'/>
        </div>
        <div className="center">YENGEÇ</div>
        <div className="bottom"></div></div> 
       </div>

    
        
       

</div>



       
    </div>






        
     
  
 </>
  
    )
  }
