import React from 'react';


const MainNav = (props) => {
  const {logo} = props;

  return (<header className="main-nav">
    <nav className="container main-nav__container">
      <a href="#" className="main-nav__logo ">
        <img src={logo} alt="Логотип ЛигаБанк" className="main-nav__logo-img" height={25} width={149} />
      </a>
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Услуги</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Рассчитать кредит</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link main-nav__link--active">Конвертер валют</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Контакты</a>
        </li>
        <li className="main-nav__item">
          <a href="#" className="main-nav__link">Задать вопрос</a>
        </li>
      </ul>
      <a href="#" className="main-nav__login">Войти в Интернет-банк</a>
    </nav>
  </header>);
};

export default MainNav;
