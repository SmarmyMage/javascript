$(document).ready(function() {
    $("#thumbs img").hover(
    function(){
        var borderOn = {"border-width": "thin", "border-color": "darkgreen", "box-shadow": "5px 10px"};
        $(this).css(borderOn);
    }, function(){
        var borderOff = {"border-width": "none", "border-color": "none", "box-shadow": "none"};
        $(this).css(borderOff);
    })
    
    $('#gallery img').each(function() {
        var imgFile = $(this).attr('src');
        var imgAlt = $(this).attr('alt');
        $(this).click(function() {
            $('#lgPic').attr('src', imgFile);
            $('figcaption').text(imgAlt);
        });
    });

    $("#lgPic").click(function(){
        var imgLink = $(this).attr('src');
        window.open(imgLink);
    })
})