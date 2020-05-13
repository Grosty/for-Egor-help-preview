'use strict';

let miniImg = document.querySelector('.miniImg');
let path = miniImg.getAttribute('src');
let newImg = document.createElement('img');
let fullWrap = document.querySelector('.fullWrap');
newImg.src = path;
fullWrap.append(newImg);
newImg.style.position = 'absolute';
let stepX = newImg.width/miniImg.width;
let stepY = newImg.height/miniImg.height;

miniImg.addEventListener('mouseover', (e)=>{
    fullWrap.style.opacity = 1
});

miniImg.addEventListener('mousemove', (e) => {

    let posX = newImg.width/e.target.width*e.offsetX;
    let posY = newImg.height/e.target.height*e.offsetY;
    
    if (e.offsetX <  e.target.width - fullWrap.clientWidth/stepX) {
        newImg.style.left =  `-${posX}px`;
    }
    if (e.offsetY <  e.target.height - fullWrap.clientHeight/stepY) {
        newImg.style.top =  `-${posY}px`;
    }

    
});

miniImg.addEventListener('mouseout', ()=>{
    fullWrap.style.opacity = 0;
    
})





let input = document.getElementById('input');

input.addEventListener("change", handleFiles, false);
function handleFiles(files) {
    let fileList = files;
    console.log(fileList[0]);
}