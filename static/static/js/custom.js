// Add here all your JS customizations
$(document).ready(
function(){


$(".selectQuote a").livequery('click',function(){
	alert ("Parabéns, o código está funcionandokkkkkk.");
   id_mac=$(this)attr("rel")
		$.ajax({
			type:"GET",
			url:"/get_mac/",
			data:"id_mac:id_mac",
			success:function (atual){
				$.(".firtDiv").slideUp('slow')
				$.(".showQuote").html(atual)
				$.(".firtDiv").slideDown('slow')
			}
			})
	
			return false
})


	



});
$(".selectQuote").livequery('click',function(){
	alert ("llllParabéns, o código está funcionando.");});
