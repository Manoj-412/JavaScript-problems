console.log("3. Function to Print Only Keys of a Given Object \n");

function printKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

const studentMarks = { math: 90, science: 80, name: "John" };
printKeys(studentMarks);