let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let carousel = document.querySelector('.carousel');

prev.onclick = function(){
    showSlider('prev');
}

next.onclick = function(){
    showSlider('next');
}

const showSlider = (type)=>{
    carousel.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.carousel .card');
    if(type === 'next'){
        carousel.appendChild(items[0]);
        carousel.classList.add('next');
    }
    if(type === 'prev'){
        carousel.prepend(items[2]);
        carousel.classList.add('prev');
    }
}