import React from 'react';

const IMCResult = ({ imc, classification }) => {
return (
    <div>
    <h2>Seu IMC é: {imc.toFixed(2)}</h2>
    <h3>Classificação: {classification}</h3>
    </div>
);
};

export default IMCResult;
