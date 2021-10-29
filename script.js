function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

let items = ["NYC", "Baltimore" , "NOLA", "Raleigh"];
console.log(random_item(items));