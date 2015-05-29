$('#version').html('using jQuery ' + $.fn.jquery);
$('textarea').expandable();

$('textarea').textcounter({
	max: 100,
	stopInputAtMaximum: true
});

$('textarea').trigger('update');