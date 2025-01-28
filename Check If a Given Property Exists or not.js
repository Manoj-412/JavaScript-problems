console.log("\n \n 4. Function to Check If a Given Property Exists in an Object \n");

function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}

const studentMarks = { math: 90, science: 80, name: "John" };

console.log(hasProperty(studentMarks, 'math'));
console.log(hasProperty(studentMarks, 'history'));

