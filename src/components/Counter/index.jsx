import { useState } from 'react';

import './style.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    // let counter = 0;
    console.log('fui criado');

    function addNumber() {
        console.log('Teste +');
        setCounter(counter + 1);
    }

    function subNumber() {
        console.log('Teste -');
        setCounter(counter - 1);
    }

    return (
        <div className="container">
            <p>{counter}</p>
            <div>
                <button type='button' onClick={addNumber}>+</button>
                <button type='button'  onClick={subNumber}>-</button>
            </div>
        </div>
    )
}

export default Counter;