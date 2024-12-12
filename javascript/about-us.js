window.onload = function extraHeading() {
    document.getElementById('new').innerHTML = "<h2>Welcome to this page!</h2>";
}

$(document).ready(function() {
    $("#hide").hide();

    $(".show").click(function() {
        $("#hide").show();
        if ($('.show').text() === 'Show Grid') {
            $('.show').text('Hide Grid');
        } else {
            $('.show').text('Show Grid');
            $("#hide").hide();
        }
    })

    $("#hover").hover(
        function() {
          $(this).attr("src", "Click_Icon2.jpg");
        },
        function() {
          $(this).attr("src", "Click_Icon.jpg");
        }
      );
})