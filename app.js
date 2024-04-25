//Jquery
//Funcão para fechar o menu de navegação mobile
$(".nav-link").on("click", function(){
    $('.navbar-collapse').collapse('hide');
 });


 //Funcão para animar o Scroll automatico
 $('.nav-item').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href')
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset -80
    }, 800)

    console.log(targetOffset)
    console.log(id)
 })
//Jquery