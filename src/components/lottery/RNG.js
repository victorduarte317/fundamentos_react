function generateNewNumber(min, max, array) {
    // generating a random number
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    // if the array already contains the random number generated
    return array.includes(random) ? 
    // go on and try to generate another number, otherwise
    generateNewNumber(min, max, array) :
    // return the random number generated
    random
}

function RNG(amount) { // function to generate random numbers
    const numbers = Array(amount).fill(0) // creates an array with "amount" numbers, filled with 0s
    .reduce((nums) => {
        const newNumber = generateNewNumber(1, 60, nums)
        return [...nums, newNumber]
    }, [])
    .sort((n1, n2) => n1-n2) // sorting

    // using reduce to generate new numbers and pushing them into the array,
    // spreading nums will make that the previously generated number maintain its position
    // while a newNumber is generated, placed in the position right after the previous one.

}


