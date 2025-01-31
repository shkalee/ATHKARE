const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


setTimeout(() => {
    document.getElementById('splash').classList.toggle('fade');
}, 2000);


hamMenu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
    hamMenu.classList.toggle('active');
});