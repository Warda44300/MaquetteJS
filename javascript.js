

setInterval(function(){
	var countDownDate = new Date("March 22, 2021").getTime();

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);



	$('#jours').html(days + ' j');
	$('#heures').html(hours);
	$('#minute').html(minutes);
	$('#secondes').html(seconds)
	
}, 1000)
