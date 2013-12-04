
$(function() {

    $( "#accordion" ).accordion();



    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $( "#autocomplete" ).autocomplete({
        source: availableTags
    });



    $( "#button" ).button();
    $( "#radioset" ).buttonset();



    $( "#tabs" ).tabs();



    $( "#dialog" ).dialog({
        autoOpen: false,
        width: 400,
        buttons: [
            {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                }
            },
            {
                text: "Cancel",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });

    // Link to open the dialog
    $( "#dialog-link" ).click(function( event ) {
        $( "#dialog" ).dialog( "open" );
        event.preventDefault();
    });



    $( "#datepicker" ).datepicker({
        inline: true
    });



    $( "#slider" ).slider({
        range: true,
        values: [ 17, 67 ]
    });



    $( "#progressbar" ).progressbar({
        value: 20
    });


    // Hover states on the static widgets
    $( "#dialog-link, #icons li" ).hover(
        function() {
            $( this ).addClass( "ui-state-hover" );
        },
        function() {
            $( this ).removeClass( "ui-state-hover" );
        }
    );
});


$(document).ready(function(){
    $('#cart').hide();
    $('#show_top').hide();

    $('#show_crust').hide();
    $('#show_drink').hide();

    $('#btn_top').click( function(){
        $('#show_top').slideToggle('slow');
    })

    $('#btn_crust').click( function(){
        $('#show_crust').slideToggle('slow');
    })
    $('#btn_drink').click( function(){
        $('#show_drink').slideToggle('slow');
    })
    $('#fav').click( function(){
        $('#show_drink').slideToggle('slow');
    })


        $('#pepperoni').click( function(){
          $('#cart').prepend("<li>Pepperoni</li>");
        });

    $('#sausage').click( function(){
        $('#cart').prepend("<li>Sausage</li>");
    });
    $('#garlic').click( function(){
        $('#cart').prepend("<li>Garlic</li>");
    });

    $('#cheese').click( function(){
        $('#cart').prepend("<li>Extra Cheese</li>");
    });
    $('#thin').click( function(){
        $('#cart').prepend("<li>Thin Crust</li>");
    });
    $('#original').click( function(){
        $('#cart').prepend("<li>Hand Tossed Crust</li>");
    });
    $('#fried').click( function(){
        $('#cart').prepend("<li>fried</li>");
    });
    $('#coke').click( function(){
        $('#cart').prepend("<li>Coke</li>");
    });

    $('#sprite').click( function(){
        $('#cart').prepend("<li>Sprite</li>");
    });
    $('#lemonade').click( function(){
        $('#cart').prepend("<li>Lemonade</li>");
    });
    $('#beer').click( function(){
        $('#cart').prepend("<li>Beer</li>");
    });
    $('#show_current').click( function(){
        $('#cart').slideToggle('slow');
    });
    navigator.geolocation.getCurrentPosition (function (pos)
    {
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        $("#lat").text (lat);
        $("#lng").text (lng);
    var url = '<a href="http://maps.google.com/maps?daddr=Pizza+Hut,+Pizza+Hut,+3304+N+Nevada+St,+Spokane,+WA+99207&saddr=' + lat + ','+ lng + '" target = "_blank"><button id="location" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false"><span class="ui-button-text">Location</span></a></button> </a>';
        $("#url").append(url);
    });
 $('div[data-product]').each( function (){
     $(this).append('<button class="btnCart">Add Selection</button><br/>')
    // .css("background-color", "blue");
 });
    var cart = [];
    $('.btnCart').on("click", function(event){
        var pid =$(this).parent().data("product");
        console.log( pid );
       var obj = new Object();
            if  (cart[pid]) {
            cart[pid].qty += 1;
        }
        else
        {
            cart[pid] = new Object();
            cart[pid].qty = 1;
            cart[pid].name = $(this).siblings("span").data("name");
            cart[pid].price = $(this).siblings("span").next("span").data("price")
        }
        displayCart();

    });
    function displayCart(){
        var cartDiv = $('#cartDiv');
        cartDiv.html("");
        var grandtotal = 0;
        for (var item in cart){
            var qty = cart[item].qty;
            var price = cart[item].price;
            var name = cart[item].name;
            var subtotal = qty * price;
            grandtotal += subtotal;
                    console.log(subtotal);
            console.log(grandtotal);
                cartDiv.append("<p>"+ qty + ' | '  + name + '.....' + '$' + subtotal.toFixed(2) + "</p>" );


            }
        cartDiv.append("<p>" + 'total' + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + '$' + grandtotal.toFixed(2)+ "</p>" );
    }

    $('#buy').on("click", function (event){
        var buyUrl ="";
        for (var item in cart){
            buyUrl+= "&pid[] =" + item + "&qty=[]" + cart[item].qty;
        };
    $.getJSON('buy.php?' + buyUrl, function(data){
        $('#cartDiv').append(data);
    })
        console.log("http://cis217.mylittleponyslayer.com/Pizza/buy.php?"+buyUrl);
    })

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            navigator.compass.getCurrentHeading(onSuccess, onError);
            }

        // onSuccess: Get the current heading
        //
        function onSuccess(heading) {
            alert('Heading: ' + heading.magneticHeading);
            }

        // onError: Failed to get the heading
        //
        function onError(compassError) {
            alert('Compass Error: ' + compassError.code);
            }


})


