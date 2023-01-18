"use strict";

let cart = "";

function addItem( itemName ) {
    console.log( itemName );
    cart += " " + itemName;
    const cartElement = document.getElementById( 'cart' );
    cartElement.innerHTML = cart;
}

function emptyCart() {
    cart = "";
    const cartElement = document.getElementById( 'cart' );
    cartElement.innerHTML = cart;
}
