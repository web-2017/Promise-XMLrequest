// страница 182 //115

function sendAj(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);
        xhr.responseType = 'json'; //тип ответа от сервера json
        xhr.addEventListener('load', ()=>{
            resolve(xhr.response); //тут свойтво меняется на просто response
        });
        xhr.addEventListener('load', ()=>{
            reject();
        });
        xhr.send();
    });
}

sendAjax.addEventListener('click', () => {
    sendAj('list.json').then( file =>{
        for({name} of file){
            container.innerHTML += name + '<br>'
        }
    })
});
