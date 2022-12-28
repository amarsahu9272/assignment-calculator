import React, { useState } from 'react';
import './calculator.css'

function Calculator() {
    const [result, setResult] = useState(0);
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);
    const [operator, setOperator] = useState('');

    function handleOperand1Change(event) {
        setOperand1(event.target.value);
    }

    function handleOperand2Change(event) {
        setOperand2(event.target.value);
    }

    function handleOperatorChange(event) {
        setOperator(event.target.value);
    }

    function handleCalculate() {
        let calcResult;
        if (operator === '+') {
            calcResult = Number.parseInt(operand1) + Number.parseInt(operand2);
        } else if (operator === '-') {
            calcResult = operand1 - operand2;
        } else if (operator === '*') {
            calcResult = operand1 * operand2;
        } else if (operator === '/') {
            calcResult = operand1 / operand2;
        } else {
            calcResult = 'Invalid operator';
        }
        setResult(calcResult);
    }

    return (

        <div className='innerDiv'>
            <input type="number" value={operand1} onChange={handleOperand1Change} />
            <select value={operator} onChange={handleOperatorChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={operand2} onChange={handleOperand2Change} />
            <button onClick={handleCalculate}>Calculate</button>
            <div style={{ color: 'white' }}>Result: {result}</div>
        </div>

    );
}

export default Calculator;





















