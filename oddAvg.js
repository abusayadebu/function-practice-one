// get avarage from an array numbers where only the numbers will be odd; 

function getOddAvg(numbers){
    const newArr = [];
    for(number of numbers){
        if(number % 2 !== 0){
            newArr.push(number)
        }
    }
    let sum = 0;
    for(item of newArr){
        sum = sum + item;
    }
    const lenth = newArr.length;
    const avg = sum / lenth;
    const newAvg = parseInt(avg)
    return newAvg;
}


const numbers = [20,56, 53, 23, 41, 89, 26, 72, 59, 27]

const output = getOddAvg(numbers);
console.log(output);