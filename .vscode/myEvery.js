var nums = [1, 2, 3, 10, 15]

Array.prototype.myEvery = function(callback){
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(!callback(this[i], i, this)){
                return false
            }
        }
    } return true
}

console.log(nums.myEvery((num, index, arr) => {
    console.log(num, index, arr)
}))