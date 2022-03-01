import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Hero.modul.css"



const Hero = () => {
    const navigate = useNavigate();
    
    return (
        
        <div className='hero'>
        <div className='News'>
            <div >
                <h4 className='news-text'>Новости и Акции</h4>
            </div>
            <div className='news-text-item'>
                <Link onClick={() => navigate("/stock")} sx={{textDecoration:"none", color:"black",borderTop: 1}}>
                <div className='news-text-item-elem'>iPhone 14 Pro сможет снимать видео в формате 8К камерой в 48 мегапикселей.
                </div></Link>

                
                <Link onClick={() => navigate("/stock")} sx={{ textDecoration:"none",color:"black"}} ><div className='news-text-item-elem'>Акция 1+1.
                Купи чехол из серии Casetify и получи защитное стекло в подарок на свой смартфон!</div></Link>

                <Link onClick={() => navigate("/stock")} sx={{ textDecoration:"none",color:"black"}}><div className='news-text-item-elem'>AirPods Pro теперь поставляются в кейсе с поддержкой MagSafe.</div></Link>
                <Link  onClick={() => navigate("/stock")}sx={{ textDecoration:"none",color:"black"}}><div className='news-text-item-elem'>Ожидается, что в линейке Galaxy S22 будет три модели, включая Galaxy S22, S22+ и Galaxy S22 Ultra.</div></Link>
                

                

            </div>
        </div>
        <div className='hero-image'>
            <img className='hero-image-item' src="https://www.liga.net/images/general/2021/09/14/20210914212740-5095.jpg" alt="" />
        </div>
        


        
            
        </div>
        
    );
};

export default Hero;