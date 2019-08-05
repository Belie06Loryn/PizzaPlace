function Order(size, crust, toppi, quanti) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.topping = toppi;
  this.quantity = quanti;
}
Order.prototype.piza = function() {
    return "Your Order // Size:" + this.pizzaSize + ", Crust:" + this.pizzaCrust + ", Toppings:" + this.topping + ", Quantity:" + this.quantity 
  };
var pizza=[];
function addOrder() {
  var pizzaSize = document.getElementById("size").value;
  console.log(pizzaSize);
  var pizzaCrust = document.getElementById("crust").value;
  console.log(pizzaCrust);
  var topping = document.getElementById("toppi").value;
  console.log(topping);
  var quantity = document.getElementById("quanti").value;
  console.log(quantity);

  var newOrder = new Order(pizzaSize, pizzaCrust, topping, quantity);

  //pizza.push(newOrder);
  if($("select#size").val()==="Large"){
    var s = 13;
  }else if($("select#size").val()==="Medium"){
    var s = 9;
  }else if($("select#size").val()==="Small"){
    var s = 5;
  } else{
      alert('Please Enter The Size')
  }

  if($("select#crust").val()==="Thin Crust"){
    var c = 2;
  }else if($("select#crust").val()==="Thick Crust"){
    var c = 3;
  }else if($("select#crust").val()==="Flatbread Crust"){
    var c = 4;
  } else if($("select#crust").val()==="Focaccia Crust"){
    var c = 3;
  }else if($("select#crust").val()==="Custom Crust"){
    var c = 2;
  }else if($("select#crust").val()==="Astoria Rising Crust"){
    var c = 3;
  } else if($("select#crust").val()==="Authentic Wood Fired Crust"){
    var c = 4;
  } else {
      alert('Please Enter Crust')
  }


  if($("select#toppi").val()==="BBQ chicken, bacon, sweetcorn, onion"){
    var t = 3;
  }else if($("select#toppi").val()==="Bacon, pineapple"){
    var t = 2;
  }else if($("select#toppi").val()==="Marinated tikka chicken, green pepper, onions"){
    var t = 3;
  } else if($("select#toppi").val()==="Marinated barbeque steak"){
    var t = 2;
  }else if($("select#toppi").val()==="Tomatoes, green pepper, pineapple, onions, mushroom, chicken BBQ"){
    var t = 4;
  }else if($("select#toppi").val()==="Tomato, green pepper, onions, pineapple, mushroom"){
    var t = 4;
  } else if($("select#toppi").val()==="Tomatoes, onions, green pepper, black olive, pepperoni, ham, mushroom"){
    var t = 4;
  }else if($("select#toppi").val()==="Pepperoni, bacon, beef, ham"){
    var t = 3;
  } else if($("select#toppi").val()==="Marinated peri-peri chicken"){
      var t = 3;
  } else {
      alert('Please Enter Topping')
  }

  var de = 5;
  var price = parseInt(s) * (parseInt(c) + parseInt(t));
  console.log(price);
  var total = parseInt(price) + de ;
  if (newOrder.pizzaSize != undefined) {
    $("div#ordere").append("<p>" + newOrder.piza() + "</p>");
    $("div#ordere").append("<p>" + " The Price is " + price + "$" + "</p>");
  } else {
    alert('No order added');
  }
  $("#delivery").click(function() {
   $("div#ordere").append("<p>" + " The Total Amount is " + total + "$" + "</p>");
  });
}

document.getElementById('order').addEventListener('click', addOrder);
$(document).ready(function(){
    $("#ima").click(function(){
      $("#orde").toggle();
      $("#ima").show();
      $("#orde").show();
    });
});
$(document).ready(function(){
    $("#order").click(function(){
      $("#delivery").toggle();
      $("#order").show();
      $("#delivery").show();
    });
});
$("#delivery").click(function() {
    var loc = prompt("Enter your Location:");
    alert("We will deliver your order in 30-45 min at" + " " + loc + " " + "Thank you for You Consideration");
    alert("Delivery Fees is 5$");
  });
$(document).ready(function(){
    $("#mybutton").click(function(messag){
      var name = document.getElementById("name").value;
      var messaje = document.getElementById("mybutton").value;{
        alert(name +' '+ "We Have Recieved Your Message!");
      }
    });
  });