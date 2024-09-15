// Task 1: Create Inventory Array Of Product Objects

let inventory = [
    {name: "headphones", price: 150, quantity: 8, lowstocklevel: 3},
    {name: "smartwatch", price: 250, quantity: 12, lowstocklevel: 2},
    {name: "Gaming Console", price: 500, quantity: 6, lowstocklevel: 2},
    {name: "Bluetooth Speaker", price: 100, quantity: 13, lowstocklevel: 5},
    {name: "Drone", price: 800, quantity: 3, lowstocklevel: 1}
];
// console.log(inventory);

// Task 2: Create a Function to Display Product Details

function displayProductDetails() {
    let productstatus = product.quantity > product.lowstocklevel ? "in stock" : "low stock";
    console.log("products: ", product.name);
    console.log("Price: $", product.price);
    console.log("Quantity in stock:", productquantity);
    console.log("product status:", productstatus);
}
displayProductDetails(); 

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold) {
    product.quantity -= unitsSold;
    if(product.quantity <= 0) {
     product.quantity = 0;
     console.log("product:", product.name);
     console.log("status: out of stock");
    } else if (product.quantity <= product.lowstocklevel) {
     console.log("product:", product.name);
     console.log("status: low stock");
    } else { 
     console.log("product:", product.name);
     console.log("quantity leftover:", product.quantity);
    }
}

// Task 4: Create a Function to Check low stock products

function checkLowStock(inventory) {
    inventory.foreach(function(product) {
        if(product.quantity < product.lowstocklevel) {
            console.log("low stock products:", product.name);
        }
    });
}

//Task 5: Create Function calculate total inventory value

function calculateInventoryValue(inventory) {
    return inventory.reduce(function(totalValue, prodcut) {
        return totalValue + (product.price * product.quantity);
    }, 0);
    
}