var lightOn = true;
$("#switch").on("click", function(){
  
    
    if (lightOn) {
        
        $('#switch').css('float', 'left');
       $('body').css('background-color', 'white');
        lightOn = false;
    }
    else {
        $('#switch').css('float', 'right');
        $('body').css('background-color', 'black');
         lightOn = true;
    }
});










