/* Create a JavaScript program to find the 
index of the first Fibonacci number that has a certain number of digits. */

function findIndexFibonacciDigits(numDigits) {
    if (numDigits <= 0) {
        return "Invalid input. Please enter a positive integer.";
    }

    let fibonacciSequence = [0, 1];
    let currentIndex = 2;

    while (true) {
        let nextTerm = fibonacciSequence[currentIndex - 1] + fibonacciSequence[currentIndex - 2];
        fibonacciSequence.push(nextTerm);

        if (nextTerm.toString().length >= numDigits) {
            return currentIndex;
        }

        currentIndex++;
    }
}

function main() {
    let numDigits = 3;
    let fibonacciIndex = findIndexFibonacciDigits(numDigits);
    console.log(fibonacciIndex);
}
main();