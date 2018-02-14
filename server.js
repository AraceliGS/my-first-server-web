const express = require('express');
const app = express();
// Creando servidor
const server = app.listen(3000, encender);
function encender() {
    console.log('servidor encendido');
}

app.use(express.static('public'));

app.get('/pokemoncitos/search/:pokename', sendPokemon);

function sendPokemon(request, response) {
    const data = request.params;
    response.send('Hola te envio a' + ' ' + data.pokename + ' ' + 'es lo que estas buscando.')
}

