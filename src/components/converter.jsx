import React, {useState} from 'react';
import dayjs from 'dayjs';
import Flatpickr from "react-flatpickr";
import "../../node_modules/flatpickr/dist/flatpickr.min.css";
import {dateMax, dateMin} from "../utils/const.js";


const Converter = (props) => {



  const [valueForm, setValueForm] = useState({
    sellValue: ``,
    sellCurrency: `RUB`,
    buyValue: ``,
    buyCurrency: `RUB`,
    dateValue:``,
});


const handleChangeForm = (evt)=> {
  const {name, value} = evt.target;
setValueForm({...valueForm, [name]:value})
}

const handleChangeFlip = (selectedDates, dateStr)=> {
  const newdate = dayjs(selectedDates).toDate().toString()
  console.log(newdate)

  setValueForm({...valueForm, dateValue:dateStr})
}

const {sellValue, sellCurrency, buyValue, buyCurrency,dateValue} = valueForm;

return (
  <section className="converter">
      <div className="converter__container container">
      <h1 className="converter__title">Конвертер валют</h1>
        <form action="POST" className="converter__form converter-form">
        <div className="converter-form__wrapper">
          <div className="converter-form__collumn">
          <label htmlFor="sell" className="converter-form__label">У меня есть</label>
          <input type="text" className="converter-form__input" onChange={handleChangeForm} name="sellValue" id="sellValue" value={sellValue} />
          <select className="converter-form__select" onChange={handleChangeForm} name="sellCurrency" id="currency-sell">
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
          </div>

          <svg className="converter-form__img" width={56} height={36} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 1L3 9L19 17" stroke="#1F1E25" strokeWidth={2} />
            <path d="M3 9C9.66667 9 33.3241 9 44.6667 9L53 9" stroke="#1F1E25" strokeWidth={2} />
            <path d="M37 35L53 27L37 19" stroke="#1F1E25" strokeWidth={2} />
            <path d="M53 27C46.3333 27 22.6759 27 11.3333 27H3" stroke="#1F1E25" strokeWidth={2} />
          </svg>
          <div className="converter-form__collumn">
          <label htmlFor="buy" className="converter-form__label">Хочу приобрести</label>
          <input type="text" className="converter-form__input" onChange={handleChangeForm} name="buyValue" id="buyValue" value={buyValue}/>
          <select className="converter-form__select" onChange={handleChangeForm} name="buyCurrency" id="currency-buy">
          <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
          </div>
          </div>
          <div className="converter-form__row">
          <Flatpickr
className="converter-form__input converter-form__input--date"
        value={dateMax}
        options={{
          defaultDate:dateMax,
          minDate: dateMin,
          maxDate: dateMax,
          dateFormat: "d.m.Y",
          enableTime:false
        }}
        onChange={handleChangeFlip}
      />
          <button type="submit" className="converter-form__submit">Сохранить результат</button>
        </div>
        </form>
      </div>
      {/*<h2>Стейт:</h2>
      <p>Sell: {sellValue}</p>
      <p>sellCurrency: {sellCurrency}</p>
      <p>Buy: {buyValue}</p>
      <p>buyCurrency: {buyCurrency}</p>
      <p>date: {dateValue}</p>*/}
    </section>
)
};

export default Converter;