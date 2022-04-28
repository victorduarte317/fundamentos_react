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
}