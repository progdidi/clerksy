$(function(){

    const headerBtn = document.querySelector('.login');
    headerBtn.addEventListener('mouseover', () => {
        headerBtn.classList.add('green-btn');
    })
    headerBtn.addEventListener('mouseout', () => {
        headerBtn.classList.remove('green-btn');
    })

    //modal

    const buttons = document.querySelectorAll('button');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-btn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.classList.add('open');
        });
    })
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    })

    modal.addEventListener('click', (e) => {
        if(!e.target.classList.contains('modal__content')) {
            modal.classList.remove('open');
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            modal.classList.remove('open');
        }
    })
   
});