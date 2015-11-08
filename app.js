$(document).ready(function(){

  $(".searchBtn").on("click", function(e){
    var x;
    var html = "";
    e.preventDefault();
//get term to search wikipedia for
    var userInput = $("#userInfo").val();

    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&callback=?&action=query&generator=search&gsrnamespace=0&gsrsearch=" + userInput + "&gsrlimit=20&prop=info&inprop=url&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max", function(data) {
      x = data["query"].pages;
//get the data we need from the response
        for(var prop in x) {
          html += "<li class='result-list-item'><h3 class='title'><a href='" +  x[prop].fullurl + "'>" + x[prop].title + " </a></h3></li>"          
        }
        
//show content on view
    $(".message").html(html);
    
    });//end of get
  });//end of click
});