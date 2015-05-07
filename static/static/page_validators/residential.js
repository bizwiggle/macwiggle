$(document).ready(function() {
	$('#ResidentialForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			paragraph_headline1: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Residential service headline must be 64 characters or less'
					},
				}
			},
			
			paragraph1: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Residential service text must be 512 characters or less'
					},
				}
			},

			delete_pic1: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         pic1: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Residential service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},
			
			paragraph_headline2: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Residential service headline must be 64 characters or less'
					},
				}
			},
			
			paragraph2: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Residential service text must be 512 characters or less'
					},
				}
			},

			delete_pic2: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         pic2: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Residential service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},
			
			paragraph_headline3: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Residential service headline must be 64 characters or less'
					},
				}
			},
			
			paragraph3: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Residential service text must be 512 characters or less'
					},
				}
			},

			delete_pic3: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         pic3: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Residential service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},

		}
	});	
});
