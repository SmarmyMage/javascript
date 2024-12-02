$(document).ready(function() {
    $("p").hover(function(){
        $("#thumbs").css("border-style: thin", "border-color: #006400", "box-shadow: 5px 10px");
    }, function(){
        $("#thumbs").css("border-style: none", "border-color: none", "box-shadow: none");
    });
});