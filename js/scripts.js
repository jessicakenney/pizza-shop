//-------------------BACK END----------------------------



$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();

//-------------------FRONT END----------------------------
  // Retrieve user input
    var size = $("input:radio[name=size]:checked").val();
    alert(size);




  });
});
