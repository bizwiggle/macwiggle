$(document).ready(function() {
	$('#WhyUsForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			reason1: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Why us headline must be 48 characters or less'
					},
				}
			},

			reason1_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 350,
						message: 'Why us text must be 350 characters or less'
					},
				}
			},

			delete_reason1_pic: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			reason1_pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid why us pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			reason2: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Why us headline must be 48 characters or less'
					},
				}
			},

			reason2_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 350,
						message: 'Why us text must be 350 characters or less'
					},
				}
			},

			delete_reason2_pic: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			reason2_pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid why us pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			reason3: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Why us headline must be 48 characters or less'
					},
				}
			},

			reason3_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 350,
						message: 'Why us text must be 350 characters or less'
					},
				}
			},

			delete_reason3_pic: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			reason3_pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid why us pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			reason4: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Why us headline must be 48 characters or less'
					},
				}
			},

			reason4_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 350,
						message: 'Why us text must be 350 characters or less'
					},
				}
			},

			delete_reason4_pic: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			reason4_pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid why us pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			reason5: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Why us headline must be 48 characters or less'
					},
				}
			},

			reason5_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 350,
						message: 'Why us text must be 350 characters or less'
					},
				}
			},

			delete_reason5_pic: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			reason5_pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid why us pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

		}
	});	
});
