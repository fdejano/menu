$('.norte').click(function(){
    $('.menuLateral ul .itensNorte').toggleClass('mostrar');
});

$('.nordeste').click(function(){
    $('.menuLateral ul .itensNordeste').toggleClass('mostrar');
});

$('.centroOeste').click(function(){
    $('.menuLateral ul .itensCentroOeste').toggleClass('mostrar');
});

$('.sudeste').click(function(){
    $('.menuLateral ul .itensSudeste').toggleClass('mostrar');
});

$('.sul').click(function(){
    $('.menuLateral ul .itensSul').toggleClass('mostrar');
});

$('.brasil').click(function(){
    $('.menuLateral ul .itensBrasil').toggleClass('mostrar');
});



$('.btnAbrir').click(function(){
    $('.menuLateral').toggleClass('mostrar');
});

$('.btnFechar').click(function(){
    $('.menuLateral').toggleClass('mostrar');
    $('#framePage').attr('src', '');
});



$('.norte').mouseover(function(){
    $('.menuLateral ul .seta1').toggleClass('girar');
});

$('.nordeste').mouseover(function(){
    $('.menuLateral ul .seta2').toggleClass('girar');
});

$('.centroOeste').mouseover(function(){
    $('.menuLateral ul .seta3').toggleClass('girar');
});

$('.sudeste').mouseover(function(){
    $('.menuLateral ul .seta4').toggleClass('girar');
});

$('.sul').mouseover(function(){
    $('.menuLateral ul .seta5').toggleClass('girar');
});

$('.brasil').mouseover(function(){
    $('.menuLateral ul .seta6').toggleClass('girar');
});


$('.norte').mouseout(function(){
    $('.menuLateral ul .seta1').toggleClass('girar');
});

$('.nordeste').mouseout(function(){
    $('.menuLateral ul .seta2').toggleClass('girar');
});

$('.centroOeste').mouseout(function(){
    $('.menuLateral ul .seta3').toggleClass('girar');
});

$('.sudeste').mouseout(function(){
    $('.menuLateral ul .seta4').toggleClass('girar');
});

$('.sul').mouseout(function(){
    $('.menuLateral ul .seta5').toggleClass('girar');
});

$('.brasil').mouseout(function(){
    $('.menuLateral ul .seta6').toggleClass('girar');
});

const $menuLateral = $('.menuLateral');
$(document).mouseup(e => {
    if (!$menuLateral.is(e.target) && $menuLateral.has(e.target).length === 0)
{
        $menuLateral.removeClass('mostrar')
        $('#framePage').attr('src', '');
        
    }
});