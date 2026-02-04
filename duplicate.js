
function isUnique(arr){
    const uniqueArr = [];
        for(item of arr){
            if(uniqueArr.includes(item) === false){
                uniqueArr.push(item)
            }
        }
        return uniqueArr;
}



const numbers = [20,56, 56, 23, 41, 89, 26, 26, 59, 27]

const output = isUnique(numbers);
console.log(output);