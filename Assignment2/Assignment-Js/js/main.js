// Define ingredient prices
const fruitPrices = {
    banana: 1.50,
    strawberry: 2.00,
    blueberry: 2.50,
    mango: 3.00
};

const liquidPrices = {
    milk: 1.00,
    'coconut water': 1.50,
    'orange juice': 2.00,
    'almond milk': 2.00
};

const proteinPrices = {
    whey: 3.00,
    'plant-based': 3.50,
    'greek yogurt': 2.50
};

// Function to dynamically populate select options
function populateOptions(selectElement, options) {
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            const option = document.createElement('option');
            option.value = key;
            option.text = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize first letter
            option.setAttribute('data-price', options[key]);
            selectElement.appendChild(option);
        }
    }
}

// Populate select options
const fruitSelect = document.getElementById('fruit');
populateOptions(fruitSelect, fruitPrices);

const liquidSelect = document.getElementById('liquid');
populateOptions(liquidSelect, liquidPrices);

const proteinSelect = document.getElementById('protein');
populateOptions(proteinSelect, proteinPrices);

class Smoothie {
    constructor(fruit, liquid, protein) {
        this.fruit = fruit;
        this.liquid = liquid;
        this.protein = protein;
    }

    getDescription() {
        return `You ordered a ${this.fruit} smoothie with ${this.liquid} and ${this.protein}.`;
    }

    getPrice() {
        // Calculate total price
        const totalPrice = fruitPrices[this.fruit] + liquidPrices[this.liquid] + proteinPrices[this.protein];
        return totalPrice.toFixed(2);
    }
}

function submitOrder() {
    const fruit = document.getElementById('fruit').value;
    const liquid = document.getElementById('liquid').value;
    const protein = document.getElementById('protein').value;

    const smoothie = new Smoothie(fruit, liquid, protein);
    const description = smoothie.getDescription();
    const price = smoothie.getPrice();

    const outputDiv = document.getElementById('smoothieOutput');
    outputDiv.innerHTML = `
        <p>${description}</p>
        <p>Total Price: $${price}</p>
        <img src="https://png.pngtree.com/png-vector/20230325/ourmid/pngtree-summer-orange-smoothie-png-image_6667736.png" alt="Smoothie" style="max-width: 100%; height: auto;">
    `;
}
