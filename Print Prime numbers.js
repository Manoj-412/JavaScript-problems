console.log("\n \n 6. Function to print Prime numbers \n");

function printPrimes(length) {
    let primes = [];
    let num = 2;

    while (primes.length < length) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    console.log(primes);
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

printPrimes(5); 