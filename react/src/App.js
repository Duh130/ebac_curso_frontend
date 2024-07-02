import React, { useState } from 'react';
import IMCForm from './components/IMCForm';
import IMCResult from './components/IMCResult';

const App = () => {
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = (height, weight) => {
    const heightInMeters = parseFloat(height);
    const weightInKg = parseFloat(weight);
    const imcValue = weightInKg / (heightInMeters * heightInMeters);

    setImc(imcValue);
    setClassification(classifyIMC(imcValue));
  };

  const classifyIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 34.9) return 'Obesidade Grau I';
    if (imc < 39.9) return 'Obesidade Grau II';
    return 'Obesidade Grau III';
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <IMCForm onCalculate={calculateIMC} />
      {imc !== null && <IMCResult imc={imc} classification={classification} />}
    </div>
  );
};

export default App;
