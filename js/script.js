// все работает только после того, как страница будет загружена //
document.addEventListener('DOMContentLoaded', () => { 
    
    let video = document.querySelector(".video-play");
    video.play();

    let navMenu = document.getElementById("header");
    window.addEventListener("scroll", (e) => {
        // меню навигации //
        if (window.scrollY >= 100) {
            navMenu.style.backgroundColor = "rgba(48, 40, 39, 0.6)";
        }
        else {
            navMenu.style.backgroundColor = "rgba(48, 40, 39, 0)";
        }
    });
    
    // когда видео заканчивается, оно перематывается вначало //
    video.addEventListener("ended", (e) => {
        video.currentTime = 0;
        video.play();
    });
    // новинки в меню //
    // переключатель слайдера //
    let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
    
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
 
    //авто-слайдер//
    let num = 0;
    let timerId = setInterval(() => {
        hideTabContent();
        showTabContent(num);
        num++;
        if (num == 4) {
            num = 0;
        }
    }, 5000);
});