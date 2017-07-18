$(document).ready(function() {



	$(".portfolio_menu").click(function() {
		$("html, body").animate({
			scrollTop: $(".porfolio_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".service_menu").click(function() {
		$("html, body").animate({
			scrollTop: $(".servisec_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".contact_menu").click(function() {
		$("html, body").animate({
			scrollTop: $(".map_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});


	$(".our_team_menu").click(function() {
		$("html, body").animate({
			scrollTop: $(".team_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".about_menu").click(function() {
		$("html, body").animate({
			scrollTop: $(".about_us_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".arrow_scroll").click(function() {
		$("html, body").animate({
			scrollTop: $(".main_menu").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});


	$(".l_p").click(function() {
		$("html, body").animate({
			scrollTop: $(".porfolio_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".l_s").click(function() {
		$("html, body").animate({
			scrollTop: $(".servisec_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".l_c").click(function() {
		$("html, body").animate({
			scrollTop: $(".map_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});


	$(".l_t").click(function() {
		$("html, body").animate({
			scrollTop: $(".team_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".l_a").click(function() {
		$("html, body").animate({
			scrollTop: $(".about_us_section").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});

	$(".arrow_scroll").click(function() {
		$("html, body").animate({
			scrollTop: $(".main_menu").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
	$(".l_h").click(function() {
		$("html, body").animate({
			scrollTop: $(".sub_Header").offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});


	$('.slider_cont').slick();

	$('.left_arrow').click(function() {
		$('.slider_cont').slick('slickNext');
	});

	$('.right_arrow').click(function() {
		$('.slider_cont').slick('slickPrev');
	});

	var cont_a = 0;

	function validate() {



		if (cont_a > 0) {



			var rv_name = /^[a-zA-Zа-яА-Я]+$/;

			if ($("#name").val().length > 2 && $("#name").val() != '' && rv_name.test(
					$("#name").val())) {
				$("#name").addClass('not_error');
			} else {
				$("#name").removeClass('not_error').addClass('error');
			}


			var rv_email =
				/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

			if ($("#email").val().length > 2 && $("#email").val() != '' && rv_email.test(
					$("#email").val())) {
				$("#email").addClass('not_error');
			} else {
				$("#email").removeClass('not_error').addClass('error');
			}


			var rv_phone =
				/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

			if ($("#pn_n").val().length > 2 && $("#pn_n").val() != '' && rv_phone.test(
					$("#pn_n").val())) {
				$("#pn_n").addClass('not_error');
			} else {
				$("#pn_n").removeClass('not_error').addClass('error');
			}



			if ($("#massage").val().length > 2) {
				$("#massage").addClass('not_error');
			} else {
				$("#massage").removeClass('not_error').addClass('error');
			}


		}


	}



	$('#name, #email, #message, #pn_n').unbind().blur(validate);

	$("#feedback-form").click(function() {
		cont_a = 1;
		validate();

		if ($(".not_error").length == 4) {

			$("#feedback-form1").click();

		}

	});


});
