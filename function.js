function doSomething(){
    console.log("fan off kor");
}

doSomething();

// -----------

function makeDouble(number){
    const duble = number * 2;
    console.log(duble)
}

makeDouble(50);

// ---------------

function doSum(number){
    const sum = number + number;
    return sum;
}

const getSum = doSum(100);
console.log(getSum);