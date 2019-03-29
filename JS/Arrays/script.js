let list = document.querySelector('.output-ul');
let totalBox = document.querySelector('.output-p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let products = ["Underpants:6.99", "Socks:5.99",
    "T-shirt:14.99", "Trousers:31.99", "Shoes:23.99"];

for (let i = 0; i < products.length; i++) { // number 2
    // number 3
    
    let name = products[i].split(":")[0];
    let price = products[i].split(":")[1];
    // number 4
    price = Number(price);
    total += price;
    // number 5
    itemText = name + " — $" + price;

    let listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);