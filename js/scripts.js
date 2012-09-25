jQuery(function($) {
	
	/*
	var default_max = 2;
	
	$('#slider').slider({
		range: 'min',
		value: 1,
		min: 0,
		max: 2,
		step: .25,
		slide: function( event, ui ) {
			$("#lunar_take").val(ui.value);
			$( "#amount" ).val( "$" + ui.value );
			$( "#amount2" ).val( "$" + (default_max - ui.value) );
		}
	});
	
	$('#max_value').change(function(){
		var max_value = $(this).val();
		var default_value = max_value/2;
		
		$('#slider').slider({
			max: max_value,
			value: default_value,
			min: 0,
			step: .25,
			slide: function( event, ui ) {
				$("#lunar_take").val(ui.value);
				$( "#amount" ).val( "$" + ui.value );
				$( "#amount2" ).val( "$" + (max_value - ui.value) );
			}
		});
		
		$("#donation_amount").val(max_value);
		$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
		$( "#amount2" ).val( "$" + $( "#slider" ).slider( "value" ) );
	});
	
	$('#paypalbutton').click(function(){
		$('#donation_amount').val($('#max_value').val());
	});
	
	$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	$( "#amount2" ).val( "$" + $( "#slider" ).slider( "value" ) );
	*/
});

Hyphenator.config({
	minwordlength : 4
});
Hyphenator.run();