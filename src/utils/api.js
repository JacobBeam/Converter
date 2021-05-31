import dayjs from 'dayjs';
import {dateMax, dateMin} from "../utils/const.js";


const NUMBER_OF_DIGITS = 2;
const TWO_DIGIT_FORMAT = `0`;

const TOTAL_DAYS = 7

const URL_TODAY= `https://www.cbr-xml-daily.ru/daily_json.js`
const URL_START = `https://www.cbr-xml-daily.ru/archive`
const URL_END = `daily_json.js`

const formatTime = (duration) =>{
  return String(duration).padStart(NUMBER_OF_DIGITS, TWO_DIGIT_FORMAT);
};

const getUrl = (date)  =>{
  const day = formatTime(dayjs(date).date());
const month = formatTime(dayjs(date).month()+1);
const year = dayjs(date).year();

return `${URL_START}/${year}/${month}/${day}/${URL_END}`
}

const getDaysForRequest = (date)=> {
  const days = []

  for (let i=1; i<=TOTAL_DAYS; i++) {

    let newDate = dayjs(date).subtract(i, 'day').format(`YYYY-MM-DD`);
    if (dayjs(newDate).day()===0) {
      newDate = dayjs(newDate).subtract(1, 'day').format(`YYYY-MM-DD`);
    } else if (dayjs(newDate).day()===1) {
      newDate = dayjs(newDate).subtract(2, 'day').format(`YYYY-MM-DD`);
    }
    days.push(newDate)
  }
  return days
  }

  const daysForRequest = getDaysForRequest(dateMax)
  const urls = [URL_TODAY, ...daysForRequest.map(date=>getUrl(date))]
const requests = urls.map(url=>fetch(url, {
  method: GET,
}))
Promise.all(requests)
.then(responses => Promise.all(responses.map(r => r.json())))
.then(data => console.log(data))
