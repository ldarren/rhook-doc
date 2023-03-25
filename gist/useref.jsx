import React, {useRef, useState} from 'react'

const Test = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	function handleClick() {
		setCount(count + 1);
		countRef.current += 1;
		console.log(`Count: ${count}, Count ref: ${countRef.current}`);
	}

	return (
		<div className="App">
			<p>Ref: {count}</p>
			<button onClick={handleClick}>Increment count</button>
		</div>
	);
}
<Test/>

