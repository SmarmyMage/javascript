$(document).ready(function() {
    $("#thumbs").hover(
    function(){
        $("img").css({"border-width": "thin", "border-color": "#006400", "box-shadow": "5px 10px"});
    }, function(){
        $("img").css({"border-width": "none", "border-color": "none", "box-shadow": "none"});
    });
});