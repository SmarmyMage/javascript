$(document).ready(function() {
    //$("#newsSignup").hide();

    $("#signuplink").click(function(event) {
        event.preventDefault();
        $("#newsSignup").slideToggle();
        if ($('#openclose').text() === '+') {
            $('#openclose').text('-');
        } else {
            $('#openclose').text('+');
        }
    });
    

});