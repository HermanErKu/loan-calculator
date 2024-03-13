import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'; 

function App() {
  const [loanAmount, setLoanAmount] = useState(1200000);
  const handleLoanChange = (event:any) => {
    setLoanAmount(event.target.value);    
  }

  const [interestPercent, setInterestPercent] = useState(5.5);
  const handleInterestChange = (event:any) => {
    setInterestPercent(event.target.value);
  }

  const [repaymentYears, setRepaymentYears] = useState(25);
  const handleRepaymentChange = (event:any) => {
    setRepaymentYears(event.target.value);
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
