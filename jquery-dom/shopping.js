$(document).ready(function() {

    var shoppingCart = 0;

    var addHTML = "<br><span class='del'>Remove</span>";
    $('.add').append(addHTML);

    $('.add').click(function () {
		var itemName = $(this).attr('name');
		var itemID = $(this).attr('id');
		shoppingCart++;
		if (shoppingCart > 0) {
			$('#empty').hide();
		}
		var cartLink = "<li class='cartItem' name='" + itemID + "'>" + itemName + " <span class='del'>Remove</span></li>";
		$('#cart').append(cartLink);
		$('#' + itemID).hide();
	});

	$('#cart').on('click', '.del', function(){
		$('li').parent().empty();
		shoppingCart--;
		if (shoppingCart === 0) {
			$('#empty').show();
		}
		$('.add').show();
	});

	$('.rating').click(function(){
		$('img').siblings().attr('src', 'staroff.gif');
		$('img').closest().attr('src', 'staron.gif');
		$('img').prev().attr('src', 'staron.gif');
	});

});