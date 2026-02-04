function isEven (number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// console.log(isEven(50));

// ---- 

function priceCondition(applePrice, beefPrcie){
    if(applePrice >= beefPrcie){
        return ("apple khamuna")
    }
    else{
        return ("cholo apple khai, biriyanir cheye apple valo")
    }
}

const output5 = priceCondition(500, 300);
console.log(output5);