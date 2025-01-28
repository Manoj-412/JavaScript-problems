console.log(" 2. Function to Return Sum of All Integer Values in an Object \n");


function sumOfIntegers(obj) {
    let sum = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

const studentMarks = { math: 90, science: 80, name: "John" };
console.log(sumOfIntegers(studentMarks));
