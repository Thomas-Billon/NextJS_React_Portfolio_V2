$(document).ready(function() {
    
    var i = 0;
    var max = 4;

    $('#title li').css('display', 'none');
    $('#title li').eq(0).css('display', 'inline-block');
    $('#title .controls').css('display', 'block');

    function controlsColorSwitch(switchSlide) {

        if (i == 0) {
            $('#img-prev').attr('src', 'assets/img/chevron_left.png');
            $('#img-next').attr('src', 'assets/img/chevron_right.png');
        }
        else if (i == switchSlide) {
            $('#img-prev').attr('src', 'assets/img/chevron_left_white.png');
            $('#img-next').attr('src', 'assets/img/chevron_right_white.png');
        }
    }

    function slideNext() {
        ++i;
        if (i > max) {
            i = 0;
        }
        if (i == 0) {
            $('#title li').eq(max).css('z-index', '1');
        }
        else {
            $('#title li').eq(i - 1).css('z-index', '1');
        }

        $('#title li').eq(i).css('left', '100%').css('display', 'inline-block').css('z-index', '2');
        $('#title li').eq(i).animate({ left: '0' }, 500, 'swing', function() {

            $('#title li').eq(i).css('left', 'auto');
            if (i == 0) {
                $('#title li').eq(max).css('display', 'none');
            }
            else {
                $('#title li').eq(i - 1).css('display', 'none');
            }
            controlsColorSwitch(1);
        });
    }

    function slidePrev() {
        --i;
        if (i < 0) {
            i = max;
        }

        if (i == max) {
            $('#title li').eq(0).css('z-index', '1');
        }
        else {
            $('#title li').eq(i + 1).css('z-index', '1');
        }

        $('#title li').eq(i).css('right', '100%').css('display', 'inline-block').css('z-index', '2');
        $('#title li').eq(i).animate({ right: '0' }, 500, 'swing', function() {

            $('#title li').eq(i).css('right', 'auto');
            if (i == max) {
                $('#title li').eq(0).css('display', 'none');
            }
            else {
                $('#title li').eq(i + 1).css('display', 'none');
            }
            controlsColorSwitch(max);
        });
    }

    $('.control-next').click(function() {
        slideNext();
    });

    $('.control-prev').click(function() {
        slidePrev();
    });

    function slideImg() {
        setTimeout(function() {
            slideNext();
    	    slideImg();
        }, 10000);
    }
    slideImg();
});
