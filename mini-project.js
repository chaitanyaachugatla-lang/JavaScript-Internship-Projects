
console.log("--- Initializing Inventory System ---");


const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];


const productName = prompt("Enter product name:", "Monitor");
const priceInput = prompt("Enter product price:", "150");


const productPrice = Number(priceInput);

if (
    productName === null ||
    productName.trim() === "" ||
    priceInput === null ||
    priceInput.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product details!");
} else {

    
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`
    );

    
    inventory.forEach(function(product) {
        if (product.price < 50) {
            product.category = "Budget";
        } else if (product.price < 200) {
            product.category = "Standard";
        } else {
            product.category = "Premium";
        }
    });

    
    console.log("\n--- Processing Inventory Roster (forEach) ---");

    inventory.forEach(function(product) {
        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`
        );
    });

    
    const totalValue = inventory.reduce(function(total, product) {
        return total + product.price;
    }, 0);

    
    const affordableItems = inventory.filter(function(product) {
        return product.price < 200;
    });

    
    const affordableNames = affordableItems.map(function(product) {
        return product.name;
    });

    
    const formattedReport = inventory.map(function(product) {
        return `${product.name.toUpperCase()}: $${product.price}`;
    });

    
    console.log("\n--- Financial Analytics ---");

    console.log(`Total Inventory Value: $${totalValue}`);

    console.log(
        `Filtered Affordable Items (Under $200): ${JSON.stringify(affordableNames)}`
    );

    console.log(
        `Formatted Report List: ${JSON.stringify(formattedReport)}`
    );
}
