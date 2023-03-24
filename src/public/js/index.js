const socket = io()

socket.on('mensajeServidor', message => {
    console.log(message)
})

socket.emit('agregarProducto', product)

socket.on('actualizacionLista', product => {
    if(product.status === 0){
        //agrego producto
    }else {
        //elimino producto
    }
})