$(document).ready(function() {
	$('#OurPeopleForm').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
	 		invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			
			title1: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text1: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
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
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			title2: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text2: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
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
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},			

			title3: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text3: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
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
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},			

			title4: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text4: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
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
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},			

			title5: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text5: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
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
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},			

			title6: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text6: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
					},
				}
			},

			delete_pic6: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			pic6: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},			

			title7: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text7: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
					},
				}
			},

			delete_pic7: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			pic7: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			title8: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text8: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
					},
				}
			},

			delete_pic8: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			pic8: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},

			title9: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text9: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
					},
				}
			},

			delete_pic9: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			pic9: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},
			
			title10: {
				validators: {
					stringLength: {
						min: 1,
						max: 48,
						message: 'Our people headline must be 48 characters or less'
					},
				}
			},

			text10: {
				validators: {
					stringLength: {
						min: 1,
						max: 256,
						message: 'Our people text must be 256 characters or less'
					},
				}
			},

			delete_pic10: {
				validators: {
					choice: {
							min: 0,
							max: 1,
							message: ''
					}
				}
			},

			pic10: {
 				validators: {
					file: {
                        extension: 'jpeg,png,jpg,gif,JPG',
                        type: 'image/jpeg,image/png,image/gif',
                        maxSize: 2048 * 1024,   // 2 MB
                        message: 'A valid our people pic is less than 2 MB.  Allowed image types are jpeg, png and gif'
					}	
				}
			},	
		}
	});	
});
