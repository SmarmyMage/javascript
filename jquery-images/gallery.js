$(document).ready(function() {
    $("#thumbs").hover(function(){
         $(function(){
            $(this).css("border-style: thin", "border-color: #006400", "box-shadow: 5px 10px");
         });

        $(function(){
            $(this).css("border-style: none", "border-color: none", "box-shadow: none");
        });
    });
});