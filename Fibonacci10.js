/* Write a JavaScript program to generate 
a modified Fibonacci sequence where each term is the sum of the previous three terms. */

function generateModifiedFibonacciSequence(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else if (n === 3) {
        return [0, 1, 1];
    } else {
        let sequence = [0, 1, 1];

        for (var i = 3; i < n; i++) {
            let nextTerm = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
            sequence.push(nextTerm);
        }

        return sequence;
    }
}

function main() {
    let n = 11;
    let modifiedFibonacciSequence = generateModifiedFibonacciSequence(n);
    console.log(modifiedFibonacciSequence);
}
main();