function Order(size, crust, toppi, quanti) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.topping = toppi;
  this.quantity = quanti;
}
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

  var newOrder = new Order(size, crust, toppi, quanti);
  //var price = pizzaSize * pizzaCrust * topping * quantity ;
  //pizza.push(newOrder);

  Order.prototype.piza = function() {
    return "Your Order : Size*" + this.size + "/ Crust*" + this.crust + "/ Toppings*" + this.toppi + "/ Quantity*" + this.quanti 
  };

  if (newOrder.pizzaSize != undefined) {
    alert( newOrder.piza()+ '$' + ' Successfuly.');
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