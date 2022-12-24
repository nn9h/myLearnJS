var car = [
    "BMW",
    "Audi",
    "Honda"
]

Array.prototype.myForEach = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i))
        callback(this[i], i, this)
    }
}


var result2 = car.myForEach((arr, index) => {
    console.log(index, arr)
})

// var result = car.forEach((arr, index, thisArr) => {
//     console.log(index, arr, thisArr)
// })
