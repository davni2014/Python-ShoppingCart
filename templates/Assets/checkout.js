$(document).ready(function(){

document.getElementById("cart-subtotal").innerHTML =  localStorage.getItem("subtotal");
document.getElementById("cart-tax").innerHTML =   localStorage.getItem("tax");
document.getElementById("cart-total").innerHTML =  localStorage.getItem("total");

});


//redirects to confirmation.html
function checkout_btn(){
window.location.href = "confirmation.html";
}




