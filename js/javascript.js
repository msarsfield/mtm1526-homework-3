

$(document).ready(function () {

	$("form").on("submit", function(ev) {
	ev.preventDefault();

	var $color = $("#color").val();

	if ($('#dropdown').val() == "border-color") {
			$("#ball").css("border-color", $color);
		}

		else if ($("#dropdown").val() == "background-color") {
			$("#ball").css("background-color", $color);
		}
		
		else if ($("#dropdown").val() == "color") {
			$("#ball").css('color', $color);
		}
	});

	$('#hide').on('click', function(ev) {
		ev.preventDefault();
		
		$("#ball").toggle('fast');
	});
});

