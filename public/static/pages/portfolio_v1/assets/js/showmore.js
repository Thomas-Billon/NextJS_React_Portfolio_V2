$(document).ready(function() {

	var i = 0;
	var j = 0;

	function resizeList() {
		if (i == 0) {
			$("#project .list-project").css('height', $("#project .elem-project").eq(0).outerHeight());
		} else {
			$("#project .list-project").removeAttr('style');
		}
		if (j == 0) {
			$("#work .work-list").css('height', $("#work .work-list-elem").eq(0).outerHeight());
		} else {
			$("#work .work-list").removeAttr('style');
		}
	}

	function initHeight(list, elem, moreButton, lessButton) {

		var elemHeight = elem.eq(0).outerHeight();
		
		if (list.outerHeight() > elemHeight) {
			list.css('height', elemHeight);
			moreButton.css('display', 'inline-block');
		} else {
			moreButton.css('display', 'none');
		}

		lessButton.css('display', 'none');
	}

	function showMore(list, moreButton, lessButton) {

		var	listHeight = list.outerHeight();

		list.removeAttr('style');

		var	fullHeight = list.outerHeight();

		list.css('height', listHeight);
		list.animate({height: fullHeight}, 500, 'swing', function() {

			moreButton.css('display', 'none');
			lessButton.css('display', 'inline-block');
		});
	}

	$("#project .more-project").click(function() {
		showMore($("#project .list-project"), $(this), $("#project .less-project"));
		i = 1;
	});

	$("#work .more-work").click(function() {
		showMore($("#work .work-list"), $(this), $("#work .less-work"));
		j = 1;
	});

	function showLess(list, elem, lessButton, moreButton) {

		var	listHeight = list.outerHeight();
		var elemHeight = elem.eq(0).outerHeight();

		list.css('height', listHeight);
		list.animate({height: elemHeight}, 500, 'swing', function() {
			
			lessButton.css('display', 'none');
			moreButton.css('display', 'inline-block');
		});
	}

	$("#project .less-project").click(function() {
		showLess($("#project .list-project"), $("#project .elem-project"), $(this), $("#project .more-project"));
		$('html, body').animate({scrollTop: $("#project").offset().top}, 500);
		i = 0;
	});

	$("#work .less-work").click(function() {
		showLess($("#work .work-list"), $("#work .work-list-elem"), $(this), $("#work .more-work"));
		$('html, body').animate({scrollTop: $("#work").offset().top}, 500);
		j = 0;
	});

	initHeight($("#project .list-project"), $("#project .elem-project"), $("#project .more-project"), $("#project .less-project"));
	initHeight($("#work .work-list"), $("#work .work-list-elem"), $("#work .more-work"), $("#work .less-work"));

	$(window).on('scroll resize', resizeList);
});