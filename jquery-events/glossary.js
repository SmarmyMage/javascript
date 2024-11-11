$(document).ready(function() {

    $(".botanic").hide();
    $(".imgdiv").hide();

    $("h1, h2").mouseover(function(){
        $("h1, h2").css("color", "red");
      });

    $("h1, h2").mouseout(function(){
       $("h1, h2").css("color", "darkgreen");
    });

    $(".flower").click(function(){
        $(".botanic").hide();
        $(this).children('.botanic').show();
    }); 

    $(".pic").hover(function(evt){
        $(function() {
            var titleRose = $("#rose");
            var titleMum = $("#mum");
            var titleConeflower = $("#coneflower");
    
            var xPos = evt.pageX + 150;
            var yPos = evt.pageY;

            $(tilteRose).css({top: yPos, left: xPos});
            $(titleRose).show();

            $(titleMum).css({top: yPos, left: xPos});
            $(titleMum).show();

            $(titleConeflower).css({top: yPos, left: xPos});
            $(titleConeflower).show();
        });

        $(function(){
            var titleRose = $("#rose");
            var titleMum = $("#mum");
            var titleConeflower = $("#coneflower");

            $(titleRose).hide();
            $(titleMum).hide();
            $(titleConeflower).hide();
        });
    });
});

$(document).keypress(function(evt) {
    var keyPressed = String.fromCharCode(evt.which).toLowerCase();
    window.location="#"+keyPressed;
});