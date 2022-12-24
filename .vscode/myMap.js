var car = [
  "BMW",
  "Audi",
  "Honda"
]

// var rs = car.map((arr) => {
//   return arr
// })

Array.prototype.myMap = function(callback){
  var arrLength = this.length
  var output = []
  for(var i = 0; i < arrLength; i++){
    var result = callback(this[i], i)
    output.push(result)
  } return output
}

var result = car.myMap(function(arr, index){
  return `<h1>${arr}</h1>`
})

console.log(result.join(''))