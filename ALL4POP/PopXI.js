var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 13; i++) {
		document.dispatchEvent(event);
	}
}, 59);
