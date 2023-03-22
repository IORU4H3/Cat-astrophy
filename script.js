setInterval(function() {
	var color = '#'+Math.floor(Math.random()*16777215).toString(16);
	document.querySelector('body').style.backgroundColor = color;
	document.querySelector('p').style.opacity = '1';
	setTimeout(function() {
		document.querySelector('p').style.opacity = '0';
	}, 1000);
}, 2000);


document.addEventListener('mousemove', function(event) {
	document.getElementById('image').style.left = event.clientX-69 + 'px';
	document.getElementById('image').style.top = event.clientY-52 + 'px';
});


document.addEventListener('click', function(event) {
	var image = document.createElement('img');
	if (Math.random() < 0.1) {
	    var image = document.createElement('img');
        image.src = 'pictures/img5.png';
        image.style.width = '100%';
		var audio = new Audio('audio/flex.mp3');
        setTimeout(function(){
            image.style.width = '130px';
            image.style.height = '130px';
            image.style.left = event.clientX-60 + 'px';
			image.style.top = event.clientY-60 + 'px';
        }, 2000);
	} else {
	    image.src = 'pictures/img3.png';
	    var audio = new Audio('audio/ninja.mp3');
	    image.style.width = '130px';
		image.style.height = '130px';
		image.style.left = event.clientX-60 + 'px';
		image.style.top = event.clientY-60 + 'px';
		
		image.style.animation = Math.random() < 0.5 ? 'spin1 5s linear infinite' : 'spin2 5s linear infinite';
		
		
	}
	image.style.position = 'absolute';
	
	document.body.append(image);
	event.preventDefault();
	audio.play();
	
});


document.addEventListener('contextmenu', function(event) {
	var image = document.createElement('img');
	image.src = 'pictures/img4.png';
	image.style.left = event.clientX-64 + 'px';
	image.style.top = event.clientY-60 + 'px';
	image.style.position = 'absolute';
	image.style.width = '130px';
	image.style.height = '130px';
	document.body.append(image);
	event.preventDefault();		
	var audio = new Audio('audio/flex.mp3');
	audio.play();
});