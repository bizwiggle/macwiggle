$(document).ready(function() {
	$('#OtherServicesForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			service_headline1: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Other service headline must be 64 characters or less'
					},
				}
			},
			
			service1: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Other service text must be 512 characters or less'
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
						message: 'Other service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},
			
			service_headline2: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Other service headline must be 64 characters or less'
					},
				}
			},
			
			service2: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Other service text must be 512 characters or less'
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
						message: 'Other service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},
			
			service_headline3: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Other service headline must be 64 characters or less'
					},
				}
			},
			
			service3: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Other service text must be 512 characters or less'
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
						message: 'Other service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},
			
			service_headline4: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Other service headline must be 64 characters or less'
					},
				}
			},
			
			service4: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Other service text must be 512 characters or less'
					},
				}
			},

			delete_pic4: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         pic4: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Other service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},

			service_headline5: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Other service headline must be 64 characters or less'
					},
				}
			},
			
			service5: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Other service text must be 512 characters or less'
					},
				}
			},

			delete_pic5: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         pic5: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Other service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},	
		}
	});	
});
