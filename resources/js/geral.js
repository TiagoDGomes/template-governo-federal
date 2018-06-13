function onLoad() {
    
}

var menuRetratilPosicaoAberta = false;
function alternarMenuRetratil(){
    if (menuRetratilPosicaoAberta){
        document.body.classList.remove('menu-lateral-aberto');
    } else {
        document.body.classList.add('menu-lateral-aberto');
    }    
    menuRetratilPosicaoAberta = !menuRetratilPosicaoAberta;
}