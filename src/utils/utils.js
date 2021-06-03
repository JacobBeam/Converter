import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)

export const dateMax = dayjs().format(`YYYY-MM-DD`);
export const dateMin = dayjs().subtract(7, 'day').format(`YYYY-MM-DD`);

export const findCurrencyByDate = (date, data)=>{

dayjs(date, 'DD.MM.YYYY', true)
const x = dayjs(date, 'DD.MM.YYYY', true);
const y = dayjs(dateMax)
const differenceOfDay = (y.diff(x))/1000/60/60/24
return data[differenceOfDay]

}

export const convertValue =(data, value, currency, desiredCurrency )=>{

  if (currency===desiredCurrency) {
    console.log("валюты равны")
    return Number(value)
  } else if (currency === "RUB") {


    console.log(desiredCurrency+" :"+ data["Valute"][desiredCurrency]["Value"]+ "  Kurs"+(value/data["Valute"][desiredCurrency]["Value"]).toFixed(2))
    return Number((value/data["Valute"][desiredCurrency]["Value"]).toFixed(2))
  } else if (desiredCurrency === "RUB" ) {
    console.log(currency+" : "+ (value*data["Valute"][currency]["Value"]).toFixed(2))
    return Number((value*data["Valute"][currency]["Value"]).toFixed(2))
  } else {
    console.log(currency+" : "+ data["Valute"][currency]["Value"]+ "_____"+desiredCurrency+" : "+ data["Valute"][desiredCurrency]["Value"]+ "  Kurs"+(value*data["Valute"][currency]["Value"]/data["Valute"][desiredCurrency]["Value"]).toFixed(2))
    return Number((value*data["Valute"][currency]["Value"]/data["Valute"][desiredCurrency]["Value"]).toFixed(2))
  }


}

export const isEmpty=(obj) =>{
  return Object.keys(obj).length === 0;
}
