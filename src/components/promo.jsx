import React from 'react';

const Promo = (props) => {

  const {card} = props;

  return (
    <section className="promo">
      <h2 className="visually-hidden">кредит от Лига Банк</h2>
      <div className="promo__cintainer container">
        <div className="promo__info">
          <p className="promo__title">Лига Банк</p>
          <p className="promo__subtitle">Кредиты на любой случай</p>
          <a href="#" className="promo__link">Рассчитать кредит</a>
        </div>
        <div className="promo__wrapper">
          <img src={card} alt="Кредитная карта" className="promo__img" height={286} width={444} />
        </div>
      </div>
    </section>
  )
};

export default Promo;
