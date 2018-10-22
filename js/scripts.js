$(function(){
  $("#cardeck").submit(function(event){
    event.preventDefault();

    var numbers = ["2","3","4","5"]
    var suits = ["hearts","spades","clubs","diamonds",]
    var output = [];
    numbers.forEach(function(number){
var input = $(number + suits).val();
    output.forEach(function(element){
      // alert("spa" + spade);
      $(".clubs").append("<li>" + element + "</li>");

    });
  });
});
});
