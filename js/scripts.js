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
    const veggie = $("select#veggies").val();
    const meat = $("select#meat'").val();
    const cheese = $("select#cheese").val();
    const sauce = $("select#sauce").val();
    const size = $("select#size").val();
    let newPizza = new Pizza (veggie + meat + cheese + sauce + size);
    newPizza.pizzaCost();
    $("#result").append("<text>" + new Pizza.pizzaCost());
  })})}