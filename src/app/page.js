"use client";
import React, { useState } from 'react';
import styles from './page.module.css'

const CompoundInterestCalculator = () => {
  const [initial, setInitial] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [compoundFrequency, setCompoundFrequency] = useState('1');
  const [accumInterest, setAccumInterest] = useState(0);
  const [compoundedInitial, setCompoundedInitial] = useState(0);
  const [contribution, setContribution] = useState(0);
  const [contributionTotalInterest, setContributionTotalInterest] = useState(0);
  const [totalGain, setTotalGain] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const calculateInterest = () => {
    const p = parseFloat(initial);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundFrequency);
    const c = parseFloat(contribution);
  

    const coeff = 1 + r / n;
    const amount = p * Math.pow(coeff, n * t);
    const interest = amount - p;
    const ct = c * (coeff * (Math.pow(coeff, t) - 1)) / (r / n);
    const totalContributions = c*t;
    const contributionInterest = ct - c*t;


    setAccumInterest(interest.toFixed(2));
    setCompoundedInitial(amount.toFixed(2));
    setContributionTotalInterest(contributionInterest.toFixed(2));
    setTotalGain((interest + contributionInterest).toFixed(2));
    setFinalAmount((amount + ct).toFixed(2));
  };

  return (
    <main className={styles.main}>
    <div className="p-2">        
      <h1 className="text-2xl bottom-4">Interés Compuesto</h1>
      <div className={styles.description}>
        <h2>Con esta herramienta podrás calcular el crecimiento de una inversión o ahorro. Puedes calcularlo en pesos tomando la tasa de interés nominal o en UF tomando la tasa de interés real.</h2>
      </div>
      <div className="p-2">
      <div>
        <label>
          Depósito inicial: 
          <input type="number" value={initial} className="field" onChange={(e) => setInitial(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Contribución anual: 
          <input type="number" value={contribution} className="field" onChange={(e) => setContribution  (e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tasa de interés anual (%): 
          <input type="number" value={rate} className="field" onChange={(e) => setRate(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Tiempo (años): 
          <input type="number" value={time} className="field" onChange={(e) => setTime(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Aplicar interés: 
          <select value={compoundFrequency} className="block p-1.5 rounded-md" onChange={(e) => setCompoundFrequency(e.target.value)}>
            <option value="1">Anualmente</option>
            <option value="2">Semestralmente</option>
            <option value="4">Trimestralmente</option>
            <option value="12">Mensualmente</option>
          </select>
        </label>
      </div>
      </div>
      <div>
        <button className="p-2 bg-sky-500 hover:bg-sky-700 rounded-lg" onClick={calculateInterest}>Calcular interés</button>
      </div>
      {compoundedInitial !== null && (
        <div className="p-2">
          <h2 className="text-2xl">Capital acumulado: ${finalAmount}</h2>
          <h2 className="text-2xl">Interés: ${totalGain}</h2>
        </div>
      )}
    </div>
    </main>
  );
};

export default CompoundInterestCalculator;