import React from 'react';
import './styles/Buttons.css';

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns ,fetchCalculations }) => {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('equalbtn').click();
    }
  });

  return (
    <div className="buttons">
      <button onClick={clearInput}>AC</button>
      <button onClick={backspace}>⌫</button>
      <button onClick={changePlusMinus}>±</button>
      <button onClick={inputHandler}>/</button>
      <button onClick={inputHandler}>7</button>
      <button onClick={inputHandler}>8</button>
      <button onClick={inputHandler}>9</button>
      <button onClick={inputHandler}>*</button>
      <button onClick={inputHandler}>4</button>
      <button onClick={inputHandler}>5</button>
      <button onClick={inputHandler}>6</button>
      <button onClick={inputHandler}>-</button>
      <button onClick={inputHandler}>1</button>
      <button onClick={inputHandler}>2</button>
      <button onClick={inputHandler}>3</button>
      <button onClick={inputHandler}>+</button>
      <button onClick={inputHandler}>0</button>
      <button onClick={inputHandler}>.</button>
      <button id="equalbtn" onClick={calculateAns}>=</button>
      <button onClick={fetchCalculations}>Caluculation History</button>
    </div>
  );
};

export default Buttons;