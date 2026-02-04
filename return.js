function tenTimes(number){
        const result = number * 10;
        return result;
}

const output = tenTimes(50);
// console.log(output);

// --------------
function cutHalf(number){
        const result2 = number / 2;
        return result2;
}

const output2 = cutHalf(100);
// console.log(output2);


// -------
function bill(price1, price2){
        return price1 + price2;
}

const output3 = bill(50, 70);
// console.log(output3);
// --------



function doMath(number1, number2){
        const add = number1 + number2;
        const sub = number1 - number2;
        const mult = add * sub;
        const divide = mult / sub;
        const result = divide /2;
        return result;
}

const output4 = doMath(50, 30);
console.log(output4);