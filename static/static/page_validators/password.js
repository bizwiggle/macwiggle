$(document).ready(function() {
	$('#PasswordForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			current_password: {
				validators: {
					notEmpty: {
						message: 'The password is required and can\'t be empty'
					},
		/*			regexp: {
						regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
						message: 'Password must contain at least 1 letter and 1 number'
					}, */
               stringLength: {
                  min: 4, 
                  message: 'Password must be atleast 8 characters long'
					},    
				}
			},
			
			new_password: {
				validators: {
					notEmpty: {
						message: 'New password is required and can\'t be empty'
					},
					identical: {
						field: 'confirm_password',
						message: 'The password and confirm password are not the same'
					},
			/*		regexp: {
						regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
						message: 'Password must contain at least 1 letter and 1 number'
					},  */
               stringLength: {
                  min: 8, 
                  message: 'Password must be atleast 8 characters long'
					},    
				}
			},
	
			confirm_password: {
				validators: {
					notEmpty: {
						message: 'The confirm password is required and can\'t be empty'
					},
					identical: {
						field: 'new_password',
						message: 'The password and confirm password are not the same'
					},
			/*		regexp: {
						regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
						message: 'Password must contain at least 1 letter and 1 number'
					},    */
               stringLength: {
                  min: 8, 
                  message: 'Password must be atleast 8 characters long'
					},    
				}
			}
		}
	});	
});
