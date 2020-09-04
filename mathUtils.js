// function declaration
// declaring is where you tell the function "How to run", given some input.
// declaring is like the blueprint
// THIS IS A PURE FUNCTION: the same input returns the same output every time.
export function addTwoNumbers (someNumber, someOtherNumber) {
    // scope: what variables does this line have access to?
    return someNumber + someOtherNumber;
}

export function subtractTwoNumbers(somethingToSubtract, somethingElseToSubtract) {
    return somethingToSubtract - somethingElseToSubtract;
}

export function multiplyTwoNumbers(somethingToMultiply, somethingElseToMultiply) {
    return somethingToMultiply * somethingElseToMultiply;
}

export function divideTwoNumbers(somethingToDivide, somethingElseToDivide) {
    return somethingToDivide / somethingElseToDivide;
}
