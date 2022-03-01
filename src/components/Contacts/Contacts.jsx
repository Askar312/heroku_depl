import { Button, TextField } from "@mui/material";
import React from "react";
import style from "../Contacts/Contacts.module.css";
import logo from "../../assetcs/images/navbar/logo2.svg";

const Contacts = () => {
  return (
    <div className={style.containerContacts}>
      <img className={style.logo} src={logo} alt="" />
      <h2 className={style.h2Text}>Контактная информация</h2>
      <div className={style.contactsInfo}>
        <ul>
          <img
            className={style.imgUs}
            src="https://ostore.kg/bitrix/templates/dresscode/images/cont1.png"
            alt=""
          />
          Телефон: 0 501 09 03 49
        </ul>
        <ul>
          <img
            className={style.imgUs}
            src="https://ostore.kg/bitrix/templates/dresscode/images/cont3.png"
            alt=""
          />
          г. Бишкек ТЦ Гум 1-Этаж, OA19
        </ul>
        <ul>
          <img
            className={style.imgUs}
            src="https://ostore.kg/bitrix/templates/dresscode/images/cont4.png"
            alt=""
          />
          Пн-Вс:с 10:00 до 22:00 Без выходных
        </ul>
      </div>
      <h2 className={style.h2Text}>Обратная связь</h2>
      <ul className={style.ulText}>
        Оставьте Ваше сообщение и контактные данные и наши специалисты свяжутся
        с Вами в ближайшее рабочее время для решения Вашего вопроса.
      </ul>
      <div className={style.inpContacs}>
        <TextField
          sx={{ my: 5, mx: 7 }}
          helperText="Ваше имя*"
          id="demo-helper-text-aligned"
          label="Имя"
        />
        <TextField
          sx={{ my: 5, mx: 7 }}
          helperText="Электронная почта*"
          id="demo-helper-text-aligned"
          label="Почта"
        />
        <TextField
          sx={{ my: 5, mx: 7 }}
          helperText=" Ваш телефон*"
          id="demo-helper-text-aligned"
          label="Телефон"
        />
        <TextField
          sx={{ my: 5, mx: 7 }}
          helperText="Тема вопроса*"
          id="demo-helper-text-aligned"
          label="Вопрос"
        />
        <TextField
          sx={{ my: 5, mx: 7 }}
          helperText=" Ваше сообщение**"
          id="demo-helper-text-aligned"
          label="Сообщение"
        />
        <Button sx={{ my: 6, mx: 7 }} color="error">
          Оставьте Отзыв
        </Button>
      </div>
    </div>
  );
};

export default Contacts;
