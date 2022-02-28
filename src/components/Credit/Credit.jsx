import React from 'react';
import style from "../Credit/Credit.module.css"

const Credit = () => {
    return (
        <div>
          <div className={style.containerCredit}>
            <div className={style.CreditImage}>
            <img className={style.creditLogo} src="https://ostore.kg/upload/medialibrary/2c9/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%20DosCredobank%20%D0%9F%D0%9D%D0%93.png" alt="doscredobank logo" />
            </div>
            <div  >
                <h2 className={style.CreditItem}>Покупка в рассрочку и кредит</h2>
                <h4 className={style.CreditItemText}>Устали копить на новый смартфон и ждать покупки до тех пор, пока наберётся нужная сумма?</h4>
                <h4 className={style.CreditItemText}>Сеть магазинов O!Store в партнерстве с Дос-Кредобанк предоставляет вам возможность оформить рассрочку без первого взноса и переплат на смартфоны Apple, Xiaomi, Samsung, Realme, Honor, Tecno, OnePLus и INOI во всех магазинах сети.</h4>
                <h4 className={style.CreditItemText}>На смартфоны других производителей есть возможность оформления кредита.</h4>
                <h4 className={style.CreditItemText}>Бери сейчас – плати потом!</h4>
                <h2 className={style.CreditItem}>Для оформления кредита потребуется только паспорт*:</h2>
                <h3 className={style.CreditItemText}>Офисным сотрудникам:</h3>
                <h4 className={style.CreditItemText}>1. Паспорт гражданина Кыргызской Республики (ID-карта) или      Биометрический паспорт. 
                * Если у Вас имеются отчисления в социальный фонд, потребуется только паспорт. Если отчислений нет, то необходимо предоставить справку о заработной плате за последние 3 месяца, с указанием должности, отчислений и удержаний. Размер ежемесячной заработной платы должен составлять от 10'000 сомов.</h4>
                <h3 className={style.CreditItemText}>Частным предпринимателям:</h3>
                <h4 className={style.CreditItemText}>1. Паспорт гражданина Кыргызской Республики (ID-карта) или Биометрический паспорт. 
                2. Продленный действующий патент за последние 3 месяца, с подтверждающей квитанцией.
                * Если Вы ранее оформлялись по патенту, то при повторном оформлении требуется оплаченный патент с квитанцией об уплате только за текущий месяц, действующий на момент обращения.</h4>
                <h3 className={style.CreditItemText}>Пенсионерам:</h3>
                <h4 className={style.CreditItemText}>1. Паспорт гражданина Кыргызской Республики (ID-карта) или Биометрический паспорт. 
                * Ежемесячная пенсия должна превышать 9000 сомов.</h4>
                <h2 className={style.CreditItem}>Условия кредита:</h2>
                <ol className={style.CreditItemText}>
                <li>Возраст Клиента – от 23 до 70 лет</li>
                <li>Сумма кредита – от 3000 до 100'000 сомов </li>
                <li>Срок финансирования – 3, 6, 9 и 12 месяцев</li>
                <li>В качестве залога выступает сам приобретаемый товар</li>
                <li>Оформление – в течение 30 мин</li>
                <li>Первоначальный взнос от 0% до 70%</li>
                <li>Без поручительства</li>
                <li>Есть возможность досрочного погашения</li>
                </ol>
                <h6 className={style.CreditItemText}>* Для пенсионеров сумма кредита - до 30'000 сомов</h6>
                <h4 className={style.CreditItemText}>ВАЖНО! Банк вправе отказать в выдаче кредита без объяснения причин. Более подробная информация в кредитном договоре.</h4>
                
            </div>
            
          </div>
        </div>
    );
};

export default Credit;