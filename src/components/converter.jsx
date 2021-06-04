import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import Flatpickr from "react-flatpickr";
import "../../node_modules/flatpickr/dist/flatpickr.min.css";
import {dateMax, dateMin, findCurrencyByDate, convertValue} from "../utils/utils.js";
import {requests} from '../utils/api';
import Loading from './loading';

const COUNT_OF_RESULTS = 10;

const Converter = (props) => {

  const {setHistoryList} = props;

  const [isExchangeRates, setIsExchangeRates] = useState(false);
  const [exchangeRates, setExchangeRates] = useState([]);
  const [valueForm, setValueForm] = useState({
    sellValue: ``,
    sellCurrency: `RUB`,
    buyValue: ``,
    buyCurrency: `RUB`,
    dateValue: dayjs(dateMax).format(`DD.MM.YYYY`).toString(),
  });

  const {sellValue, sellCurrency, buyValue, buyCurrency, dateValue} = valueForm;

  useEffect(() => {
    if (!isExchangeRates) {
      Promise.all(requests)
        .then((responses) => Promise.all(responses.map((r) => r.json())))
        .then((data) => setExchangeRates(data))
        .then(() => setIsExchangeRates(true));
    }
  }, [isExchangeRates]);


  if (!isExchangeRates) {
    return (
      <Loading></Loading>
    );
  }

  const handleSaveResult = (evt) => {
    evt.preventDefault();
    setHistoryList((prevHistoryList) => ([valueForm, ...prevHistoryList]).slice(0, COUNT_OF_RESULTS));
  };

  const handleChangeForm = (evt) => {
    const {name, value} = evt.target;
    setValueForm((prevValueForm) => ({...prevValueForm, [name]: value}));
    const dataForDay = findCurrencyByDate(dateValue, exchangeRates);

    switch (name) {
      case `sellValue`:
        setValueForm((prevValueForm) => ({...prevValueForm, [`buyValue`]: convertValue(dataForDay, value, sellCurrency, buyCurrency)}));
        break;
      case `buyValue`:
        setValueForm((prevValueForm) => ({...prevValueForm, [`sellValue`]: convertValue(dataForDay, value, buyCurrency, sellCurrency)}));
        break;
      case `sellCurrency`:
        setValueForm((prevValueForm) => ({...prevValueForm, [`buyValue`]: convertValue(dataForDay, sellValue, value, buyCurrency)}));
        break;
      case `buyCurrency`:
        setValueForm((prevValueForm) => ({...prevValueForm, [`buyValue`]: convertValue(dataForDay, sellValue, sellCurrency, value)}));
        break;
    }
  };

  const handleChangeFlatpickr = (selectedDates, dateStr) => {
    const dataForDay = findCurrencyByDate(dateStr, exchangeRates);

    setValueForm({...valueForm, dateValue: dateStr});
    setValueForm((prevValueForm) => ({...prevValueForm, [`buyValue`]: convertValue(dataForDay, sellValue, sellCurrency, buyCurrency)}));
  };

  return (
    <section className="converter">
      <div className="converter__container container">
        <h1 className="converter__title">Конвертер валют</h1>
        <form onSubmit={handleSaveResult} className="converter__form converter-form">
          <div className="converter-form__wrapper">
            <div className="converter-form__collumn">
              <label htmlFor="sell" className="converter-form__label">У меня есть</label>
              <input type="number" className="converter-form__input" onChange={handleChangeForm} name="sellValue"
                id="sellValue" value={sellValue} pattern="^[ 0-9]+$" />
              <select className="converter-form__select" onChange={handleChangeForm} name="sellCurrency" id="currency-sell">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CNY">CNY</option>
              </select>
            </div>

            <svg className="converter-form__img" width={56} height={36} viewBox="0 0 56 36" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M19 1L3 9L19 17" stroke="#1F1E25" strokeWidth={2} />
              <path d="M3 9C9.66667 9 33.3241 9 44.6667 9L53 9" stroke="#1F1E25" strokeWidth={2} />
              <path d="M37 35L53 27L37 19" stroke="#1F1E25" strokeWidth={2} />
              <path d="M53 27C46.3333 27 22.6759 27 11.3333 27H3" stroke="#1F1E25" strokeWidth={2} />
            </svg>
            <div className="converter-form__collumn">
              <label htmlFor="buy" className="converter-form__label">Хочу приобрести</label>
              <input type="number" className="converter-form__input" onChange={handleChangeForm} name="buyValue"
                id="buyValue" value={buyValue} pattern="^[ 0-9]+$" />
              <select className="converter-form__select" onChange={handleChangeForm} name="buyCurrency" id="currency-buy">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CNY">CNY</option>
              </select>
            </div>
          </div>
          <div className="converter-form__row">
            <Flatpickr
              className="converter-form__input converter-form__input--date"
              options={{
                defaultDate: dateMax,
                minDate: dateMin,
                maxDate: dateMax,
                dateFormat: `d.m.Y`,
                enableTime: false}}
              onChange={handleChangeFlatpickr} />
            <button type="submit" className="converter-form__submit">Сохранить результат</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Converter;
