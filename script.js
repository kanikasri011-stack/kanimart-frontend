// Shopping Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart count when page loads
window.onload = function () {
    let cartElement = document.getElementById("cartCount");
    if (cartElement) {
        cartElement.innerHTML = cart.length;
    }
};
// Add product to cart
function buyProduct(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    let count = document.getElementById("cartCount");
    if (count) {
        count.textContent = cart.length;
    }

    alert(product + " added to cart!");
}

// Login
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "products.html";
    } else {
        alert("Invalid Username or Password");
    }
}

// Register
function register() {
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
    } else {
        alert("Registration Successful!");
        window.location.href = "login.html";
    }
}

// Continue Shopping
function goBack() {
    window.location.href = "products.html";
}
function searchProduct() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let name = products[i].getElementsByTagName("h2")[0].innerHTML.toLowerCase();

        if (name.includes(input)) {
            products[i].style.display = "inline-block";
        } else {
            products[i].style.display = "none";
        }
    }
}
function buyNow(product) {
    alert("Thank you for buying " + product + "!");
}