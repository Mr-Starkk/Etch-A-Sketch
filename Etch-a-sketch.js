function area(){
    console.log("hello")
    size = prompt('size?');
    squares(size);
}


function squares(size = 16){
    const container = document.querySelector('#container');
    for(i=0; i < size*size; i++){
        const div = document.createElement('div');
        div.id = 'square';
        div.addEventListener("mouseover", changeColor )
        container.appendChild(div);
        
        
    }
};
squares();

function changeColor(e){
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG},${randomB})`;

};