var car = [
    "BMW",
    "Audi",
    "Honda",
    "BMW",
    "BMW",
]

Array.prototype.myFilter = function(callback){
    var arrLength = this.length, output = []
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(callback(this[i], i, this)){
            var result = this[i]
            output.push(result)
            }
        }
    } return output
}

console.log(car.myFilter(function(arr){
    return arr === "BMW"
}))

// some, every