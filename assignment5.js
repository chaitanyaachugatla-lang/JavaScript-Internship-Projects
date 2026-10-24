function rectangleArea(length = 5, width = 4) {
    return length * width;
}

const arrowRectangleArea = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    `Standard Function Area (Default 5x4): ${rectangleArea()}`
);

console.log(
    `Arrow Function Area (Custom 10x3): ${arrowRectangleArea(10, 3)}`
);

{
    let blockVar = "inside the block";
    console.log(`Scope inside block: ${blockVar}`);
}

try {
    console.log(blockVar);
} catch (error) {
    console.log(
        `Scope Test Error: ${error.name}: blockVar is not defined (when accessed outside block)`
    );
}