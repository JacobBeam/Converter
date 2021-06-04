import React, {useState} from 'react';
import Promo from './promo';
import Converter from './converter';
import History from './history';

const Main = (props) => {

  const [historyList, setHistoryList] = useState([]);

  const {card} = props;

  return (
    <main>
      <Promo card={card}></Promo>
      <Converter setHistoryList={setHistoryList}></Converter>
      <History historyList={historyList} setHistoryList={setHistoryList}></History>
    </main>
  );
};

export default Main;
