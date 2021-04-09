function Pizza(veggie, meat, cheese, sauce, size) {
  this.veggie = veggie;
  this.meat = meat;
  this.cheese = cheese;
  this.sauce = sauce;
  this.size = size;
  this.pizzaPrice = 0;
  this.amount = amount;
}

Pizza.prototype.pizzaCost = function () {
  if (this.size === "small") {
    this.pizzaPrice === 10.00
  } else if (this.size == "Medium") {
    this.pizzaPrice == 12.00
  } else if (this.size == "Large") {
    this.pizzaPrice === 13.00
  } else if (this.size === "Mega") {
    this.pizzaPrice === 14.50
}


//UI//

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const veggie = $("#veggies").val();
    const meat = $('#meat').val();
    const cheese = $('#cheese').val();
    const sauce = $('#sauce').val();
    const size = $('#size').val();
    $("#result").append("Your total is $" + new Pizza.priceCalculator());
  })})}