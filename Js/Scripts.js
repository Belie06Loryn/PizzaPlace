function Order(size, crust, toppi, quanti) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.topping = toppi;
  this.quantity = quanti;
}
Order.prototype.piza = function() {
    return "Your Order : Size*" + this.pizzaSize + "/ Crust*" + this.pizzaCrust + "/ Toppings*" + this.topping + "/ Quantity*" + this.quantity 
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
  //var price = pizzaSize * pizzaCrust * topping * quantity ;
  //pizza.push(newOrder);

  if (newOrder.pizzaSize != undefined) {
    alert( newOrder.piza()+ ' Successfuly.');
  } else {
    alert('No order added');
  }
  
}
/*function showOrder() {
    var i;
    var list = document.getElementById('ordere');

    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    
    
    for (var i = 0; i < pizza.length; i++) {
      var node = document.createElement("LI");
      list.appendChild(node);
      node.innerHTML =
        '<p><b>Full Name:</b> ' + pizza[i].pizzaSize + '</p>' +
        '<p><b>Age:</b> ' + pizza[i].pizzaCrust + '</p>' +
        '<p><b>Phone:</b> ' + pizza[i].topping + '</p>' +
        '<p><b>Phone:</b> ' + pizza[i].quantity + '</p>'
  
      for (var key in pizza) {
        var value = pizza[key];
      }
    }
  }*/
document.getElementById('order').addEventListener('click', addOrder);
$(document).ready(function(){
    $("#ima").click(function(){
      $("#orde").toggle();
      $("#ima").show();
      $("#orde").show();
    });
});
$(document).ready(function(){
    $("#mybutton").click(function(messag){
      var name = document.getElementById("name").value;
      var messaje = document.getElementById("mybutton").value;{
        alert(name +' '+ "We Have Recieved Your Message!");
      }
    });
  });