function number (num){
    if(num %2 !==0){
        let odd = num*2
        return odd;
    }

    else if(num %2===0){
        let even = num / 2
        return even;
    }
    
}
console.log(number(50))