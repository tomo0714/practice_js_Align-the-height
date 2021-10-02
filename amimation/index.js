// DOM
const htmlCollection = document.getElementsByClassName('wrapper')[0].getElementsByTagName('div');

// htmlCollection change array
const array = Array.from(htmlCollection);

//　variable
let h = 0;

// function
function getMaxHeight(element) {
    if(element.offsetHeight > h) {
        h = element.offsetHeight;
    }
}

// run
array.forEach(getMaxHeight);

for(let i = 0; i < array.length; i++) {
    array[i].style.height = h + 'px';
}