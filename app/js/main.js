$(function(){
    //header button
    const headerBtn = document.querySelector('.login');
    headerBtn.addEventListener('mouseover', () => {
        headerBtn.classList.add('green-btn');
    })
    headerBtn.addEventListener('mouseout', () => {
        headerBtn.classList.remove('green-btn');
    })

    //fixed menu
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header__top');
        const scrollHeight = window.pageYOffset;
        const headerHeight = header.getBoundingClientRect().height;
        if(scrollHeight > headerHeight) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed')
        }
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