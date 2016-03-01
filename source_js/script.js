$(document).foundation();

$(function() {

	// code snippet from http://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes

	function getScrollBarWidth () {
		var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
			widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
		$outer.remove();
		return 100 - widthWithScroll;
	};

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

	// stop weird resizing on modal open

	$(document).on('opening', '.remodal', function () {
		var scrollWidth = getScrollBarWidth();
		if(scrollWidth > 0) {
			$('html').css('margin-right', scrollWidth + 'px');
			$('nav').css('margin-right', scrollWidth + 'px');
		}
	});

	$(document).on('closed', '.remodal', function () {
		$('html').css('margin-right','0px');
		$('nav').css('margin-right','0px');
	});

});