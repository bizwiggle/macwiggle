$(document).ready(function() {
	$('#ServicesForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			service_area_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Service area description must be 512 characters or less'
					},
				}
			},

			service_list1: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list1_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list2: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list2_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list3: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list3_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list4: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list4_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list5: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list5_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list6: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list6_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list7: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list7_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list8: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list8_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list9: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list9_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			service_list10: {
				validators: {
					stringLength: {
						min: 1,
						max: 64,
						message: 'Service list item must be 64 characters or less'
					},
				}
			},

			service_list10_link: {
				validators: {
					stringLength: {
						min: 1,
						max: 1,
						message: 'Service list link can only be 1 character'
					},
				}
			},

			residential_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Residential text must be 256 characters or less'
					},
				}
			},

			delete_residential_pic: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         residential_pic: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Residential service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},

			comercial_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Commercial text must be 256 characters or less'
					},
				}
			},

			delete_comercial_pic: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         comercial_pic: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Commercial service pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},

			other_services_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Other services text must be 256 characters or less'
					},
				}
			},

			delete_other_services_pic: {
				validators: {
					choice: {
						min: 0,
						max: 1,
						message: ''
					}
				}
			},

         other_services_pic: {
            validators: {
               file: {
						extension: 'jpeg,png,jpg,gif,JPG',
						type: 'image/jpeg,image/png,image/gif',
						maxSize: 2048 * 1024,   // 2 MB
						message: 'Other services pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}
				}
			},

		}
	});	
});
