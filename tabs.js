const TABS = document.querySelectorAll('.emrys__button');
const CONTENT = document.querySelectorAll('.emrys__text');
let index;

TABS.forEach( tab => {

    tab.addEventListener('click', () => {
        if (tab.classList.contains('active')) {
            return
        } else {
            tab.classList.add('active');
        }
    
        index = tab.getAttribute('data-tab');
    
        for(i = 0; i < TABS.length; i++) {
            if (TABS[i].getAttribute('data-tab') != index) {
                TABS[i].classList.remove('active');
            }
        }
    
        for(i = 0; i < CONTENT.length; i++) {
    
            if(CONTENT[i].getAttribute('data-tab') == index) {
                CONTENT[i].classList.add('activeContent');
            } else {
                CONTENT[i].classList.remove('activeContent')
            }
    
        }
    })

})