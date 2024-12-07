$(document).ready(function() {
    $('#name').blur(function() {
        if ($(this).val() == "") {
            $('#nameErr').text('Name is required');
        } else {
            $('#nameErr').text('');
        }
    });
    
    emailregex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    $('#email').blur(function() {
        if (!$('#email').val().match(emailregex)) {
          $('#emailErr').text('Email format user@domain.com');
        } else {
          $('#emailErr').text('');
        }
    });
    $('#email2').blur(function() {
        if ($('#email2').val() != $('#email2').val()) {
          $('#email2Err').text("Emails do not match");
        } else {
          $('#email2Err').text("");
        }
    });

    $('#address, #shipaddr').blur(addressValid); 
    function addressValid() {
        if ($(this).val() == "") {
            $('#addressErr, #shipaddrErr').text('Address is required');
        } else {
            $('#addressErr, #shipaddrErr').text('');
        }
    }

    $('#city, #shipcity').blur(cityValid); 
    function cityValid() {
        if ($(this).val() == "") {
            $('#cityErr, #shipcityErr').text('City is required');
        } else {
            $('#cityErr, #shipcityErr').text('');
        }
    }

    $('#zip, #shipzip').blur(zipValid); 
    function zipValid() {
        if ($(this).val() == "") {
            $('#zipErr, #shipzipErr').text('Zip code is required');
        } else {
            $('#zipErr, #shipzipErr').text('');
        }
    }

    $('#copy').change(function() {
        if (this.checked) {
        $('#shipaddr').val($('#address').val());
        $('#shipcity').val($('#city').val());
        $('#shipzip').val($('#zip').val());
        $('#shipstate').val($('#state').val());
    } else {
        $('#shipaddr').val('');
        $('#shipcity').val('');
        $('#shipzip').val('');
        $('#shipstate').val(1);
        }
    });

    $('.qty').blur(function() {
        var ordertotal = 0;
        var qtyval = $('.qty').val();
        if (isNaN(qtyval)) {
            $('.qty').val(0);
        }
        var qty1 = $('#1').val();
        var qty2 = $('#2').val();
        var qty3 = $('#3').val();
        var price1 = 9.99;
        var price2 = 1.49;
        var price3 = 11.99;
        var total1 = price1 * qty1;
        var total2 = price2 * qty2;
        var total3 = price3 * qty3;
        $('#total1').html('$' + total1);
        $('#total2').html('$' + total2);
        $('#total3').html('$' + total3);
        ordertotal = total1 + total2 + total3;
        $('#subt').html('$' + ordertotal);
        let texastax = 0;
        if ($('#shipstate').val() === 'TX') {
            texastax = ordertotal * 0.8;
            $('#tax').html('$' + texastax.toFixed(2));
        } else {
            texastax = ordertotal + 0;
            $('#tax').html('$0');
        }
        ordertotal = ordertotal + texastax;
        let shiptax = 0;
        if ($('#shipstate').val() === 'TX') {
            shiptax = 5;
            $('#ship').html('$5.00');
        } else if ($('#shipstate').val() === 'CA'){
            shiptax = 20;
            $('#ship').html('$20');
        } else if ($('#shipstate').val() === 'NY') {
            shiptax = 20;
            $('#ship').html('$20');
        } else {
            shiptax = 10;
            $('#ship').html('$10');
        }
        ordertotal = ordertotal + shiptax;
        $('#gTotal').html('$' + ordertotal.toFixed(2));
    });
}); 