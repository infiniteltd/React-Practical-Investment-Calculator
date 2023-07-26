
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <Form onCalculation={calculateHandler} />

      {!userInput && <p style={{ textAlign: 'center', color: 'red', fontSize: '1.5rem' }}>No investment calculation yet!</p>}
      {userInput && <Table resultsData={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
