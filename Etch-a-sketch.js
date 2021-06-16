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
        div.addEventListener("mouseover", ()=> {div.classList.toggle('color');}, false )
        container.appendChild(div);
        
        
    }
};
squares();
