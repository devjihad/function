let array = [11,25,24,36,52,35]
function make_avg(num){
    let sum = 0
    for(let number of num){
        sum = sum + number
    }
    let result = sum/num.length
    return result
        

}
console.log(make_avg(array))