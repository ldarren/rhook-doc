import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ increment }) => {
  console.log('ChildComponent rendered');
  return (
    <div>
      <button onClick={increment}>Increment Profit</button>
    </div>
  );
})

const AnotherChildComponent = React.memo(({ increment }) => {
  console.log('AnotherChildComponent rendered');
  return (
    <div>
      <button onClick={increment}>Increment Cost</button>
    </div>
  );
})

function ParentComponent() {
  const [profit, setProfit] = useState(100);
  const [cost, setCost] = useState(0);

  const incrementProfit = useCallback(() => {
    setProfit(p => p + 1)
  }, [profit]);

  const incrementCost = useCallback(() => {
    setCost(c => c + 1)
  }, [cost]);

  return (
    <div>
      <p>Profit: {profit}</p>
      <ChildComponent increment={incrementProfit} />
      <p>Cost: {cost}</p>
      <AnotherChildComponent increment={incrementCost} />
    </div>
  );
}

<ParentComponent/>
