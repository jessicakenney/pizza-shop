//-------------------BACK END----------------------------
function PizzaSize (type,cost){
  this.type = type;
  this.cost = cost;
}
function getCost (size){
  if (size === "small"){
    return small.cost;
  } else if (size ===  "medium"){
    return medium.cost;
  } else {
    return large.cost;
  }
}

var small = new PizzaSize(small,"8.00");
var medium = new PizzaSize(medium,"12.00");
var large = new PizzaSize(large,"18.00");

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

    alert(inputSize);
    alert(getCost(inputSize));
    alert(inputToppings);



  });
});
