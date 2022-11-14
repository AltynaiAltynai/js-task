const img = [];
const images = document.querySelectorAll('#images-block img');
for(let i = 0; i < images.length; i++){
    images[i].onclick = () => {
        if(images[i].alt){
            img.push(images[i].alt);
        } else{
            alert('Описание отсутсвует');
        }
    }
}
const btn = document.querySelector('#btn');
btn.onclick = () => {
    console.log(img);
}