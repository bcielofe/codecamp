$(document).ready (function(){
		$("button").click(function(){
			$("p").hide();
		});

		$("p").on ({
			mouseenter:function() {
				$(this).css("background-color", "lightgray");
			},
			mouseleave: function() {
				$(this).css("background-color", "lightblue");
			},
			click: function() {
				$(this).css("background-color", "yellow");
			}
		});
	});

	