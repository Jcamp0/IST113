var lightOn = true;
$("#switch").on("click", function(){
  
    
    if (lightOn) {
        
        $('#switch').css('float', 'left');
       $('body').css('background-color', 'white');
       $('#switch').text("on");
        lightOn = false;
    }
    else {
        $('#switch').css('float', 'right');
        $('body').css('background-color', 'black');
        $('#switch').text("off");
         lightOn = true;
    }
});










