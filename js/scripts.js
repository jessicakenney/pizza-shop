//-------------------BACK END----------------------------

var small = new PizzaSize(small,8.00);
var medium = new PizzaSize(medium,12.00);
var large = new PizzaSize(large,18.00);

var mozz = new Topping(mozz,2.25);
var goat = new Topping(goat,2.00);
var asiago = new Topping(asiago,2.75);

var basil = new Topping(basil,0.75);
var tomato = new Topping(tomato,1.25);
var arugula = new Topping(arugula,0.50);

var pepperoni = new Topping(pepperoni,2.50);
var bacon = new Topping(bacon,2.00);
var pancetta = new Topping(pancetta,2.75);

function PizzaSize (type,cost){
  this.type = type;
  this.cost = cost;
}
function Topping (type,cost){
  this.type = type;
  this.cost = cost;
}
function getSizeCost (size){
  if (size === "small"){
    return small.cost.toFixed(2);
  } else if (size ===  "medium"){
    return medium.cost.toFixed(2);
  } else {
    return large.cost.toFixed(2);
  }
}
function getTotalToppingCosts(toppings){
  var totalToppingCosts = 0;
  toppingCosts = toppings.map(function(topping){
    switch (topping) {
      case "mozz":
        cost = mozz.cost;
        break;
      case "goat":
        cost = goat.cost;
        break;
      case "asiago":
        cost = asiago.cost;
        break;
      case "basil":
        cost = basil.cost;
        break;
      case "tomato":
        cost = tomato.cost;
        break;
      case "arugula":
        cost = arugula.cost;
        break;
      case "pepperoni":
        cost = pepperoni.cost;
        break;
      case "bacon":
        cost = bacon.cost;
        break;
      case "pancetta":
        cost = pancetta.cost;
        break;
    }
    return cost;
  });
  toppingCosts.forEach(function(cost){
    totalToppingCosts += cost;
  });
  return totalToppingCosts.toFixed(2);
}
function Pizza (name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.delivery = 0;
  this.address = [];
}
Pizza.prototype.getPizzaCost = function(){
  return (parseFloat(getSizeCost(this.size)) + parseFloat(getTotalToppingCosts(this.toppings))).toFixed(2);
};

//-------------------FRONT END----------------------------
var pizzaNum = 0;
var orderTotal = 0.00;
$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();

    // Retrieve user input
    var inputToppings = [];
    var inputSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      inputToppings.push($(this).val());
    });

    // When you submit an order a new Pizza is made and cost added orderTotal
    pizzaNum += 1;
    var newPizza = new Pizza ("pizza"+pizzaNum, inputSize, inputToppings);
    orderTotal += parseFloat(newPizza.getPizzaCost());

    // In Order Summary show list of pizzas and order total
    $(".order-summary").show();
    $("ul#pizzas").append("<li><span class='pizza'>" + newPizza.name + "</span></li>");
    $("#order-total-cost").text(" $"+orderTotal.toFixed(2));

    // Click on the 'pizzaN' for the order details
    $(".pizza").last().click(function() {
      $("#show-pizza").show();
      $("#show-pizza h4").text(newPizza.name);
      $("#size").text(inputSize+"...");
      $("#toppings").text(inputToppings+"...");
      $("#size-cost").text(" $"+getSizeCost(inputSize));
      $("#toppings-cost").text(" $"+getTotalToppingCosts(inputToppings));
      $("#pizza-total-cost").text(" $"+newPizza.getPizzaCost());
    });
  });
});
