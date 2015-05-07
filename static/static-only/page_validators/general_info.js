$(document).ready(function() {
	$('#GeneralInfoForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			business_name: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Business name must be 64 characters or less'
					},
				}
			},

			email: {
				validators: {
					emailAddress: {
						message: 'Input a valid email address'
					}
				}
			},
			
			phone: {
				validators: {
					phone: {
						message: 'A valid phone number can consist of numbers, dots, hyphens, parentheses, and spaces'
					}
				}
			},

			fax: {
				validators: {
					phone: {
						message: 'A valid fax number can consist of numbers, dots, hyphens, parentheses, and spaces'
					}
				}
			},

			phone: {
				validators: {
					phone: {
						message: 'A valid phone number can consist of numbers, dots, hyphens, parentheses, and spaces'
					}
				}
			},
			
			street_address: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Address must be 64 characters or less'
					},
				}
			},

			extra_address: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Address cont must be 32 characters or less'
					},
				}
			},

			city: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'City must be 64 characters or less'
					},
				}
			},

			state: {
				validators: {
					stringLength: {
						min: 1,
						max: 2,
						message: 'The zipcode must contain 5 digits'
					},
				}
			},

			zip_code: {
				validators: {
					regexp: {
						regexp: /^\d{5}$/,
						message: 'Input a 5 digit US zipcode'
					}
				}
			},

			logo: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 4096 * 1024,   // 4 MB
                        message: 'Logo image must be less than 4 MB.  Allowed image types are jpeg, png and gif'
                    }	
				}
			},

			why_us_brief: {
				validators: {
					stringLength: {
						min: 1,
						max: 200,
						message: 'Brief why us must be 200 characters or less'
					},
				}
			},

			banner_text: {
				validators: {
					stringLength: {
						min: 1,
						max: 120,
						message: 'Bottom banner text must be 120 characters or less'
					},
				}
			},

		}
	});	
});
