document.addEventListener('DOMContentLoaded', () => { 

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

    // новости //
    let News1 = {
        day: 30,
        month: "Декабря",
        like: 1,
        name: "Алексей",
        theme: "Новогодние праздники уже на носу! Порадуй себя любимым кофе в новом новогоднем оформлении:)",
        description: "С 30 декабря и по 20 января встречайте свои любимые напитки в новых стаканчиках в новогоднем стиле. Вам с новогодней ёлкой?) А может быть с звездным небом? Или же Вы предпочитаете с дедом Морозом?) Дизайн на любой вкус и выбор)",
        picture: "img/News.png",
        look: 0
    };

    let News2 = {
        day: 23,
        month: "Февраля",
        like: 2,
        name: "Бариста",
        theme: "День защитника Отечества и день создания красной армии!",
        description: "День защитники Отечетва традиционно празднуется в России 23го февраля, в этот день мы предлагаем отведать наше бодрящее кофе в стаканчиках в военном стиле!",
        picture: "img/News2.png",
        look: 0
    };

    let News3 = {
        day: 8,
        month: "Марта",
        like: 3,
        name: "Стэтхем",
        theme: "Международный день всех женщин",
        description: "В международный женский день предлагаем вас скидки на копучино и мокиато, а также новый дизайн стаканчика к празднику:)\nВсем девушка в подарок капучино с круассаном с клубничной начинкой!:)",
        picture: "img/News3.png",
        look: 0
    };

    let News = [News1, News2, News3];
    let numNews = 0;
    let btnNewsDown = document.getElementById("newsDown");
    btnNewsDown.addEventListener('click', (e) => {
        if (numNews == 0) {
            numNews = News.length - 1;
        } else {
            numNews--;
        }
        newsElement(numNews);
    });

    let btnNewsUp = document.getElementById("newsUp");
    btnNewsUp.addEventListener('click', (e) => {
        if (numNews == News.length - 1) {
            numNews = 0;
        } else {
            numNews++;
        }
        newsElement(numNews);
    });

    function newsElement (num) {
        let dayNews = document.querySelector('.num_new');
        dayNews.innerHTML = News[num].day;

        let monthNews = document.querySelector('.mounth');
        monthNews.innerHTML = News[num].month.toUpperCase();

        let likeNews = document.getElementById("likeNews");
        likeNews.innerHTML = News[num].like + '<img class="like-heart" src="img/heart.png">';

        let nameNews = document.getElementById("nameNews");
        nameNews.innerHTML = News[num].name;

        let themeNews = document.getElementById("themeNews");
        themeNews.innerHTML = News[num].theme;

        let descriptionNews = document.getElementById("descriptionNews");
        descriptionNews.innerHTML = News[num].description;

        let pictureNews = document.querySelector('.thumbnail');
        pictureNews.innerHTML = '<img class="left" src="' + News[num].picture + '">';

        News[num].look++;
        let lookNews = document.getElementById("lookNews");
        lookNews.innerHTML = News[num].look + '<img src="img/глаз.png">';
    }

    // лайк на новость //
    let likeNews = document.getElementById("likeNews");
    likeNews.addEventListener('click', (e) => {
        News[numNews].like++;
        likeNews.innerHTML = News[numNews].like + '<img class="like-heart" src="img/heart-icon.png">';
    });

    // отзывы //
    let comment1 = {
        name: 'Козел',
        score: 5,
        comment: "Отличное и качественное кофе.",
        picture: "img/Аватарка1.png"
    };

    let comment2 = {
        name: 'Гусь',
        score: 3,
        comment: "Быстрое и качественное обслуживание.",
        picture: "img/Аватарка2.png"
    };

    let comment3 = {
        name: 'Бобер',
        score: 4,
        comment: "Отвечает всем стандартам качества. Рекомендую!",
        picture: "img/Аватарка3.png"
    };

    let comment4 = {
        name: 'Британец',
        score: 5,
        comment: "Мне очень понравилось, 5 звезд однозначно!",
        picture: "img/Аватарка4.png"
    };

    let comment5 = {
        name: 'Медоед',
        score: 4,
        comment: "Мне очень понравилось, 4 звезд однозначно!",
        picture: "img/Аватарка5.png"
    };

    let comment6 = {
        name: 'Панда',
        score: 3,
        comment: "Вкусно и точка!",
        picture: "img/Аватарка6.png"
    };

    let comments = [comment1, comment2, comment3, 
        comment4, comment5, comment6];
    let commentCheck = false;
    let commentBtn = document.getElementById("commentBtn");
    commentBtn.addEventListener('click', (e) => {
        let sagestim = document.querySelector('.sagestim-lonials');
        if (!commentCheck) {
            commentBtn.innerHTML = '<span>Свернуть</span>';
            commentCheck = true;
            addComments(sagestim, comments, 6);
        } else {
            commentBtn.innerHTML = '<span>Больше отзывов</span>';
            commentCheck = false;
            addComments(sagestim, comments, 3);
        }
    });

    function addComments(cont, comments, num) {
        let code = "";
        for (let i = 0; i < num; i++) {
            code += '<div class="vemotau-vokusipol">' + 
            '<div class="testimonial">' +
            '<img src="' + comments[i].picture + '" alt="">' +
            '<div class="gecedanam">' + comments[i].name.toUpperCase() + '</div>' + 
            '<div class="apogered-gselected">';
            for (let j = 0; j < comments[i].score; j++) {
                code += '<i class="fas fa-star"></i>';
            }
            for (let j = 0; j < 5 - comments[i].score; j++) {
                code += '<i class="far fa-star"></i>';
            }
            code += '</div>' + '<p>' + comments[i].comment + '</p>' +
            '</div>' + '</div>';
        }
        cont.innerHTML = code;
    }
});