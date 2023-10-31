const card = document.querySelector('.card');
const video = document.querySelector('.video');

card.addEventListener('mouseover', () =>{
    video.play();
})

card.addEventListener('mouseleave', ()=>{
    video.pause();
})

