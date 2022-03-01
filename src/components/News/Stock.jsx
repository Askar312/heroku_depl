import React from 'react';
import style from "../News/Stock.module.css"

const Stock = () => {
    return (
        <div className={style.Container}>
            <h2 className={style.ContainerHeader}>Акции и новости</h2>
            <div className={style.ContainerItem}>
                <img className={style.ContainerImage} src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2021-12/RIAN_6657800.HR_.ru_.jpg?itok=FmndBpxe" alt="" />
                <div className={style.ContainerTitle}>
                    <h4>iPhone 14 Pro сможет снимать видео в формате 8К камерой в 48 мегапикселей</h4>
                    <h6>В 2023 году компания Apple намерена выпустить новую модель iPhone 14 Pro, которая будет снимать видео в формате 8К. Об этом сообщает компания MacRumors со ссылкой на отчет аналитика TF International Securities Мин-Чи Ко.</h6>
                </div>
            </div>
            <div className={style.ContainerItem}>
                <img className={style.ContainerImage} src="https://1.bp.blogspot.com/-FNEtpfLYpYM/W9AFDut8UNI/AAAAAAAFc48/6gmtYZwVJAYtFUXdZw3-l1jpOO8PZMJawCLcBGAs/s1600/CASETiFY-02.jpg" alt="" />
                <div className={style.ContainerTitle}>
                    <h4>Акция 1+1.  </h4>
                    <h6>Купи чехол из серии Casetify и получи защитное стекло в подарок на свой смартфон!  </h6>
                </div>
            </div>
            <div className={style.ContainerItem}>
                <img className={style.ContainerImage} src="https://3dnews.ru/assets/external/illustrations/2021/10/21/1051868/032423094.jpg" alt="" />
                <div className={style.ContainerTitle}>
                    <h4>AirPods Pro теперь поставляются в кейсе с поддержкой MagSafe.</h4>
                    <h6>ВВ прошлом году Apple представила магнитную зарядку MagSafe для смартфонов вместе с серией iPhone 12. Изначально они были единственными продуктами компании, поддерживающими зарядку нового типа, но позже Apple расширила портфолио совместимых с MagSafe устройств. В понедельник компания представила AirPods 3, которые поставляются в кейсе с поддержкой магнитной зарядки. Также аналогичный аксессуар получили и представленные в 2019 году AirPods Pro.</h6>
                </div>
            </div>
            <div className={style.ContainerItem}>
                <img className={style.ContainerImage} src="https://www.ixbt.com/img/n1/news/2022/0/3/Samsung-Galaxy-S22-Ultra-3_large.png" alt="" />
                <div className={style.ContainerTitle}>
                    <h4>Ожидается, что в линейке Galaxy S22 будет три модели, включая Galaxy S22, S22+ и Galaxy S22 Ultra.</h4>
                    <h6>У Galaxy S22 Ultra будет прямоугольный дизайн, что делает его похожим на представителя серии Galaxy Note. Кроме того, Galaxy S22 Ultra будет предлагать поддержку S Pen, к большому удовольствию тех, кто скучает по серии Note. Более того, в Galaxy S22 Ultra есть слот для хранения S Pen. По словам Агарвала, задержка S Pen составит 2,8 мс, что станет абсолютным рекордом.</h6>
                </div>
            </div>
            
             
            
        </div>
    );
};

export default Stock;