     	

        	$(document).ready(function() {
 				var cami = 10;
        	    $("#local").click(function() {
        	        $("#caso-local").collapse('show');
        	        $("#caso-despacho").collapse('hide');
        	    });
        	    $("#despacho").click(function() {
        	        $("#caso-despacho").collapse('show');
        	        $("#caso-local").collapse('hide');
        	    });
        	});



function validateForm() {
	var nombre = document.getElementsByName('nombre')[0].value;
	var cantidad = document.getElementsByName('cantidad')[0].value;
	return false;

} 





