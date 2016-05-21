
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
    
    
});
