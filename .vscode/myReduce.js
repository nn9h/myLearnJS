var num = [1, 2, 3, 4, 5]

Array.prototype.myReduce = function(callback, initial){
    var arrLength = this.length
    var i = 0
    if(arguments.length < 2){
        i = 1
        initial = this[0]
    }
    for(; i < arrLength; i++){
        var initial = callback(initial, this[i], i, this)
    } return initial
}

var result = num.myReduce((accumulator, currentvalue) => {
    return accumulator += currentvalue
}, 0)

console.log(result)