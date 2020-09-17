import React, { useState } from 'react';
import './style.css';

const App = () => {

  const [num, setNum] = useState(0);
  const [timer, setTimer] = useState(null);
  const [actionBtn, setactionBtn] = useState('Vai')

  const vai = () => {
    if (timer !== null) {
      clearInterval(timer);
      setTimer(null);
      setactionBtn('Vai')
    } else {
      setTimer(setInterval(() => {
        setNum(num => num + 0.1);
      }, 100));
      setactionBtn('Parar')
    }

  }

  const limpar = () => {
    clearInterval(timer);
    setTimer(null);
    setNum(num => 0)
    setactionBtn('Vai')
  }



  return (
    <div className="container">
      <img src={require('./assets/cronometro.png')} className="img" />
      <a className="timer">{num.toFixed(1)}</a>
      <div className="areaBtn">
        <a className="botao" onClick={vai}>{actionBtn}</a>
        <a className="botao" onClick={limpar}>Limpar</a>
      </div>
    </div>
  )
}

export default App;