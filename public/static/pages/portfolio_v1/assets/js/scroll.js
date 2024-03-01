$(document).ready(function() {

	$('a[href*="#"]').click(function(e) {
		e.preventDefault();

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);

			if (target.length > 0) {
				$('html, body').animate({scrollTop: target.offset().top}, 1000);
			} else {
				$('html, body').animate({scrollTop: 0}, 1000);
			}
		}
	});
});