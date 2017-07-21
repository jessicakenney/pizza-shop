//-------------------BACK END----------------------------
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
      case "basil":
        cost = basil.cost;
        break;
      case "pepperoni":
        cost = pepperoni.cost;
        break;
    }
    return cost;
  });
  alert("toppingCosts: " + toppingCosts)
  toppingCosts.forEach(function(cost){
    totalToppingCosts += cost;
  });
  return totalToppingCosts.toFixed(2);
}
var small = new PizzaSize(small,8.00);
var medium = new PizzaSize(medium,12.00);
var large = new PizzaSize(large,18.00);
var basil = new Topping(basil,1.00);
var pepperoni = new Topping(pepperoni,1.50);

var sizes = [small,medium,large];

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();

//-------------------FRONT END----------------------------
  // Retrieve user input
    var inputToppings = [];
    var inputSize = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      inputToppings.push($(this).val());
    });

    $(".order-summary").show();
    $("#size").text(inputSize);
    $("#size-cost").text(getSizeCost(inputSize));
    $("#toppings").text(inputToppings);
    $("#toppings-cost").text(getTotalToppingCosts(inputToppings));

  });
});
