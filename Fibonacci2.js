/*Implement a JavaScript program to generate the Fibonacci sequence up to a given maximum value. */

function generateFibonacciSequence(maxValue) {
    let fibonacciSequence = [0, 1]; // Initialize with the first two Fibonacci numbers

    while (fibonacciSequence[fibonacciSequence.length - 1] <= maxValue) {
        var nextTerm = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
        fibonacciSequence.push(nextTerm);
    }

    // Remove the last element if it exceeds the maximum value
    if (fibonacciSequence[fibonacciSequence.length - 1] > maxValue) {
        fibonacciSequence.pop();
    }

    return fibonacciSequence;
}

function main() {
    let maxValue = 20;
    let fibonacciSequence = generateFibonacciSequence(maxValue);
    console.log(fibonacciSequence);
}
main();