var food=[
    'milk','beer','beer','milk','milk'
]
var badfood=[
    'beer'
]
for(var i=0; i<food.length; i++){
   if (badfood.includes(food[i].toLowerCase())) {
    console.warn(`${food[i]} bad`)
    continue
   }
   console.log(`${food[i]} good `)
}