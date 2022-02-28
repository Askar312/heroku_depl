import { Link } from '@mui/material';
import React from 'react';
import "./Hero.modul.css"



const Hero = () => {
    
    return (
        
        <div className='hero'>
        <div className='News'>
            <div>
                <h4 className='news-text'>Новости и Акции</h4>
            </div>
            <div className='news-text-item'>
                <Link sx={{color:"black",borderTop: 1}}>
                <div className='news-text-item-elem'>Новая Модель Айфон выйдет на этой неделе
                </div></Link>

                
                <Link sx={{color:"black"}} ><div className='news-text-item-elem'>Оформи заказ на более 500 сом и получи бесплатную доставкую</div></Link>

                <Link sx={{color:"black"}}><div className='news-text-item-elem'>Новая Модель Айфон выйдет на этой неделе</div></Link>
                <Link sx={{color:"black"}}><div className='news-text-item-elem'>Новая Модель Айфон выйдет на этой неделе</div></Link>
                <Link sx={{color:"black"}}><div className='news-text-item-elem'>Новая Модель Айфон выйдет на этой неделе</div></Link>
                <Link sx={{color:"black"}}><div className='news-text-item-elem'>Новая Модель Айфон выйдет на этой неделе</div></Link>

                

            </div>
        </div>
        <div className='hero-image'>
            <img className='hero-image-item' src="https://www.apple.com/ru/iphone/home/images/meta/iphone__btp62hy2cbea_og.png" alt="" />
        </div>
        


        
            
        </div>
        
    );
};

export default Hero;