function squares(){
    const container = document.querySelector('#container');
    for(i=0; i < 16*16; i++){
        const div = document.createElement('div');
        div.id = 'square';
        container.appendChild(div);
        
        
    }
};
squares();

document.getElementById('square').addEventListener('hover', changebackground());


function changebackground(){
	document.getElementById('square').style.backgroundColor = 'green' ; 
}