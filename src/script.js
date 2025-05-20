let shoppingCart = [];

const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const cartList= document.getElementById("cartList");

function putInChart(){
    const productName = productInput.value
    const productPrice = Number(priceInput.value)

    const newProduct = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1,
    }

    let foundItem = false

    for(const product of shoppingCart){
        if(product.productName === productName){
            product.quantity++
            foundItem = true
        }
    }

    if(!foundItem){
        shoppingCart.push(newProduct)
    }

    productInput.value =""
    priceInput.value=""

    renderCart()
}

function renderCart(){

    cartList.innerHTML="";
    
    for(const product of shoppingCart){
        const li = document.createElement("li")
        li.textContent = `${product.productName} - ${product.productPrice}kr (x${product.quantity})`
        cartList.appendChild(li);
}
}

addButton.addEventListener("click", () =>{
    putInChart();
});




