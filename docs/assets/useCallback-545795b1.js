const n=`import React, { useState, useCallback } from 'react';
/**
 * Open browser console to see how many childcomponent rerender with and without useCallback
 */

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

  // ** remove the useCallback to see the difference **
  const incrementProfit = useCallback(() => {
    setProfit(p => p + 1)
  }, [profit]);

  // ** remove the useCallback to see the difference **
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
`;export{n as default};
