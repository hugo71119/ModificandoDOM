const nuevoSaludo = document.querySelector('.nuevoSaludo')
const crearNuevoSaludo = document.querySelector('.crearNuevoSaludo')
const nuevoMensaje = document.querySelector('.nuevoMensaje')
const contenedorMensaje = document.querySelector('.contenedorMensaje')
const texto = document.querySelector('.texto')

let saludos = ['Hello, world!', 'Hola Mundo', 'Hola qué tal?', 'Cómo estás?', 'Oi', 'Tudo bem?', 'How are you?', 'Todo bien?']



nuevoSaludo.addEventListener('click', () => {
    let random = Math.floor(Math.random() * saludos.length)
    texto.textContent = saludos[random]
})
nuevoMensaje.addEventListener('input', verificandoCampo)
crearNuevoSaludo.addEventListener('click', subirSaludo)

function verificandoCampo(){
    if ((nuevoMensaje.value).length >= 2) {
        crearNuevoSaludo.disabled = false
    }else{
        crearNuevoSaludo.disabled = true
    }
}


function subirSaludo(e){
    e.preventDefault()
    saludos.push(nuevoMensaje.value)
    texto.textContent = nuevoMensaje.value

    nuevoMensaje.value = ''
    verificandoCampo()
}