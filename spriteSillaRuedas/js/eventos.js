var fondo = document.querySelector('.content')
var humo = document.querySelector('.humo')
var luz = document.querySelector('.luz')
var ruedas = document.querySelector('.ruedas')
var ruedita = document.querySelector('.ruedita')

fondo.addEventListener('click', Animaciones)

function Animaciones(){
    fondo.classList.add('fondoAnimado')
    humo.classList.remove('oculto')
    humo.classList.add('humoAnimado')
    luz.classList.remove('oculto')
    luz.classList.add('luzAnimada')
    ruedas.classList.add('ruedasAnimadas')
    ruedita.classList.add('rueditaAnimada')


}