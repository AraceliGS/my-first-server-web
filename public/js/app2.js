// alert('Hola mundo desde mi server');
const btn = document.querySelector('#btn');
const img = document.querySelector('#photo');

btn.addEventListener('click', function() {
    const XHR = new XMLHttpRequest;
    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status == 200) {
            console.log(XHR.responseText);
            const data = JSON.parse(XHR.responseText);
            console.log(data.message);
            img.src = data.message;
        } else {
            console.log('Hay un problema en el servidor');
        }
    };
    
    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
    XHR.send();
});


