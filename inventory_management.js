// Task 1 Create Inventory Array Of Product Objects

let inventory = [
    {name: "headphones", price: 150, quantity: 8, lowstocklevel: 3},
    {name: "smartwatch", price: 250, quantity: 12, lowstocklevel: 2},
    {name: "Gaming Console", price: 500, quantity: 6, lowstocklevel: 2},
    {name: "Bluetooth Speaker", price: 100, quantity: 13, lowstocklevel: 5},
    {name: "Drone", price: 800, quantity: 3, lowstocklevel: 1}
];
// console.log(inventory);

// Task 2 Create a Function to Display Product Details

function displayProductDetails() {
    let productstatus = product.quantity > product.lowstocklevel ? "in stock" : "low stock";
    console.log("products: ", product.name);
    console.log("Price: $", product.price);
    console.log("Quantity in stock:", productquantity);
    console.log("product status:", productstatus);
}
displayProductDetails(); 


