import React from "react";
import style from "../AboutUs/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={style.container}>
      <h2 className={style.h2}>ИНТЕРНЕТ-МАГАЗИН MOBI TREND</h2>
      <center className={style.center}>
        MOBI TREND – интернет-магазин, который делает доставку по всему
        Кыргызстану.
      </center>
      <center className={style.center}>
        В магазинах огромный выбор смартфонов мировых брендов. Есть всё, для
        подключения к скоростному мобильному интернету: роутеры, винглы,
        семейные комплекты для дома!
      </center>
      <center className={style.center}>
        Больше 2000 аксессуаров для мобильных устройств: кабели, переходники,
        адаптеры, акустические колонки и наушники, ультрамодные сумки, бананки и
        рюкзаки, портативные зарядки, устройства для системы «Умный дом» и
        многое другое.
      </center>
      <div className={style.aboutUs}>
        <ul className={style.spanImg}>
          <img
            className={style.imgUs}
            src="https://ostore.kg/img/svg2/Icon-1.svg"
            alt=""
          />
          Только сертифицированный товар от официальных поставщиков. Гарантийное
          обслуживание.
        </ul>
        <ul className={style.spanImg}>
          <img
            className={style.imgUs}
            src="https://ostore.kg/img/svg2/Icon-2.svg"
            alt=""
          />
          Смартфон можно купить В КРЕДИТ или В РАССРОЧКУ без процентов и
          переплаты.
        </ul>
        <ul className={style.spanImg}>
          <img
            className={style.imgUs}
            src="https://ostore.kg/img/svg2/Icon-4.svg"
            alt=""
          />
          Постоянные Акции, Скидки и Специальные предложения.
        </ul>
        <ul className={style.spanImg}>
          <img
            className={style.imgUs}
            src="https://ostore.kg/img/svg2/Icon-5.svg"
            alt=""
          />
          Бесплатная доставка по Бишкеку.
        </ul>
        <ul className={style.spanImg}>
          <img
            className={style.imgUs}
            src="https://ostore.kg/img/svg2/Icon-6.svg"
            alt=""
          />
          На нашем сайте вы найдёте детальное описание каждого товара, а также
          видеообзоры, которые помогут вам определиться с выбором
        </ul>
        <ul className={style.spanImg}>
          <img
            className={style.imgUs}
            src="https://ostore.kg/img/svg2/Icon-7.svg"
            alt=""
          />
          БОНУС при заказе смартфона онлайн! Дарим БЕСПЛАТНЫЙ скоростной
          интернет-трафик.
        </ul>
        <ul className={style.spanImg}>
          <img
            className={style.imgUs}
            src="https://ostore.kg/img/svg2/Icon-8.svg"
            alt=""
          />
          Оперативная обратная связь по телефону 0501090349.
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
