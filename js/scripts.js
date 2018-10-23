$(function(){
  $("#card-deck").submit(function(event){
    event.preventDefault();

    var numbers = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
    var suits = ["Hearts","Spades","Clubs","Diamonds",]
    var output = []

    // this will return the list in order by suit
    suits.forEach(function(suit){
      numbers.forEach(function(number){
        output.push(number + " of " + suit);
        $(".card-list").append("<li>" + number + " of " + suit + "</li>");
      });
    });
  });
});
// this will return the list in order by numbers

//     numbers.forEach(function(number){
//       suits.forEach(function(suit){
//         output.push(number + " of " + suit);
//         $(".card-list").append("<li>" + number + " of " + suit + "</li>");
//       });
//     });
//   });
// });




// output.forEach(function(element){
//   // alert("spa" + spade);
//   $(".clubs").append("<li>" + element + "</li>");
