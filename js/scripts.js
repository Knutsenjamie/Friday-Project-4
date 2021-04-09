function Pizza(veggie, meat, cheese, sauce, size) {
  this.veggie = veggie;
  this.meat = meat;
  this.cheese = cheese;
  this.sauce = sauce;
  this.size = size;
  this.priceCalculator = priceCalculator;
}

let pizzaSelection = new Pizza (veggie.value, meat.value, cheese.value, sauce.value, size.value)

// //UI//

// $(document).ready(function () {
//   $("#formOne").submit(function (event) {
//     event.preventDefault();
//     const veggies = $("#veggies").val();
//     const meat = $('#meat').val();
//     const cheese = $('#cheese').val();
//     const sauce = $('#sauce').val();
//     const size = $('#size').val();
//   })})