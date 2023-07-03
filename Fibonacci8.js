/* Implement a JavaScript program to generate the Fibonacci sequence using recursion. */

function generateFibonacciSequence(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        let sequence = generateFibonacciSequence(n - 1);
        let length = sequence.length;
        sequence.push(sequence[length - 1] + sequence[length - 2]);
        return sequence;
    }
}

function main() {
    let n = 5;
    let fibonacciSequence = generateFibonacciSequence(n);
    console.log(fibonacciSequence);
}
main();