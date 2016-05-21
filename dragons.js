
$(document).ready(function() {
    console.log( "ready!" );
    var count = 0;

  $("#like").on('click', function(){
    count++
    $("#number").text(count)
})  
    
        
    $("#dislike").on('click', function() {
        count=count-1
        $("#number").text(count)
    })
    
    
});
