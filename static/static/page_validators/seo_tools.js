$(document).ready(function() {
	$('#SEOToolsForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			meta_title: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Title must be 48 characters or less'
					},
				}
			},
			
			index_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Home description must be 160 characters or less'
					},
				}
			},
			
			why_us_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Why us description must be 160 characters or less'
					},
				}
			},
			
			services_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Service description must be 160 characters or less'
					},
				}
			},
			
			residential_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Residential service description must be 160 characters or less'
					},
				}
			},
			
			commercial_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Commercial service description must be 160 characters or less'
					},
				}
			},
			
			other_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Other services description must be 160 characters or less'
					},
				}
			},

			about_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'About description must be 160 characters or less'
					},
				}
			},

			contact_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Contact description must be 160 characters or less'
					},
				}
			},


			portfolio_description: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Portfolio description must be 160 characters or less'
					},
				}
			},


		}
	});	
});
