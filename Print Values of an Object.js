console.log("1. Function to Print All Values of a Given Object \n");

function printValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(obj[key]);
        }
    }
}

const student = { name: "John", marks: 85, age: 20 };
printValues(student);