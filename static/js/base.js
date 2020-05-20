"use strict";

// appends the table data to the #cart-items id element 
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// resests the cart by returning th etotal to zero and removing all items under cart 
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// increments the cart total by the price that is passed
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// pulls from whatever number is at the coffee sold counter, then 
// adds amountSold to taht number, then replaces the pulled number w the new number 
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

// controls the order status bar at the bottom of the page 
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);  
});

$('#place-order').on('click', () => {
  // pass the number of coffees in the #cart-items table to incrementCoffeeSold
  incrementCoffeeSold($('#cart-items').children().length);
  setProgressAndStatus(50, 'hey');
  setProgressAndStatus(75, 'almost done!')
  resetCart();

});