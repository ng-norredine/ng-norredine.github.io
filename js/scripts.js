$(document).ready(function(){
	"use strict";

	// ################ ANIMATION ##############
	
	$(".top_text h1").addClass("fadeInDown animated");
	$(".top_text p").addClass("fadeInUp animated");
	
	$('.left .timeline_item').waypoint(function() {
		$(this).addClass('animation');
		$(this).addClass('slideInLeft');
	}, { offset: '100%' });
	$('.right .timeline_item').waypoint(function() {
		$(this).addClass('animation');
		$(this).addClass('slideInRight');
	}, { offset: '100%' });
	$('.animation1').waypoint(function(down) {
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });
	
	
	function heightDetect() {
		$(".top").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	//########### MENU BUTTON ####################
	
	$(".toggle_mnu").on("click",function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu ul a").on("click",function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").on("click",function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});


    // ############### GOOGLE MAP #################
var montreal=new google.maps.LatLng(45.5087,-73.554);
function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: montreal, //// Location
        zoom: 8,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    }

    var map = new google.maps.Map(mapCanvas, mapOptions)
    map.set('styles', [
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 51
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 30
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 40
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        }
    ]);
    var marker=new google.maps.Marker({
        position:montreal,
        icon:'images/location_icon.png'
    });

    marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, "resize", function() {
    google.maps.event.trigger(map, "resize");
});

    // ############### PROGRESS BARS #################

setTimeout(function() {
    $('#html-pourcent').html('95%');
},2800);

setTimeout(function() {
    $('#css-pourcent').html('90%');
},3500);

setTimeout(function() {
    $('#javascript-pourcent').html('70%');
},4200);

setTimeout(function() {
    $('#rwd-pourcent').html('85%');
},4900);

setTimeout(function() {
    $('#angular-pourcent').html('55%');
},4600);

setTimeout(function() {
    $('#tdd-pourcent').html('45%');
},4300);

setTimeout(function() {
    $('#agile-pourcent').html('87%');
},4500);

setTimeout(function() {
    $('#smile-pourcent').html('100%');
},4700)});
