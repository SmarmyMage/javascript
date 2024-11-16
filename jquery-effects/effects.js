$(document).ready(function() {
    $("#newsSignup").hide();

    $("a").click(function(event) {
        event.preventDefault();
        $("#signuplink").slideToggle();
        if ($('#openclose').text() === '+') {
            $('#openclose').text('-');
        } else {
            $('#openclose').text('+');
        }
    });
    

});