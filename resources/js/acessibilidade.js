window.acessibilidade = function(){};

window.acessibilidade.altoContraste = function(){};

window.acessibilidade.altoContraste.ativo = null;

window.acessibilidade.altoContraste.classNameValue = 'contraste';

window.acessibilidade.altoContraste.getSetting = function(){
    var cookieValue = getCookie('layout_classes');
    return cookieValue.indexOf('contraste') >= 0;
}
window.acessibilidade.altoContraste.setSetting = function(value){
    var className = window.acessibilidade.altoContraste.classNameValue;
    var cookieValue = getCookie('layout_classes');
    cookieValue = cookieValue.replace(className, '');
    setCookie('layout_classes', cookieValue);
    if (value){
        setCookie('layout_classes', cookieValue + ' ' + className);
    } 
    cookieValue = getCookie('layout_classes');
       
}

window.acessibilidade.altoContraste.isActive = function () {
    return document.body.classList.contains(window.acessibilidade.altoContraste.classNameValue);
}

window.acessibilidade.altoContraste.setActive = function (value) {
    var className = window.acessibilidade.altoContraste.classNameValue;
    if (value) {
        document.body.classList.add(className);
    } else {
        document.body.classList.remove(className);        
    }
    console.log("altoContraste:", value);
    window.acessibilidade.altoContraste.setSetting(value);
}

window.acessibilidade.altoContraste.setActive(window.acessibilidade.altoContraste.getSetting());

window.acessibilidade.altoContraste.alternar = function(){
    window.acessibilidade.altoContraste.setActive(!window.acessibilidade.altoContraste.isActive())
}
