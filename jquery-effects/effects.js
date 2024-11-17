$(document).ready(function() {
    $("#newsSignup").hide();

    $("#signuplink").click(function(event) {
        event.preventDefault();
        $("#newsSignup").slideToggle();
        if ($('#openclose').text() === '+') {
            $('#openclose').text('-');
        } else {
            $('#openclose').text('+');
        }
    });
    

    $("#slogan").hover(function(){
        $(function(){
            $("#slogan").fadeOut("normal", "linear", function(){
                $("#slogan").text("Hand Picked Just for You");
            }).fadeIn("slow", "swing");
        });

        $(function(){
            $("#slogan").fadeOut("fast", "swing", function(){
                $("#slogan").text("The Power of Flowers");
            }).fadeIn("slow", "linear");
        });
    });

    $("#rose").animate({right: '+100px', opacity: 1}, "slow", "swing");

    $("form").submit(function(evt){
        evt.preventDefault();
        $("#newsSignup").hide();
        $("#signuplink").fadeTo("normal", 0.3);
        alert("Thank you for registering.");
    })
});