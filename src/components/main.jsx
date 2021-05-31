import React from 'react';
import Promo from './promo';
import Converter from './converter';
import History from './history';

const Main = (props) => {
const {card}=props;
  return (
    <main>
    <Promo card={card}></Promo>
    <Converter></Converter>
    <History></History>
    </main>
  )
};

export default Main;
