$(document).ready(function(){

  $(".searchBtn").on("click", function(e){
    var x;
    var html = "";
    e.preventDefault();
    var userInput = $("#userInfo").val();

 

   $.getJSON("https://en.wikipedia.org/w/api.php?format=json&callback=?&action=query&generator=search&gsrnamespace=0&gsrsearch=" + userInput + "&gsrlimit=20&prop=info&inprop=url&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max", function(data) {
    x = data["query"].pages;

  for(var prop in x) {
    console.log(x[prop]);
    html += "<li class='result-list-item'><h3 class='title'><a href='" +  x[prop].fullurl + "'>" + x[prop].title + " </a></h3></li>"
    console.log(x[prop].title);
  }
   
        

  $(".message").html(html);
    

  });//end of get
  });//end of click
});