import { useState } from 'react'

function Calculator() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState(0)

    return (
        <div className='calculator'>
            <h2>CALCULATOR</h2>
            <form>
                <input type='number' value={num1} onChange={(e) => setNum1(+e.target.value)} placeholder="Insert First Number" />
                <input type='number' value={num2} onChange={(e) => setNum2(+e.target.value)} placeholder="Insert Second Number"/>
            </form>
            <button onClick={() => setResult(num1 + num2)}>Sumar</button>
            <button onClick={() => setResult(num1 - num2)}>Restar</button>
            <button onClick={() => setResult(num1 * num2)}>Multiplicar</button>
            <button onClick={() => setResult(num1 / num2)}>Dividir</button>
            <div id='result'>Resultado: {result}</div>
        </div>)
}

export default Calculator