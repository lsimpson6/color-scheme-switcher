var sideBySide = document.querySelectorAll('.title-and-text-plus-cta');
  
(function(){

for(var i = 0; i < sideBySide.length; i++){
    if($(sideBySide[i]).hasClass('color-scheme-none')){
        sideBySide[i].classList.replace('color-scheme-none', 'color-scheme-blue');
    }                                    
}

})($);
