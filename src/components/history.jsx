import React from 'react';

const History = (props) => {

const {historyList, setHistoryList} = props

const hendleClearHistory = (evt)=> {
  evt.preventDefault()
  setHistoryList((prevHistoryList)=>[])
}

  return(
    <section className="history">
    <div className="history__container container">
      <h2 className="history__title">История конвертаций</h2>
      {historyList.length===0 ? `История отстутствует`: ``}
      <ul className="history__list">

        {historyList.map((element,id)=>{
        return ( <li className="history__item" key={element+id}>
          <p className="history__date">{element.dateValue}</p>
          <p className="history__sell">{element.sellValue} {element.sellCurrency}</p>
          <svg className="history__logo" width={41} height={18} viewBox="0 0 41 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25" />
            <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25" />
          </svg>
          <p className="history__buy">{element.buyValue} {element.buyCurrency}</p>
        </li>
        )
        })}

      </ul>
      <button className="history__clear" onClick={hendleClearHistory}>Очитстить историю</button>
    </div>

  </section>

  )
};

export default History;
