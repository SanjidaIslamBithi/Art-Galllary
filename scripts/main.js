
const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art");

const desc = document.getElementById("desc");
const price = document.getElementById("price");

const free = document.getElementById("free");
const express = document.getElementById("express");

const shippingField = document.getElementById('shipping');

const total = document.getElementById('total');

function isContain(elem) {

    //return is class present
    return elem.classList.contains('selected');
}

free.addEventListener('click', function () {
    if (!isContain(free)) {
        free.classList.add("selected");
        express.classList.remove("selected");
    }
    shippingField.innerText = "5";
    updateTotal();

});
express.addEventListener('click', function () {
    if (!isContain(express)) {
        free.classList.remove("selected");
        express.classList.add("selected");
    }
    shippingField.innerText = "30";
    updateTotal();
});


//update total
function updateTotal() {
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    console.log(total);
    total.innerText = grandTotal;
    // console.log(shippingField.innerText, price.innerText);
}
div1.addEventListener("click", function () {
    if (!isContain(div1)) {
        div1.classList.add("selected");
        div2.classList.remove("selected"); div3.classList.remove("selected");

    }
    //Changing image
    img.src = 'images/1.jpg';
    //changing description
    desc.innerText = "First-Les Demoiselles d’Avignon marks a radical break from traditional composition and perspective in painting. It depicts five naked women composed of flat, splintered planes whose faces were inspired by Iberian sculpture and African masks.";
    //changingprice
    price.innerText = "650";
    //update total
    updateTotal();


});
div2.addEventListener("click", function () {
    if (!isContain(div2)) {
        div1.classList.remove("selected");
        div2.classList.add("selected"); div3.classList.remove("selected");

    }

    img.src = 'images/2.jpg';
    desc.innerText = "Second-Les Demoiselles d’Avignon marks a radical break from traditional composition and perspective in painting. It depicts five naked women composed of flat, splintered planes whose faces were inspired by Iberian sculpture and African masks.";
    price.innerText = "550";
    //update total
    updateTotal();
});
div3.addEventListener("click", function () {
    if (!isContain(div3)) {
        div1.classList.remove("selected");
        div2.classList.remove("selected"); div3.classList.add("selected");

    }
    img.src = 'images/3.jpg';
    desc.innerText = "Third-Les Demoiselles d’Avignon marks a radical break from traditional composition and perspective in painting. It depicts five naked women composed of flat, splintered planes whose faces were inspired by Iberian sculpture and African masks.";
    price.innerText = "950";
    //update total
    updateTotal();
});