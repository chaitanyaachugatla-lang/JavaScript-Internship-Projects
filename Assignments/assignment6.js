const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");

products.forEach(function (product) {
    console.log(
        `Item: ${product.name} - Price: $${product.price}`
    );
});

console.log("-- Filtered Products (Price < $50) --");

console.log(
    products.filter(function (product) {
        return product.price < 50;
    })
);

console.log("-- Mapped Product Tags (map) --");

console.log(
    products.map(function (product) {
        return `${product.name.toUpperCase()} costs $${product.price}`;
    })
);
