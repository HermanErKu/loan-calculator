import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 

function App() {
  const [loanAmount, setLoanAmount] = useState(1200000);
  const handleLoanChange = (event:any) => {
    setLoanAmount(event.target.value);    
    handleAnyChange()
  }

  const [interestPercent, setInterestPercent] = useState(5.5);
  const handleInterestChange = (event:any) => {
    setInterestPercent(event.target.value);
    handleAnyChange();
  }

  const [repaymentYears, setRepaymentYears] = useState(25);
  const handleRepaymentChange = (event:any) => {
    setRepaymentYears(event.target.value);
    handleAnyChange();
  }


  const [annuityData, setAnnuityData] = useState([{year:0, payment:0, together:0}]);
  const [serialData, setSerialData] = useState([]);
  const handleAnyChange = () => {
    //calculate annuity data
    setAnnuityData([{year:0, payment:0, together:0}]);

    let sum = loanAmount;
    let rente = interestPercent / 100;
    let nedbetalingstid = repaymentYears;

    let tilsammen = 0;
    let restlån = sum;
    for (let x = 1; x < nedbetalingstid + 1; x++) {
      let rentebeløp = restlån * rente;
      let avdrag = sum / nedbetalingstid;
      let terminbeløp = rentebeløp + avdrag;
      tilsammen += terminbeløp;
      restlån -= avdrag;

      annuityData.push({year:x, payment:terminbeløp, together:tilsammen})
      console.log(annuityData);
      
    }

    //calculate serial data
  }

  return (
    <div className="App">
      <div id="left">
        <h1>Annuity loan</h1>

        <form>
          <label htmlFor="loanAmount">Loan amount:</label><br />
          <input type="number" name="loanAmount" id="loanAmount" value={loanAmount} onChange={handleLoanChange} /><br /><br />
          
          <label htmlFor="interestPercent">Interest:</label><br />
          <input type="number" name="interestPercent" id="interestPercent" value={interestPercent} onChange={handleInterestChange} /><br /><br /> 

          <label htmlFor="repaymentYears">Repayment years:</label><br />
          <input type="number" name="repaymentYears" id="repaymentYears" value={repaymentYears} onChange={handleRepaymentChange} /><br /><br />
        </form>
      </div>

      <div id="right">
        <h1>Serial loan</h1>

        <form>
          <label htmlFor="loanAmount">Loan amount:</label><br />
          <input type="number" name="loanAmount" id="loanAmount" value={loanAmount} onChange={handleLoanChange} /><br /><br />
          
          <label htmlFor="interestPercent">Interest:</label><br />
          <input type="number" name="interestPercent" id="interestPercent" value={interestPercent} onChange={handleInterestChange} /><br /><br />

          <label htmlFor="repaymentYears">Repayment years:</label><br />
          <input type="number" name="repaymentYears" id="repaymentYears" value={repaymentYears} onChange={handleRepaymentChange} /><br /><br />
        </form>
      </div>
    </div>
  );
}

export default App;
