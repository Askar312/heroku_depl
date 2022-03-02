import React from "react";
import style from "../Footer/Footer.module.css"
import logo from "../../assetcs/images/navbar/logo.svg"

const Footer = () => {
  return (
  <div className={style.footerContainer}>
    <div className={style.contentItem}>
      <img className={style.contentItemImg} src={logo} alt="logo" />
    </div>
    <div className={style.footerContentItem}>
      <ul>
        <li>Главная</li>
        <li>О магазине</li>
        <li>Кредит</li>
        <li>Гарантия</li>
        <li>Доставка</li>
        <li>Акции</li>
      </ul>
      <ul>
        <li>Контакты</li>
        <li>0501090349</li>
        <li>Instagram</li>
        <li>WhatsApp</li>


      </ul>
      <ul>
        <li>Контакты</li>
        <li>0501090349</li>
        <li>Instagram</li>
        <li>WhatsApp</li>


      </ul>
      
        
      
    </div>

  
  </div>
  )
};

export default Footer;
