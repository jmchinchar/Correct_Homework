$('#circle').click(function(){
	alert('Clicked');
});

$('.square').click(function(){
	alert('Such a square...');
});



$('#circle'),click(function(){
	$('p').html("We've changed the text!");
	});
$('#circle'),hover(function(){
	$('p').html("We've updated the text!");
	});

$('.square').hover(function(){
	$(this).css('background-color', 'blue');
})

$('#circle').click(function(){
	$('img').attr('src', 'https://www.tajmahal.gov.in/images/View_taj_mahal/night3.jpg')
});




$('.square').hover(function(){
	$(this).css('width', '400px');
})

$('.square').click(function()){
	$(this).toggleClass("giant");
}