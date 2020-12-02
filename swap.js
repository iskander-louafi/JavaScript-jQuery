"use strict";
$(document).ready(function () {
    $("#total:first").html('<li  class="price result"> The Total is : 0$ <br> </li> ' );
  // Hover function
  $("#image_list a").hover(function (e) {
    // swap image
    var target = $(this).next();
     var imageURL = $(target).attr("href");
    $("#main_image").attr("src", imageURL);
       
    //swap caption
    var caption = $(this).attr("title");
    $("#caption").text(caption);

    // cancel the default action of the link
    e.preventDefault(); // jQuery cross-browser method
  }); // end hover function

  // function to add the order
  var total = 0 ;
  $("#image_list a").click(function (e) {
  var product = $(this).attr("value");
  var title = $(this).attr("title");
  total += Number(product);
  $("#Order_details").after('<li  class="price"> ' + title + ' :' + product + ' $' + ' </li>' +'<br>');
  $("#total:first").html('<li  class="price result"> The Total is :' +  total  + ' $' + ' <br> </li> ' );

// remove function
  $("#remove_order").click(function(){
    $("li").remove(".price");  
    location.reload();
    return false;
  }) 

  e.preventDefault();
});//end ordering funct



//checking before going to the confirmation page
$("#place_order").click(function(){

 if ($("#Order_details").next().attr("class") !=="" ){
    window.location.href="confirmation.html";
 } else {
    window.alert("Please Choose at least one item before confirming!");
     
 }
//  e.preventDefault();
  })  
  //  focus on the first img
  $("li:first-child a").focus();
}); // end Document.ready
