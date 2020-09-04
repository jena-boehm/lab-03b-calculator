// Import functions
import { handleSumClick, handleDifferenceClick, handleProductClick, handleQuotientClick } from './handlers.js';

const sumButton = document.getElementById('sum-button');
const differenceButton = document.getElementById('difference-button');
const productButton = document.getElementById('product-button');
const quotientButton = document.getElementById('quotient-button');

sumButton.addEventListener('click', handleSumClick);
differenceButton.addEventListener('click', handleDifferenceClick);
productButton.addEventListener('click', handleProductClick);
quotientButton.addEventListener('click', handleQuotientClick);