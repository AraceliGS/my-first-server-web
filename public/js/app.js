// Instanciamos al objeto XMLHttpRequest
const XHR = new XMLHttpRequest;
console.log(XHR);

XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
        console.log(JSON.parse(XHR.responseText));
        console.log(XHR.res);
    } else {
        console.log('Hay un problema en el servidor');
    }
};

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();