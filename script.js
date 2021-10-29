
// the arrays of trip options
let cities = ["NYC", "Baltimore" , "NOLA", "Raleigh"];
let restraunt = ["pizza", "crab cakes" , "gumbo", "bbq"];
let vic = ["walkin", "train" , "vespa", "razor scooter"];
let entertainment = [];

// function that picks random element from array
function generateRandomSelection(array){
    let randomValue = Math.floor(Math.random() * array.length)
    randomValue = array[randomValue]
    return randomValue
}

// variables that hold the randomly selected element from array
let randomCities = generateRandomSelection(cities)
console.log(randomCities)


// array to hold all 4 selections
let randomOptions = [randomCities, randomRestraunt]


// is there a way to pass randomOptions into a re select funcion. 