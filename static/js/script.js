// Select Main Tag
const main = document.querySelector('main')

let productCards = null; // productCards Container 
let cartBtns = null; // cartBtns (available in productCards) Container 
let productNames = null; // productNames (available in productCards)  Container 
let imgTags = null; // imgTags (available in productCards) Container 

let selectedProductsId = []

// requesting products from server for listing
requestProducts()
