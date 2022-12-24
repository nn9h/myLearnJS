var nums = [1, 2, 3, 10, 15]

Array.prototype.mySome = function(callback){
    var output = false
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(callback(this[i], i, this)){
            output = true
            }
        }
    } return output
}

console.log(nums.mySome((num) => {
    return num > 3
}))