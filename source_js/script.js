$(document).foundation();

$(function() {

	$('.sticky-full').stickyNavbar({
		mobile: true,
		startAt: 0,
		jqueryAnim: "show",
		easing: "easeInOutQuart"
	});

	$('#mainNav ul li a').on("click", function(e) {
		if(!Foundation.MediaQuery.atLeast('large')) $('#mainNav').css('display','none');
	});

	$('#carousel').slick();
});