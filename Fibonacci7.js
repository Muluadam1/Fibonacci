/* Write a JavaScript function to check if a given number is a Fibonacci number. */

function isFibonacciNumber(number) {
    if (number < 0) {
        return false;
    }

    let prevTerm = 0;
    let currentTerm = 1;

    while (currentTerm < number) {
        let nextTerm = prevTerm + currentTerm;
        prevTerm = currentTerm;
        currentTerm = nextTerm;
    }

    return currentTerm === number;
}

function main() {
    let number = 34;
    let isFibonacci = isFibonacciNumber(number);
    console.log(isFibonacci);
}
main();