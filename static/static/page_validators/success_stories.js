$(document).ready(function() {
	$('#SuccessStoriesForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			story1: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Testimonial must be 256 characters or less'
					},
				}
			},

			story1_name: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Testimonial name must be 64 characters or less'
					},
				}
			},

			story1_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid testimonial URL'
					}
				}
			},
			
			story2: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Testimonial must be 256 characters or less'
					},
				}
			},

			story2_name: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Testimonial name must be 64 characters or less'
					},
				}
			},

			story2_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid testimonial URL'
					}
				}
			},
			
			story3: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Testimonial must be 256 characters or less'
					},
				}
			},

			story3_name: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Testimonial name must be 64 characters or less'
					},
				}
			},

			story3_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid testimonial URL'
					}
				}
			},

			other_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input valid URL for external testimonials'
					}
				}
			},




		}
	});	
});
