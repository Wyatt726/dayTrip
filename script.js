
// the arrays of trip options
let cities = ["NYC", "Baltimore" , "NOLA", "Raleigh", "Dallas", "Tulsa", "Oklahoma City", "Salt Lake City"];
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



let string = ("you will be in " + randomCities + " eating " + randomRestraunt + ", you will get there by " + randomVic + " and enjoy " +randomEntertainment);
alert(string)
newOptions()
function newOptions(){
input = prompt("do you like your trip? enter yes to confirm trip,  press 1 for new destination, press 2 for new resturaunt, press 3 for new transportation, press 4 for new entertainment. ")
if (input === "1"){
    randomCities = generateRandomSelection(cities)
    let randomOptions = [randomCities, randomRestraunt, randomVic, randomEntertainment]
    console.log(randomOptions[0])
    alert("your destination will now be " + randomOptions[0]) 
    let string = ("you will be in " + randomCities + " eating " + randomRestraunt + ", you will get there by " + randomVic + " and enjoy " +randomEntertainment);
    alert(string)
    newOptions(randomOptions)
}
else if(input === "2"){
    randomRestraunt = generateRandomSelection(restraunt)
    let randomOptions = [randomCities, randomRestraunt, randomVic, randomEntertainment]
    console.log(randomOptions[1])
    alert("your will now be eating " + randomOptions[1]) 
    let string = ("you will be in " + randomCities + " eating " + randomRestraunt + ", you will get there by " + randomVic + " and enjoy " +randomEntertainment);
    alert(string)
    newOptions(randomOptions)
}
else if(input === "3"){
    randomVic = generateRandomSelection(vic)
    let randomOptions = [randomCities, randomRestraunt, randomVic, randomEntertainment]
    console.log(randomOptions[2])
    alert("your will now get there by " + randomOptions[2]) 
    let string = ("you will be in " + randomCities + " eating " + randomRestraunt + ", you will get there by " + randomVic + " and enjoy " +randomEntertainment);
    alert(string)
    newOptions(randomOptions)
}
else if(input === "4"){
    randomEntertainment = generateRandomSelection(ent)
    let randomOptions = [randomCities, randomRestraunt, randomVic, randomEntertainment]
    console.log(randomOptions[3])
    alert("your entertainment is now " + randomOptions[3]) 
    let string = ("you will be in " + randomCities + " eating " + randomRestraunt + ", you will get there by " + randomVic + " and enjoy " +randomEntertainment);
    alert(string)
    newOptions(randomOptions)
}
else if(input === "yes"){
        alert("This is your confirmed Trip! you will be in " + randomCities + " eating " + randomRestraunt + ", you will get there by " + randomVic + " and enjoy " + randomEntertainment);
    }
}
    


