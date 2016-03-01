$(document).foundation();

$(function() {

	// sticky navbar

	$('.sticky-full').stickyNavbar({
		mobile: true,
		jqueryAnim: "show",
		easing: "easeInOutQuart"
	});

	$('#mainNav ul li a').on("click", function(e) {
		if(!Foundation.MediaQuery.atLeast('large')) $('#mainNav').slideUp();
	});

	// slick carousel

	$('#carousel').slick({
		autoplay: true,
		appendArrows: "#carousel",
		prevArrow: "#prev",
		nextArrow: "#next",
		cssEase: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
		useTransform: true
	});

	// de-obfuscate email address on page

	var link = "<n uers=\"znvygb:ebjsbhaqngvba@irevmba.arg\" ery=\"absbyybj\">ebjsbhaqngvba@irevmba.arg</n>".replace(/[a-zA-Z]/g, 
		function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});
	$('#ROWemail').html(link);

	// shrink navbar when scroll down
	// 
	$(window).scroll(function() {
		if ($(document).scrollTop() > 200) {
			$('.sticky-full').addClass('shrink');
		} else {
			$('.sticky-full').removeClass('shrink');
		}
	});

});