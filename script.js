var main = document.querySelector('.card');
var like=document.querySelector('i');


main.addEventListener('dblclick', function(){
    like.style.transform='translate(-50%, -50%) scale(2)';
    like.style.opacity=0.8;

    setTimeout(function(){
        like.style.transform='translate(-50%, -50%) scale(0)';

    
        },2000)

    setTimeout(function(){
    like.style.opacity=0;

    },1000)
})