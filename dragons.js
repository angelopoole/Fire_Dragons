
$(document).ready(function() {
    console.log( "ready!" );
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
    
  
$("input").keyup(function) {
    var value = $(this).val();
    $("ul").text(value):
}


});

















































// swiggity swagity whats in the baggity