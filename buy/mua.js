document.addEventListener("DOMContentLoaded", function(){
    console.log('Loaded page')
    window.addEventListener('scroll',function(){
        if(window.pageYOffset<250){
            console.log('dang o vi tri : '),window.pageYOffset;
        }
        if(window.pageYOffset>250)
        console.log(' dang o vi tri lon hon 250');
    })
})

document.addEventListener("DOMContentLoaded", function(){
    var top = document.querySelector('.top');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>250){
            top.classList.add('topnho');
        }else{
            top.classList.remove("topnho");
        }
      
    })
})