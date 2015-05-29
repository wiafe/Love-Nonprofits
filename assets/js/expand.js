$('textarea').expandable();
$('textarea').trigger('update');

$('textarea').textcounter({
	max: 100,
	stopInputAtMaximum: true
});