$(document).ready(function(){

  $(".searchBtn").on("click", function(e){
    var x;
    e.preventDefault();
    var userInput = $("#userInfo").val();

 console.log(userInput);

   $.getJSON("https://en.wikipedia.org/w/api.php?format=json&callback=?&action=query&generator=search&gsrnamespace=0&gsrsearch=" + userInput + "&gsrlimit=10&prop=info&inprop=url&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max", function(data) {
    x = data["query"].pages;
//console.log( JSON.stringify(data))
  for(var prop in x) {
    console.log(x[prop]);
  }
   
        
        
//         $.each(data, function (i, obj) {
//         console.log(obj["pages"]);
// });
 //$(".message").html(html);
    

  });//end of get
  });//end of click
});