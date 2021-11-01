
// the arrays of trip options
let cities = ["NYC", "Baltimore" , "NOLA", "Raleigh"];
let restraunt = ["pizza", "crab cakes" , "gumbo", "bbq"];
let vic = ["walkin", "train" , "vespa", "razor scooter"];
let ent= ["stand-Up Comedy", "Movies", "Downtown Bars", "Sight Seeing"];

// function that picks random element from array
function generateRandomSelection(array){
    let randomValue = Math.floor(Math.random() * array.length)
    randomValue = array[randomValue]
    return randomValue
}

// variables that hold the randomly selected element from array
let randomCities = generateRandomSelection(cities)
console.log(randomCities)
let randomRestraunt = generateRandomSelection(restraunt)
console.log(randomRestraunt)
let randomVic = generateRandomSelection (vic)
console.log(randomVic)
let randomEntertainment = generateRandomSelection(ent)
console.log(randomEntertainment)


// array to hold all 4 selections
let randomOptions = [randomCities, randomRestraunt, randomVic, randomEntertainment]


// is there a way to pass randomOptions into a re select funcion. 

const input = prompt("do you like your trip? enter yes or no")
let no = false
if (no){
    console.log (generateRandomSelection)   
}
    else{
        alert("Have a fun trip!")
    }
    



