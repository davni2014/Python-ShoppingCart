
//redirects to cart.html
function BackToCart_btn(){
// Remove all saved data from sessionStorage
localStorage.clear();
window.location.href = "cart.html";
}