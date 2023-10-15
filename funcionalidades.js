$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 100);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

const form =document.getElementById('formulario_contacto');

form.addEventListener('submit', function (evt){
	evt.preventDefault();
	form.submit();
	console.log("entrando")
      Swal.fire({
		icon: 'success',
        title: "Datos enviados",
		timer:2000
	  })
});