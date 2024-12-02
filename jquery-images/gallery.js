$(document).ready(function() {
    $("#thumbs").hover(
    function(){
        $("img").css("border-style: thin", "border-color: #006400", "box-shadow: 5px 10px");
    }, function(){
        $("img").css("border-style: none", "border-color: none", "box-shadow: none");
    });
});