import React, { useState } from 'react';

const IMCForm = ({ onCalculate }) => {
const [height, setHeight] = useState('');
const [weight, setWeight] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
    onCalculate(height, weight);
    }
};

return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Altura (em metros): </label>
        <input 
        type="number" 
        value={height} 
        onChange={(e) => setHeight(e.target.value)} 
        step="0.01"
        min="0"
        />
    </div>
    <div>
        <label>Peso (em kg): </label>
        <input 
        type="number" 
        value={weight} 
        onChange={(e) => setWeight(e.target.value)}
        step="0.1"
        min="0"
        />
        </div>
        <button type="submit">Calcular IMC</button>
    </form>
);
};

export default IMCForm;
