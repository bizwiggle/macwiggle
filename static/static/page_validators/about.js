$(document).ready(function() {
	$('#AboutForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			headline: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'About headline must be 64 characters or less'
					},
				}
			},

			text: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'About text must be 512 characters or less'
					},
				}
			},

			delete_pic: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 4096 * 1024,   // 4 MB
                        message: 'About pic must be less than 4 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			info_headline: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'About Us list headline must be 32 characters or less'
					},
				}
			},

			info1: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'List item must be 64 characters or less'
					},
				}
			},

			info2: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'List item must be 64 characters or less'
					},
				}
			},

			info3: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'List item must be 64 characters or less'
					},
				}
			},

			info4: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'List item must be 64 characters or less'
					},
				}
			},

			info5: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'List item must be 64 characters or less'
					},
				}
			},

		}
	});	
});
