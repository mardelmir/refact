import { useState } from 'react'

function Calculator() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState(0)

    return (
        <div className='calculator'>
            <h2>CALCULADORA</h2>
            <form>
                <input type='number' value={num1} onChange={(e) => setNum1(+e.target.value)} placeholder="Primer número" />
                <input type='number' value={num2} onChange={(e) => setNum2(+e.target.value)} placeholder="Segundo número" />
            </form>
            <button onClick={() => { setNum1(''); setNum2(''); setResult(0) }}><img src='./src/assets/reset.png'/></button>
            <button onClick={() => setResult(num1 + num2)}><img src='./src/assets/sumar.png'/></button>
            <button onClick={() => setResult(num1 - num2)}><img src='./src/assets/restar.png'/></button>
            <button onClick={() => setResult(num1 * num2)}><img src='./src/assets/multiplicar.png'/></button>
            <button onClick={() => num2 !== 0 ? setResult(num1 / num2) : setResult('No se puede dividir por cero')}><img src='./src/assets/dividir.png'/></button>
            <div id='result'>Resultado: {result}</div>
        </div>)
}

export default Calculator