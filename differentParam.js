function isEvenStr(str){
    const size = str.length;
    
    if(size % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isEvenStr("Dhaka"));
// console.log(isEvenStr("faka"));

// ------ Array



function sumOfArray(arr){
    let sum = 0;
    for(item of arr){
        sum = sum + item;
    }
    return sum;
}

const arr = [20, 50, 40, 50, 30];
const output = sumOfArray(arr);
console.log(output);