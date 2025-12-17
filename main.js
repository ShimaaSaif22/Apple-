let imge = document.querySelector('.imge');
let container = document.querySelector('.container');

function changeImage(phone) {
    imge.src = phone;
}

function colorChange(color) {
    container.style.backgroundColor = color;
}