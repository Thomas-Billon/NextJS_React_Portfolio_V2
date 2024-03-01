$(document).ready(function() {

	var submit = 0;

	$('.contact-form').submit(function(e)
	{
	    e.preventDefault();
	    if (submit == 0) {
	    	$('.contact-form-send').html('<i class="fa fa-spinner fa-pulse"></i><span class="sr-only">Loading...</span>');

		    var name = $('.contact-form-name').val();
		    var email = $('.contact-form-email').val();
		    var message = $('.contact-form-message').val();
		    var array = {'name': name, 'email': email, 'message': message, 'submit': "submit"};

		    if(name != "" && email != "" && message != "")
		    {
		        $.ajax({
		            url: $(this).attr('action'),
		            type: $(this).attr('method'),
		            data: array
		        }).always(function(text) {
	    			if (text == "Merci !") {
						$('.contact-form-send').text(text);
	    				$('.contact-form-send').css('background-color', 'lime');
	    				submit = 1;
	    			} else {
						$('.contact-form-send').text('Erreur');
	    				$('.contact-form-send').css('background-color', 'red');
	    			}
	  			});
		    }
		}
	});
});