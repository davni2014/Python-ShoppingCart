$(document).ready(function() {

/* Set rates + misc */
var taxRate = 0.06;
var fadeTime = 150;


/* Assign actions */
$('.product-quantity input').change( function() {

  //Clear storage every time there is a new quantity update
  localStorage.clear();
  updateQuantity(this);
});


/* Recalculate cart */
function recalculateCart()
{

  var subtotal = 0;

  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var total = subtotal + tax;

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-total').html(total.toFixed(2));

    //stores values into local storage
    localStorage.setItem('subtotal',subtotal.toFixed(2));
    localStorage.setItem('tax',tax.toFixed(2));
    localStorage.setItem('total',total.toFixed(2));

    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
 }




/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalculates cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}
});

//redirects to checkout.html
function checkout_btn() {
      window.location.href = "checkout.html";
    }



/*
 localStorage.clear();
 localStorage.setItem('subtotal',subtotal.toFixed(2));
 localStorage.setItem('tax',tax.toFixed(2));
 localStorage.setItem('total',total.toFixed(2));
*/




