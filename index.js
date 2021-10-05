




//Animacion en el título al entrar
$('.fade-in').prepend('<a href="./index.html" style="display:none" class ="titulo-color"> INFOOR 3D</a>')
$('a').fadeIn(3000);




/***MODO NOCTURNO***/

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {

document.body.classList.toggle('dark');
btnSwitch.classList.toggle('active');

// Guardar en LocalStorage

if (document.body.classList.contains('dark')){

    localStorage.setItem('Modo Oscuro','verdadero');
    
    }
    else{
          localStorage.setItem('Modo Oscuro','falso');
        }

});

 //Mantener el modo elegido al F5

    if (localStorage.getItem('Modo Oscuro')=== ('verdadero')){

        document.body.classList.add('dark');
    }
    else{
        document.body.classList.remove('dark');
        }

/*****FIN MODO NOCTURNO******/



/***BOTON ARRIBA***/

window.onscroll = function (){

    if (document.documentElement.scrollTop >100){


       // console.log(document.documentElement.scrollTop );

        $('.btn-container').addClass('.show');
    }else{
        $('.btn-container').removeClass('.show');
    }
}

document.querySelector('.btn-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/***FIN BOTON ARRIBA****/