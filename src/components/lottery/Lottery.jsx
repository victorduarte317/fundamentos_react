import './_css/Lottery.css'
import React, {useState} from 'react'

export default props => {
    
    function generateNewNumber(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ? 
        generateNewNumber(min, max, array) :
        random
    }
    
    function RNG(amount) { 
        const numbers = Array(amount).fill(0) 
        .reduce((nums) => {
            const newNumber = generateNewNumber(1, 60, nums)
            return [...nums, newNumber]
        }, [])
        .sort((n1, n2) => n1-n2) 

        return numbers
    }

    const [amount, setAmount] = useState(props.qtde || 6)
    const initNumbers = RNG(amount)
    const [numbers, setNumbers] = useState(initNumbers)
    
    return(
        <div className='Lottery'>
            <h2>Lottery</h2>
            <h3>{numbers.join (' ')}</h3>
            <div>
                <label>How many numbers?</label>
                <input 
                    min="6"
                    max="15"
                    type="number" 
                    value={amount}
                    onChange={e => {
                    setAmount(+e.target.value)
                    setNumbers(RNG(+e.target.value))
                }} />
            </div>
            <button onClick={_ => setNumbers(RNG(amount))}>
                Generate Numbers
            </button>
        </div>
    )
    
}