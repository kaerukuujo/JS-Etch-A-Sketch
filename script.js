const container = document.querySelector('#container');
const rowBox = document.createElement('div');
rowBox.classList.add('rowBox');




function createBoxs (num) {
    for(i = 0; i < num; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('onmouseenter', 'mouseOver(this)');
        rowDiv.setAttribute('id', `${i}`);
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

createBoxs(16);

function mouseOver(ref){
    ref.classList.add('hovered');
}

container.appendChild(rowBox);

















// const container = document.querySelector('#container');
// function createCol(num) {
//     for(i = 0; i < num; i++){
//         const colDiv = document.createElement('div');
//         for(j = 0; j < num; j++){
//             const rowDiv = document.createElement('div');
//             rowDiv.classList.add('rowBox');
//             colDiv.appendChild(rowDiv);
//             //create row boxes
//         }
//         colDiv.classList.add('colBox');
//         container.appendChild(colDiv);
//     }
// }

// createCol(16);

// const colBox = document.querySelector('#colBox');

// const rowBox = document.querySelector('#rowBox');









// const container = document.querySelector('#container');

// function createDiv(num) {
//     for(i = 0; i < num; i++){
//         const colDiv = document.createElement('div');
//         colDiv.classList.add('colBox');  
//         container.appendChild(colDiv);
//     }
//     colDiv.forEach((colBox) => {
//         for(j = 0; j < num; j++){
//             const rowDiv = document.createElement('div');
//             rowDiv.classList.add('rowBox');
//             colBox.appendChild(rowDiv);
//         }
//     });    
// }

// createDiv(16);


// const rowDiv = document.querySelector('#rowDiv');
// rowDiv.classList.add('row');

// for(i = 0; i < num; i++){
//     const rowDiv = document.createElement('div');
//     rowDiv.classList.add('rowBox');
//     colDiv.appendChild(rowDiv);
// }












