window.addEventListener('DOMContentLoaded', () =>{

    const tabs = document.querySelectorAll('.tabheader__item'),
    tabscontent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');
    console.log(tabscontent);

    function hideTabContent() {
        tabscontent.forEach(item => {
            // item.style.display = "none";
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabscontent[i].classList.add('show', 'fade');
        tabscontent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) =>{
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);  
                }
            });
        }
    });
    
});