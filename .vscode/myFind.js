var car = [
    "BMW",
    "Audi",
    "Honda",
    "BMW",
    "BMW",
]

Array.prototype.myFind = function(callback){
    var arrLength = this.length
    for(var i = 0; i < arrLength; i++){
        if(callback(this[i], i, this)) 
        return this[i]
    } 
}

var result2 = car.myFind((arr) => {
    return arr === "BMW"
})

// var result = car.find((arr) => {
//     return arr === "Audi"
// })

console.log(result2)