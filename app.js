
// ------------------ ADD ------------------


// import functions and grab DOM elements
const sumInput1 = document.getElementById('sum-input-1')
const sumInput2 = document.getElementById('sum-input-2')
const sumButton = document.getElementById('sum-button')
const sumSpan = document.getElementById('sum-span')
// initialize state

// set event listeners to update state and DOM
sumButton.addEventListener('click',() => {
    // Get the values of the two inputs
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;

    // Add together the value of the two inputs
    const sum = value1 + value2;

    // Inject the sum into the sum 'span'
    sumSpan.textContent = sum;
});


// ------------------ SUBTRACT ------------------


// import functions and grab DOM elements
const differenceInput1 = document.getElementById('difference-input-1')
const differenceInput2 = document.getElementById('difference-input-2')
const differenceButton = document.getElementById('difference-button')
const differenceSpan = document.getElementById('difference-span')
// initialize state

// set event listeners to update state and DOM
differenceButton.addEventListener('click',() => {
    // Get the values of the two inputs
    const value1 = differenceInput1.valueAsNumber;
    const value2 = differenceInput2.valueAsNumber;

    // Subtract the value of the two inputs
    const difference = value1 - value2;

    // Inject the difference into the difference 'span'
    differenceSpan.textContent = difference;
});


// ------------------ MULTIPLY ------------------


// import functions and grab DOM elements
const productInput1 = document.getElementById('product-input-1')
const productInput2 = document.getElementById('product-input-2')
const productButton = document.getElementById('product-button')
const productSpan = document.getElementById('product-span')
// initialize state

// set event listeners to update state and DOM
productButton.addEventListener('click',() => {
    // Get the values of the two inputs
    const value1 = productInput1.valueAsNumber;
    const value2 = productInput2.valueAsNumber;

    // Multiply the value of the two inputs
    const product = value1 * value2;

    // Inject the product into the product 'span'
    productSpan.textContent = product;
});


// ------------------ DIVIDE ------------------


// import functions and grab DOM elements
const quotientInput1 = document.getElementById('quotient-input-1')
const quotientInput2 = document.getElementById('quotient-input-2')
const quotientButton = document.getElementById('quotient-button')
const quotientSpan = document.getElementById('quotient-span')
// initialize state

// set event listeners to update state and DOM
quotientButton.addEventListener('click',() => {
    // Get the values of the two inputs
    const value1 = quotientInput1.valueAsNumber;
    const value2 = quotientInput2.valueAsNumber;

    // Divide the value of the two inputs
    const quotient = value1 / value2;

    // Inject the quotient into the quotient 'span'
    quotientSpan.textContent = quotient;
});