// IMPORT MODULES under test here:
import { addTwoNumbers, subtractTwoNumbers, multiplyTwoNumbers, divideTwoNumbers } from '../mathUtils.js';

const test = QUnit.test;

test('addTwoNumbers should return 7 if passed 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const firstNumber = 3;
    const secondNumber = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtractTwoNumbers should return 1 if passed 4 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    const firstNumber = 4;
    const secondNumber = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtractTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiplyTwoNumbers should return 12 if passed 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;
    const firstNumber = 3;
    const secondNumber = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiplyTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divideTwoNumbers should return 2 if passed 8 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    const firstNumber = 8;
    const secondNumber = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divideTwoNumbers(firstNumber, secondNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});