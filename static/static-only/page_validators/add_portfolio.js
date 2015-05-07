$(document).ready(function() {
	$('#AddPortfolioForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 4096 * 1024,   // 4 MB
                        message: 'A portfolio pic must be less than 4 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			pic_type: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'A portfolio pic is 1 character'
					},
				}
			},

		}
	});	
});
