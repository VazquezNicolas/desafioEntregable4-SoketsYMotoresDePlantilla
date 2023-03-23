const socket = io()

socket.on('mensajeServidor', message => {
    console.log("message")
})

console.log("Esta vivo!")