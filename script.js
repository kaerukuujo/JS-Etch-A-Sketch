//global var for amount of boxes
let rows = 10;

//pagecount is main container 
const pageCont = document.querySelector('#pageContainer');

const button = document.createElement('button');
button.setAttribute('id', 'topBut');
button.textContent = "change grid size";
button.addEventListener("click", quest => {
    rows = prompt("How many rows/columns ?");   
    removeBoxes(); 
    createBoxs(rows);
});
pageCont.appendChild(button);


// function to create takes an argument of amount of squares user
// wants to square to make grid

function createBoxs (num) {  
    
    //container that cant include button because it gets completely removed on restart
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    pageCont.appendChild(container);

    const rowBox = document.createElement('div');
    rowBox.classList.add('rowBox');

    for(i = 0; i < num; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('onmouseenter', 'mouseOver(this)');
        rowDiv.setAttribute('id', 'drawBox');
        rowDiv.classList.add('rowDiv');
        rowBox.appendChild(rowDiv);
    }

    container.appendChild(rowBox);


    for(j = 0; j < num-1; j++){
        const colDiv = document.querySelector('.rowBox');
        const clone = colDiv.cloneNode(true);
        clone.classList.remove('rowBox');
        clone.classList.add('colBox');
        container.appendChild(clone);
    }
}

//function for clearing canvas when new size has been entered

function removeBoxes(){
    if(document.getElementById('container') != null){
        document.getElementById('container').remove();
    }
}

// gets reference to current square, changes its class to 'hovered' to be altered in css.
function mouseOver(ref){
    ref.classList.add('hovered');
}












