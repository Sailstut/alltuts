$(document).ready(function(){



	$('.form-signin').validate({

		rules: {
			name:{
				required: true
			},
			email: {
				required: true,
				email: true
			}
			password:{
				minlenght: 6,
				required: true,
			},
			confirmation:{
				minlength: 6,
				equalaTo: "#password"
			}

		},
		success: function(element){

			element.text('OK!').addClass('valid');
		}
	})
})