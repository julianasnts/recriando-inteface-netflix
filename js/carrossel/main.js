$('.owl-carousel').owlCarousel({
    loop:true, //carrossel infinito, gira sem parar, false para quando as opções se encerram
    margin:30, //margem entre os quadros
    nav:false, //setas de navegação, true ativa, false retira
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


$('#meuModal').on('shown.bs.modal', function () {
    $('#meuInput').trigger('focus')
  })