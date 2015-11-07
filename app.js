$(document).ready(function(){

  $(".searchBtn").on("click", function(e){
    e.preventDefault();
    var userInput = $("#userInfo").val();

 console.log(userInput);

   $.getJSON("https://en.wikipedia.org/w/api.php?format=json&callback=?&action=query&generator=search&gsrnamespace=0&gsrsearch=" + userInput + "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max", function(data) {
    console.log(data);
   

    //dataResponse

  });//end of get
  });//end of click
});