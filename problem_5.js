function odd_even (value){
    if(value %2 ===0){
        let ret = "even"
        return ret
    }
    else if (value %2 !==0){
        let ret = "odd"
        return ret
    }

}
console.log(odd_even(6))