$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();
    $('#result2').hide();
    $('#btn-back').hide();
	$('#div-mapa').hide();
	$('#div-showImages').hide();
	$('#div-logo').show();	
	
    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        //$('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        $('#result2').hide();
        readURL(this);
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);
        
        // Show loading animation
        $(this).hide();
        $('#div-logo').hide();
        $('.loader').show();
        


        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' ALERTA: Se ha detectado incendio en los siguientes elementos: ');
                $('#result').css('color','#c94c4c');
                $('#result2').text(data);
                $('#result2').css('color','#7e4a35')
                $('#result2').show();
            	//if(data=="Fire") {
                //	$('#result2').css('color','red');
            	//} else {
                //	$('#result2').css('color','green');
            	//}
            },
        });
        
        setTimeout(function(){
        	$('#div-showImages').show();
		}, 500); 
		
        setTimeout(function(){
        	$('#div-mapa').show();
       		$('#btn-back').show();
		}, 1000); 
        

    });
    
    
        // Volver
    $('#btn-back').click(function () {
        // Show and hide
        $(this).hide();
	    $('.image-section').hide();
    	$('.loader').hide();
    	$('#result').hide();
    	$('#result2').hide();
		$('#div-mapa').hide();
		$('#div-showImages').hide();
		$('#btn-predict').show();
		$('#div-logo').show();
    });

});

