// Import functions and grab DOM elements
import { addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers} from './mathUtils.js';

// ------------------ ADD ------------------

const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumSpan = document.getElementById('sum-span');

// define "what happens" on click
// no parameters? Therefore it cannot be a PURE function.
// IMPURE FUNCTIONS are suuuuper hard to test

export function handleSumClick() {
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    // - Add together the VALUE of the two inputs
    // function call
    // we have the blueprint, so this is the building:
    // we pass in the ingredients, and the function 'runs', as defined in the declaration   

    const sum = addTwoNumbers(value1, value2);
    // - Inject the sum into our sum `span`
    sumSpan.textContent = sum;
}

// ------------------ SUBTRACT ------------------

const differenceInput1 = document.getElementById('difference-input-1');
const differenceInput2 = document.getElementById('difference-input-2');
const differenceSpan = document.getElementById('difference-span');

export function handleDifferenceClick() {
    const value1 = differenceInput1.valueAsNumber;
    const value2 = differenceInput2.valueAsNumber;

    const difference = subtractTwoNumbers(value1, value2);

    differenceSpan.textContent = difference;
}

// ------------------ MULTIPLY ------------------

const productInput1 = document.getElementById('product-input-1');
const productInput2 = document.getElementById('product-input-2');
const productSpan = document.getElementById('product-span');

export function handleProductClick() {
    const value1 = productInput1.valueAsNumber;
    const value2 = productInput2.valueAsNumber;

    const product = multiplyTwoNumbers(value1, value2);

    productSpan.textContent = product;
}

// ------------------ DIVIDE ------------------

const quotientInput1 = document.getElementById('quotient-input-1');
const quotientInput2 = document.getElementById('quotient-input-2');
const quotientSpan = document.getElementById('quotient-span');

export function handleQuotientClick() {
    const value1 = quotientInput1.valueAsNumber;
    const value2 = quotientInput2.valueAsNumber;

    const quotient = divideTwoNumbers(value1, value2);

    quotientSpan.textContent = quotient;
}