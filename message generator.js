//function to generate random number

function generateRandomNumber (){
    return Math.floor(Math.random() * 3)
}

//create a list of favorite boxers
const boxers = ["Ali", "Wilder", "Roy Jones Jnr"]

//create a list with the boxers and their famous words
const boxersPhrase = ["I fly like a butterfly, sting like a bee", "Bomb Squad", "Y'all must have forgot"]

//create a list with boxers and thier DOB
const boxersDOB = [ "January 17, 1942", "October 22, 1985", "January 16, 1969"]

//create function to generate message
function messageGenerator (){
    num = generateRandomNumber();
    console.log(`Boxer: ${boxers[num]} \nDOB: ${boxersDOB[num]} \nFavorite phrase: ${boxersPhrase[num]} `)
}
messageGenerator()