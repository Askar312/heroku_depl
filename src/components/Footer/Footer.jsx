import React from "react";
import style from "../Footer/Footer.module.css"
import logo from "../../assetcs/images/navbar/logo.svg"
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
  <div className={style.footerContainer}>
    <div className={style.contentItem}>
      <img className={style.contentItemImg} src={logo} alt="logo" />
    </div>
    <div className={style.footerContentItem}>
      <ul>
        <li onClick={()=>navigate("/")}>Главная</li>
        <li onClick={()=>navigate("/aboutus")}>О магазине</li>
        <li onClick={()=>navigate("/credit")}>Кредит</li>
        <li onClick={()=>navigate("/delivery")}>Доставка</li>
        <li onClick={()=>navigate("/stock")}>Акции</li>
      </ul>
      <ul>
        <li>Контакты</li>
        <li >0501090349</li>
        <li><a target="_blank" href="https://www.instagram.com/mobitrend.kg/">Instagram</a></li>
        <li><a target="_blank" href="https://wa.me/996551090349">WhatsApp</a></li>


      </ul>
      <ul>
        <li><a target="_blank" href="https://2gis.kg/bishkek/firm/70000001041515078?m=74.614487%2C42.875317%2F16">Адрес</a></li>
        <li>г.Бишкек</li>
        <li>ТЦ Гум Чынар</li>
        <li>1 этаж </li>


      </ul>
      
        
      
    </div>

  
  </div>
  )
};

export default Footer;
