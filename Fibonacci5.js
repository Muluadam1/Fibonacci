/*Implement a JavaScript function to find the nth term of the Fibonacci sequence.*/

function findNthFibonacciTerm(n) {
    if (n <= 0) {
        return "Invalid input. Please enter a positive integer.";
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    var prevTerm = 1;
    var currentTerm = 1;

    for (var i = 3; i <= n; i++) {
        let nextTerm = prevTerm + currentTerm;
        prevTerm = currentTerm;
        currentTerm = nextTerm;
    }

    return currentTerm;
}

function main() {
    let n = 9;
    let nthTerm = findNthFibonacciTerm(n);
    console.log(nthTerm);
}
main();