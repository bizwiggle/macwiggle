$(document).ready(function() {
	$('#SocialForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			facebook_url: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid Facebook URL for the social link'
					}
				}
			},
			
			linkedin_url: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid Linkedin URL for the social link'
					}
				}
			},
			
			google_plus_url: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid Google Plus URL for the social link'
					}
				}
			},
			
			twitter_url: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid Twitter URL for the social link'
					}
				}
			},
			
			tumblr_url: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid Tumblr URL for the social link'
					}
				}
			},
			
			pinterest_url: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid Pinterest URL for the social link'
					}
				}
			},
			
			
			
			
		}
	});	
});
