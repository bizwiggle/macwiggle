$(document).ready(function() {
	$('#IndexForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			why_us_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Homepage why us must be 160 characters or less'
					},
				}
			},

			about_blurb: {
				validators: {
					stringLength: {
						min: 1,
						max: 160,
						message: 'Homepage about must be 160 characters or less'
					},
				}
			},
			
			slider_pic: {
				validators: {
					stringLength: {
						min: 1,
						max: 2,
						message: 'Slider pic must be 2 characters or less'
					},
				}
			},

			slider_txt_top1: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Top slider text must be 32 characters or less'
					},
				}
			},

			slider_txt_bottom1: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Bottom slider text must be 32 characters or less'
					},
				}
			},

			slider_link1: {
				validators: {
					stringLength: {
						min: 1,
						max: 30,
						message: 'Slider link must be 30 characters or less'
					},
				}
			},
			
			slider_txt_top2: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Top slider text must be 32 characters or less'
					},
				}
			},

			slider_txt_bottom2: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Bottom slider text must be 32 characters or less'
					},
				}
			},

			slider_link2: {
				validators: {
					stringLength: {
						min: 1,
						max: 30,
						message: 'Slider link must be 30 characters or less'
					},
				}
			},
			
			slider_txt_top3: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Top slider text must be 32 characters or less'
					},
				}
			},

			slider_txt_bottom3: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Bottom slider text must be 32 characters or less'
					},
				}
			},

			slider_link3: {
				validators: {
					stringLength: {
						min: 1,
						max: 30,
						message: 'Slider link must be 30 characters or less'
					},
				}
			},

			slider_txt_top4: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Top slider text must be 32 characters or less'
					},
				}
			},

			slider_txt_bottom4: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Bottom slider text must be 32 characters or less'
					},
				}
			},

			slider_link4: {
				validators: {
					stringLength: {
						min: 1,
						max: 30,
						message: 'Slider link must be 30 characters or less'
					},
				}
			},

			slider_txt_top5: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Top slider text must be 32 characters or less'
					},
				}
			},

			slider_txt_bottom5: {
				validators: {
					stringLength: {
						min: 1,
						max: 32,
						message: 'Bottom slider text must be 32 characters or less'
					},
				}
			},

			slider_link5: {
				validators: {
					stringLength: {
						min: 1,
						max: 30,
						message: 'Slider link must be 30 characters or less'
					},
				}
			},
			
			hello_title: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Hello section title must be 48 characters or less'
					},
				}
			},
			
			hello_txt: {
				validators: {
					stringLength: {
						min: 1,
						max: 512,
						message: 'Hello section text must be 512 characters or less'
					},
				}
			},

			delete_hello_pic: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			hello_pic: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Hello pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			delete_affilation_pic1: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			affilation_pic1: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Affilation pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			affilation1_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid affilation URL for the link'
					}
				}
			},
			
			delete_affilation_pic2: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			affilation_pic2: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Affilation pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			affilation2_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid affilation URL for the link'
					}
				}
			},

			delete_affilation_pic3: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			affilation_pic3: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Affilation pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			affilation3_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid affilation URL for the link'
					}
				}
			},

			delete_affilation_pic3: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			affilation_pic3: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Affilation pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			affilation3_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid affilation URL for the link'
					}
				}
			},

			delete_affilation_pic4: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			affilation_pic4: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Affilation pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			affilation4_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid affilation URL for the link'
					}
				}
			},

			delete_affilation_pic5: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			affilation_pic5: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Affilation pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			affilation5_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid affilation URL for the link'
					}
				}
			},

			delete_affilation_pic6: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			affilation_pic6: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'Affilation pic must be less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			affilation6_URL: {
				validators: {
					regexp: {
						regexp: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
						message: 'Input a valid affilation URL for the link'
					}
				}
			},

		}
	});	
});
