import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)

export const dateMax = dayjs().format(`YYYY-MM-DD`);
export const dateMin = dayjs().subtract(7, 'day').format(`YYYY-MM-DD`);

export const findCurrencyByDate = (date, data) => {

  dayjs(date, 'DD.MM.YYYY', true)
  const x = dayjs(date, 'DD.MM.YYYY', true);
  const y = dayjs(dateMax)
  const differenceOfDay = (y.diff(x)) / 1000 / 60 / 60 / 24
  return data[differenceOfDay]
}

export const convertValue = (data, value, currency, desiredCurrency) => {

  if (currency === desiredCurrency) {
    return Number(value)
  } else if (currency === "RUB") {
    return Number((value / data["Valute"][desiredCurrency]["Value"]).toFixed(2))
  } else if (desiredCurrency === "RUB") {
    return Number((value * data["Valute"][currency]["Value"]).toFixed(2))
  } else {
    return Number((value * data["Valute"][currency]["Value"] / data["Valute"][desiredCurrency]["Value"]).toFixed(2))
  }
}
