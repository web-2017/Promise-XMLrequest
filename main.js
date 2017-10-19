// страница 182 //115

function sendAj(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', url);
        xhr.addEventListener('load', ()=>{
            resolve(xhr.responseText);
        });
        xhr.addEventListener('load', ()=>{
            reject();
        });
        xhr.send();
    });
}

sendAjax.addEventListener('click', () => {
    sendAj('list.json').then( file =>{
        container.innerText = file;
        let result = JSON.parse(file);
    })
});
