import React from 'react'
import './EditionStyle.css'

const Edition = () => {
  return (
    <div>
        <header>
        <h1 style={{color:'white'}} >LOCONADA - BEST OF EDITIONS</h1>
        <p>Découvrir les highlights des événements passées</p>
    </header>

    <div className="containers">
        
        {/* 1ère édition  */}
        <div className="editions">
        <div className='img' >
            <img style={{width:'30%'}} src="/assets/LocoMolo7.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo8.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo9.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo10.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo11.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo12.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo13.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo14.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo4.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo6.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo5.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo1.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo3.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/LocoMolo2.jpg" alt="Loconada"/>
            </div>
            <div className="edition-content">
                <p>Cette édition Loconada s'est déroulée le 29 décembre 2024 au Molo une boite de nuit située à Gammarth. Avec un lineup de folie qui contient des DJs talentueux specialistes en Afrohouse et Afroteck. <br/> 
                LINEUP : <br/> - Malko (Moblack Records) <br/> - Astrid<br/> - Ghassen Azaiez <br/> - Anis Houissa <br/> - Baros <br/> - Zoff </p>
                <video controls>
                    <source src="/assets/Vidéo LocoMolo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        
        
        {/* 2ème édition  */}
        <div className="editions">
        <div className='img' >
            <img style={{width:'30%'}} src="/assets/Affiche Soulwhen.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/1-Soulwhen.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/2-Soulwhen.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/3-Soulwhen.jpg" alt="Loconada"/>
            </div>
            <div className="edition-content">
                <p>Cette édition Loconada s'est déroulée le 29 aout 2024 au Soulwhen Acqua Viva Hotel un rooftop située à Gammarth. Avec un lineup de folie qui contient des DJs talentueux specialistes en Afrohouse et Afroteck. <br/> 
                LINEUP : <br/> - Adwas (Sol selectas - Cosmic Awakenings) <br/> - Al-Dee<br/> - Ghassen Azaiez <br/> - Anis Houissa <br/> - Draoui <br/> - Le Zak <br/> - Saif Touati <br/> - Youssef Naili </p>
                <video controls>
                    <source src="/assets/Soulwhen.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        {/* 3ème édition  */}
        <div className="editions">
        <div className='img' >
            <img style={{width:'30%'}} src="/assets/Affiche Molo.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-1.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-2.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-3.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-4.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-5.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-6.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-7.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/Molo-8.jpg" alt="Loconada"/>
            </div>
            <div className="edition-content">
                <p>Cette édition Loconada s'est déroulée le 09 septembre 2024 au Molo une boite de nuit située à Gammarth. Avec un lineup de folie qui contient des DJs talentueux specialistes en Afrohouse et Afroteck. <br/> 
                LINEUP : <br/> - Annabi <br/> - Izma <br/> - Ghassen Azaiez <br/> - Anis Houissa <br/> - Astrid <br/> - Saif Touati </p>
                <video controls>
                    <source src="/assets/Molo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        {/* 4ème édition  */}
        <div className="editions">
            <div className='img' >
            <img style={{width:'30%'}} src="/assets/Affiche Beatz.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/5.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/9.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/8.jpg" alt="Loconada"/>
            <img style={{width:'30%'}} src="/assets/4.jpg" alt="Loconada"/>
            </div>
            <div className="edition-content">
                <p>Cette édition Loconada s'est déroulée le 29 novembre 2024 au Beatz Club une boite de nuit située à Gammarth. Avec un lineup de folie qui contient des DJs talentueux specialistes en Afrohouse et Afroteck. <br/> 
                LINEUP : <br/> - Daly B2B K-mir <br/> - Faruk Khaledi <br/> - Ghassen Azaiez <br/> - Anis Houissa <br/> - Rain <br/> - Shady B2B Mzid <br/> - Zus </p>
                <video controls>
                    <source src="/assets/Beatz.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Edition