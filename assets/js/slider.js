var unslider = $('.banner').unslider({
	speed: 500,
	delay: 3000,
	complete: function() {},
	keys: true,
	dots: false,
	fluid: true
});

$('.arrows').click(function() {
    var direction = this.className.split(' ')[1];
    
    //  Either do unslider.data('unslider').next() or .prev() depending on the className
    unslider.data('unslider')[direction]();
    console.log(direction());
});