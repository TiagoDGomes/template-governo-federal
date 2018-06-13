function onLoad() {
    
}
function fadeIn(el) {
    el.style.opacity = 0;  
    el.style.display = 'block';
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
      last = +new Date();  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } 
    };  
    tick();
}

var menuRetratilPosicaoAberta = false;
function alternarMenuRetratil(){
    var menuLateral = document.getElementById('menu-lateral');
    var tituloMenuRetratilA = document.getElementById('titulo-menu-retratil').children[0];
    if (menuRetratilPosicaoAberta){
        menuLateral.style.display = 'none';
        tituloMenuRetratilA.style.backgroundPositionY = 'initial';
    } else {
        fadeIn(menuLateral);
        tituloMenuRetratilA.style.backgroundPositionY = '-73px';
    }    
    menuRetratilPosicaoAberta = !menuRetratilPosicaoAberta;
}