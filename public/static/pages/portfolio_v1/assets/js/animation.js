$(document).ready(function() {

	function scrollAnimation() {
		var winPosY = $(window).scrollTop();
		var winHeight = $(window).height();

		scaleLine($('.line-decoration-left'), 'left', 50, winPosY, winHeight);
		scaleLine($('.line-decoration-right'), 'right', 50, winPosY, winHeight);
	}

	function scaleLine(elem, side, offset, winPosY, winHeight) {
		elem.each(function() {

			var elemPosY = $(this).offset().top;
			var elemHeight = $(this).outerHeight();

			if (winPosY < elemPosY + elemHeight && winPosY + winHeight > elemPosY) {
				var finalPos = (winPosY + winHeight - offset) - (elemPosY + elemHeight);							// Calcul de la position de l'élement par rapport à l'écran
					finalPos = finalPos > winHeight / 3 ? winHeight / 3 : finalPos;									// Définition du maximum (1/3 de l'écran)
					finalPos = finalPos < 0 ? 0 : finalPos;															// Définition du minimum (0)

				var result = finalPos / (winHeight / 3);															// Ratio de grossissement
				var result2 = ($(this).parent().width() * result / 2) - ($(this).parent().width() / 2);				// Calcul de la translation pour compenser le grossissement
					result2 = side == 'left' ? -result2 : result2;

				$(this).css({ 'transform': `translateX(${result2}px) scale(${result}, 1)` });
			}
		});
	}

	/* 
		Working but not used

	function parallax(elem, winPosY, winHeight) {
		elem.each(function() {

			var elemPosY = $(this).offset().top;
			var elemHeight = $(this).outerHeight();

			if (winPosY < elemPosY + elemHeight && winPosY + winHeight > elemPosY) {
				var pos = (elemPosY - winPosY - (winHeight / 2)) / 2;

				$(this).css({"background-position": "center " + pos + "px"});
			}
		});
	}
	*/

	$(window).on('scroll', scrollAnimation);
	$(window).on('scroll resize', scrollAnimation);
	$(window).trigger('scroll');
});
