$(document).ready(function() {
	$('#ContactForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			message: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Message must be 512 characters or less.  If you need to tell us something big, no problem, just give us a call.'
					},
				}
			},

		}
	});	
});
