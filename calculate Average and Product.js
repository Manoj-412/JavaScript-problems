console.log("\n \n 7. Function to calculate Average and Product of numbers \n ");

function calculateAverageAndProduct(a, b) {
    let average = (a + b) / 2;
    let product = a * b;

    return { average, product };
}

console.log(calculateAverageAndProduct(4, 8)); 