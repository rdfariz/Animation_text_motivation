$(document).ready(function(){

	$('.click').click(function(){
		openFullscreen();
		var play = document.getElementById('au');
		play.play();

		setTimeout(function(){
			$('.header').addClass('changebg');
		}, 25);
		
		$('article').addClass('show_article');

		$('.uname').addClass('hide_uname');
		$('.container_img').addClass('hide_pp');
		$('.univ').addClass('hide_univ');
		$('.quotes').addClass('hide_quotes');

//PART1//
		setTimeout(function(){
			$('#a').addClass('show_span');
		}, 500);
		setTimeout(function(){
			$('#b').addClass('show_span');
		}, 2500);
		setTimeout(function(){
			$('#c').addClass('show_span');
		}, 4500);

		setTimeout(function(){
			$('#a').removeClass('show_span');
		}, 8200);
		setTimeout(function(){
			$('#b').removeClass('show_span');
		}, 8200);
		setTimeout(function(){
			$('#c').removeClass('show_span');
		}, 8200);

//PART2//
		setTimeout(function(){
			$('#d').addClass('show_span');
		}, 9000);
		setTimeout(function(){
			$('#e').addClass('show_span');
		}, 11000);
		setTimeout(function(){
			$('#e2').addClass('show_span');
		}, 13500);

		setTimeout(function(){
			$('#d').removeClass('show_span');
		}, 15000);
		setTimeout(function(){
			$('#e').removeClass('show_span');
		}, 15000);
		setTimeout(function(){
			$('#e2').removeClass('show_span');
		}, 15000);

//PART3//
		setTimeout(function(){
			$('#f').addClass('show_span');
		}, 15500);
		setTimeout(function(){
			$('#g').addClass('show_span');
		}, 16500);
		setTimeout(function(){
			$('#h').addClass('show_span');
		}, 17800);

		setTimeout(function(){
			$('#f').removeClass('show_span');
		}, 19500);
		setTimeout(function(){
			$('#g').removeClass('show_span');
		}, 19500);
		setTimeout(function(){
			$('#h').removeClass('show_span');
		}, 19500);

//PART4//
		setTimeout(function(){
			$('#i').addClass('show_span');
		}, 22000);
		setTimeout(function(){
			$('#j').addClass('show_span');
		}, 23000);
		setTimeout(function(){
			$('#k').addClass('show_span');
		}, 24000);

		setTimeout(function(){
			$('#i').removeClass('show_span');
		}, 26000);
		setTimeout(function(){
			$('#j').removeClass('show_span');
		}, 26000);
		setTimeout(function(){
			$('#k').removeClass('show_span');
		}, 26000);

//PART5//
		setTimeout(function(){
			$('#l').addClass('show_span');
		}, 27000);
		setTimeout(function(){
			$('#m').addClass('show_span');
		}, 30500);
		setTimeout(function(){
			$('#n').addClass('show_span');
		}, 35000);
		setTimeout(function(){
			$('#o').addClass('show_span');
		}, 37000);

		setTimeout(function(){
			$('#l').removeClass('show_span');
		}, 29000);
		setTimeout(function(){
			$('#m').removeClass('show_span');
		}, 33000);
		setTimeout(function(){
			$('#n').removeClass('show_span');
		}, 40000);
		setTimeout(function(){
			$('#o').removeClass('show_span');
		}, 40000);


//PART6//
		setTimeout(function(){
			$('#p').addClass('show_span');
		}, 41000);
		setTimeout(function(){
			$('#q').addClass('show_span');
		}, 43000);
		setTimeout(function(){
			$('#r').addClass('show_span');
		}, 45000);

		setTimeout(function(){
			$('#p').removeClass('show_span');
		}, 48000);
		setTimeout(function(){
			$('#q').removeClass('show_span');
		}, 48000);
		setTimeout(function(){
			$('#r').removeClass('show_span');
		}, 48000);

//PART7//
		setTimeout(function(){
			$('#s').addClass('show_span');
		}, 48000);
		setTimeout(function(){
			$('#t').addClass('show_span');
		}, 50000);

		setTimeout(function(){
			$('#s').removeClass('show_span');
		}, 53000);
		setTimeout(function(){
			$('#t').removeClass('show_span');
		}, 53000);

//PART8//
		setTimeout(function(){
			$('#u').addClass('show_span');
		}, 54500);
		setTimeout(function(){
			$('#v').addClass('show_span');
		}, 56500);

		setTimeout(function(){
			$('#u').removeClass('show_span');
		}, 60000);
		setTimeout(function(){
			$('#v').removeClass('show_span');
		}, 59000);

//PART9//
		setTimeout(function(){
			$('#w').addClass('show_span');
		}, 61000);
		setTimeout(function(){
			$('#x').addClass('show_span');
		}, 63000);
		setTimeout(function(){
			$('#y').addClass('show_span');
		}, 65000);
		setTimeout(function(){
			$('#z').addClass('show_span');
		}, 69000);

		setTimeout(function(){
			$('#w').removeClass('show_span');
		}, 68000);
		setTimeout(function(){
			$('#x').removeClass('show_span');
		}, 68000);
		setTimeout(function(){
			$('#y').removeClass('show_span');
		}, 68000);
		setTimeout(function(){
			$('#z').removeClass('show_span');
		}, 74000);

//MATERIAL//


function closeFullscreen() {
	if (document.exitFullscreen) {
	  document.exitFullscreen();
	} else if (document.mozCancelFullScreen) {
	  document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
	  document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
	  document.msExitFullscreen();
	}
  }

		setTimeout(function(){
			var play = document.getElementById('au');
			play.currentTime = 0;
			play.pause();
			
			$('.header').removeClass('changebg');
			$('article').removeClass('show_article');
	
			$('.uname').removeClass('hide_uname');
			$('.container_img').removeClass('hide_pp');
			$('.univ').removeClass('hide_univ');
			$('.quotes').removeClass('hide_quotes');
	
			$('#a').removeClass('show_span');
			$('#b').removeClass('show_span');
			$('#c').removeClass('show_span');
			$('#d').removeClass('show_span');
			$('#e').removeClass('show_span');
			$('#f').removeClass('show_span');
			$('#g').removeClass('show_span');
			$('#h').removeClass('show_span');
			$('#i').removeClass('show_span');
			$('#j').removeClass('show_span');
			$('#k').removeClass('show_span');
			$('#l').removeClass('show_span');
			$('#m').removeClass('show_span');
			$('#n').removeClass('show_span');
			$('#o').removeClass('show_span');
			$('#p').removeClass('show_span');
			$('#q').removeClass('show_span');
			$('#r').removeClass('show_span');
			$('#s').removeClass('show_span');
			$('#t').removeClass('show_span');
			$('#u').removeClass('show_span');
			$('#v').removeClass('show_span');
			$('#w').removeClass('show_span');
			$('#x').removeClass('show_span');
			$('#y').removeClass('show_span');
			$('#z').removeClass('show_span');
		}, 74000);

		setTimeout(function(){
			closeFullscreen()
		}, 75500);

	});


});

var elem = document.documentElement;
function openFullscreen() {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.mozRequestFullScreen) { /* Firefox */
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) { /* IE/Edge */
		elem.msRequestFullscreen();
	}
}
