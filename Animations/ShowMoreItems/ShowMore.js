//adicionar os parametros data-id e data-class em cada btn
$(function(){
  // Ativar função de carregar mais galerias
  $(".show-more-btn").click(function(e){
    e.preventDefault();
    var qnt = $(this).data("qnt");
    if (qnt == undefined ) {
      qnt = 8;
    }
    console.log(qnt + "");
    var id = $(this).data("id");
    var classOculta = $(this).data("class");
    id = "#"+id;
    var classOcultaAux = classOculta;
    classOculta = "."+classOculta+":hidden";
    // Ativar função de carregar mais galerias
    var pos1 = $(id).offset().top;
    // Selecionar os proximos 8 itens e exibir eles.
    $(classOculta).slice(0, qnt).removeClass(classOcultaAux);
    //posição atual após o deslocamento
    var pos2 = $(id).offset().top;
    //Scrolling to anchor.
    //Regule o tempo na variável variation
    var variation = 2;
    var timeScrolling = ($(id).offset().top  - pos1) * variation;
    $('html, body').delay(150).animate({
      scrollTop: pos2 -($( window ).height()*0.5)
    }, timeScrolling);
    // Caso termine, esconda o botão
    if($(classOculta).length == 0){
      $(id).addClass('hide');
    }

  });
});
