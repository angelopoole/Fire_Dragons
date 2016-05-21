
$(document).ready(function() {
    console.log('test')
    var count = 0;
    var count1 = 0;

  $("#like").on('click', function(){
    count++
    $("#number").text(count)
})  
    
        
    $("#dislike").on('click', function() {
        count1++
        $("#number1").text(count1)
    })
   
   $("#hack").click( function() {
       var post = $("input").val();
       $(".chat").prepend("<div class=\"enter\">" + post + "</div>")
       console.log(post);
   })
    
});




// $("input").keyup(function(e) {
//     var value = $(this).val();
//     if(e.keyUp ==13) {
        
//     }
//     $("ul").text("<li>" + value + "</li>"):




















































// swiggity swagity whats in the baggity