console.log("--- Initializing Inventory System ---");

// 1. DATA & INPUT INITIALIZATION

const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

const productNameInput = prompt(
    "Enter new product name:",
    "Monitor"
);

const productPriceInput = prompt(
    "Enter product price:",
    "150"
);

const productName =
    productNameInput === null ? "" : productNameInput.trim();

const productPrice =
    productPriceInput === null ||
    productPriceInput.trim() === ""
        ? NaN
        : Number(productPriceInput);


// 2. CONTROL FLOW & INPUT VALIDATION

if (
    productName === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product details!");
    console.log("Please enter a valid name and positive price.");
} else {

    inventory.push({
        name: productName,
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );


    // 3. CATEGORY ASSIGNMENT USING IF...ELSE & SWITCH

    function getCategory(price) {
        let priceLevel;

        if (price < 50) {
            priceLevel = 1;
        } else if (price < 200) {
            priceLevel = 2;
        } else {
            priceLevel = 3;
        }

        switch (priceLevel) {
            case 1:
                return "Budget";

            case 2:
                return "Standard";

            case 3:
                return "Premium";

            default:
                return "Unknown";
        }
    }

    inventory.forEach(function(product) {
        product.category = getCategory(product.price);
    });


    // 4. LOOPS WITH BREAK & CONTINUE

    // Search for the newly added product.
    let foundProduct = null;

    for (let i = 0; i < inventory.length; i++) {

        // Skip invalid inventory entries.
        if (
            !inventory[i].name ||
            !Number.isFinite(inventory[i].price) ||
            inventory[i].price <= 0
        ) {
            continue;
        }

        // Stop searching when the new product is found.
        if (inventory[i] === inventory[inventory.length - 1]) {
            foundProduct = inventory[i];
            break;
        }
    }

    if (foundProduct === null) {
        console.log("Product could not be found.");
    }


    // 5. INVENTORY ROSTER USING forEach()

    console.log(
        "\n--- Processing Inventory Roster (forEach) ---"
    );

    inventory.forEach(function(product) {
        console.log(
            `* Item: ${product.name} ($${product.price}) -> Category: ${product.category}`
        );
    });


    // 6. REGULAR FUNCTION FOR TOTAL INVENTORY VALUE

    function calculateTotal(items) {
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            if (
                !Number.isFinite(items[i].price) ||
                items[i].price <= 0
            ) {
                continue;
            }

            total += items[i].price;
        }

        return total;
    }

    const totalValue = calculateTotal(inventory);


    // 7. ARROW FUNCTION WITH CUSTOM TAX/DISCOUNT

    const calculateFinalValue = (
        amount,
        taxRate = 0.05,
        discountRate = 0
    ) => {
        const discount = amount * discountRate;
        const discountedAmount = amount - discount;
        const tax = discountedAmount * taxRate;

        return discountedAmount + tax;
    };

    // Demonstrate the function with 5% tax.
    const finalValue = calculateFinalValue(totalValue);


    // 8. FILTER AFFORDABLE PRODUCTS

    const affordableItems = inventory.filter(function(product) {
        return product.price < 200;
    });

    const affordableNames = affordableItems.map(function(product) {
        return product.name;
    });


    // 9. TRANSFORM PRODUCTS USING map()

    const formattedReport = inventory.map(function(product) {
        return `${product.name.toUpperCase()}: $${product.price}`;
    });


    // 10. FINANCIAL ANALYTICS OUTPUT

    console.log("\n--- Financial Analytics ---");

    console.log(
        `Total Inventory Value: $${totalValue}`
    );

    console.log(
        `Filtered Affordable Items (Under $200): ${JSON.stringify(affordableNames)}`
    );

    console.log(
        `Formatted Report List: ${JSON.stringify(formattedReport)}`
    );

    
}
