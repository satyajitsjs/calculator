import React, { useState } from 'react';
import Buttons from './Buttons';
import './styles/Calculator.css';
import axios from 'axios';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [calculations, setCalculations] = useState([]);
  const URL = 'http://localhost:8000/api/';

  const inputHandler = (e) => {
    setInput(input + e.target.innerText);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const changePlusMinus = () => {
    setInput((prev) => (prev.charAt(0) === '-' ? prev.slice(1) : '-' + prev));
  };

  const calculateAns = async () => {
    try {
      const response = await axios.post(`${URL}calculate/`, { expression: input });
      const data = response.data;
      if (response.status === 201) {
        setResult(data.result);
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const fetchCalculations = async () => {
    try {
      const response = await axios.get(`${URL}calculations/`);
      const data = response.data;
      console.log(data);
      setCalculations(data);
    } catch (error) {
      console.error('Error fetching calculations:', error);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result || input}</div>
      <Buttons
        inputHandler={inputHandler}
        clearInput={clearInput}
        backspace={backspace}
        changePlusMinus={changePlusMinus}
        calculateAns={calculateAns}
        fetchCalculations={fetchCalculations}
      />
      <ul>
        {calculations.map((calc) => (
          <li key={calc.id}>{calc.expression} = {calc.result}</li>
        ))}
      </ul>
    </div>
  );
}