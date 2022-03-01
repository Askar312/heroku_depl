import {
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import style from "../SideBar/SideBar.module.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <RadioGroup
            row
            className={style.sideBar}
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <FormControlLabel
              className={style.inpBar}
              value="phone"
              control={<Radio className={style.radioInp} />}
              label="Телефоны"
            />
            <FormControlLabel
              className={style.inpBar}
              value="laptop"
              control={<Radio className={style.radioInp} />}
              label="Ноутбуки"
            />
            <FormControlLabel
              className={style.inpBar}
              value="watch"
              control={<Radio className={style.radioInp} />}
              label="Смарт Часы"
            />
            <FormControlLabel
              className={style.inpBar}
              value="airpods"
              control={<Radio className={style.radioInp} />}
              label="Наушники"
            />
            <FormControlLabel
              className={style.inpBar}
              value="case"
              control={<Radio className={style.radioInp} />}
              label="Чехлы"
            />
            <FormControlLabel
              className={style.inpBar}
              value="printer"
              control={<Radio className={style.radioInp} />}
              label="Принтеры Штрих Кодов"
            />

            <FormControlLabel
              className={style.inpBar}
              value="all"
              control={<Radio className={style.radioInp} />}
              label="Все товары"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
