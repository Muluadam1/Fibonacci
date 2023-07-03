/* Write a JavaScript program to calculate the sum of the even-valued terms in
 the Fibonacci sequence up to a given maximum value. */

function calculateFibonacciEvenSum(maxValue) {
    let sum = 0;
    let fibonacciSequence = [0, 1];

    while (fibonacciSequence[fibonacciSequence.length - 1] <= maxValue) {
        let nextTerm = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
        fibonacciSequence.push(nextTerm);

        if (nextTerm % 2 === 0) {
            sum += nextTerm;
        }
    }

    return sum;
}

function main() {
    let maxValue = 4000000;
    let fibonacciEvenSum = calculateFibonacciEvenSum(maxValue);
    console.log(fibonacciEvenSum);
}
main();