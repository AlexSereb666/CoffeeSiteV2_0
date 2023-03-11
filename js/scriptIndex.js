// все работает только после того, как страница будет загружена //
"use strict";
document.addEventListener('DOMContentLoaded', () => { 
    // полный заказ //
    // стоимость итогового заказа и его содержимое //
    function newOrder() {
        let order = {
            Cappuccino: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            Americano: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            Espresso: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            Macchiato: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            flatWhite: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            latte: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            rafCoffee: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            ristretto: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            affogato: {
                num: 0,
                Sugar: 0,
                Milk: false,
                supplements: '',
            },
            name: '',
            address: '',
            phone: '',
            priceOrder: 0,
        }; 
        return order; 
    }
    let order = newOrder();
 
    // события изменения полей //
    let CappuccinoNum = document.getElementById("CappuccinoNum");
    CappuccinoNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(CappuccinoNum);
    });
    let CappuccinoSugar = document.getElementById("CappuccinoSugar");
    CappuccinoSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(CappuccinoSugar);
    });
    let CappuccinoMilk = document.getElementById("CappuccinoMilk");
    CappuccinoMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(CappuccinoMilk);
    });
    let CappuccinoSelect = document.querySelector('.CappuccinoSelect');
    CappuccinoSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(CappuccinoSelect);
    });
    let AmericanoNum = document.getElementById("AmericanoNum");
    AmericanoNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(AmericanoNum);
    });
    let AmericanoSugar = document.getElementById("AmericanoSugar");
    AmericanoSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(AmericanoSugar);
    });
    let AmericanoMilk = document.getElementById("AmericanoMilk");
    AmericanoMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(AmericanoMilk);
    });
    let AmericanoSelect = document.querySelector('.AmericanoSelect');
    AmericanoSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(AmericanoSelect);
    });
    let EspressoNum = document.getElementById("EspressoNum");
    EspressoNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(EspressoNum);
    });
    let EspressoSugar = document.getElementById("EspressoSugar");
    EspressoSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(EspressoSugar);
    });
    let EspressoMilk = document.getElementById("EspressoMilk");
    EspressoMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(EspressoMilk);
    });
    let EspressoSelect = document.querySelector('.EspressoSelect');
    EspressoSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(EspressoSelect);
    });
    let MacchiatoNum = document.getElementById("MacchiatoNum");
    MacchiatoNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(MacchiatoNum);
    });
    let MacchiatoSugar = document.getElementById("MacchiatoSugar");
    MacchiatoSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(MacchiatoSugar);
    });
    let MacchiatoMilk = document.getElementById("MacchiatoMilk");
    MacchiatoMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(MacchiatoMilk);
    });
    let MacchiatoSelect = document.querySelector('.MacchiatoSelect');
    MacchiatoSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(MacchiatoSelect);
    });
    let flatWhiteNum = document.getElementById("flatWhiteNum");
    flatWhiteNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(flatWhiteNum);
    });
    let flatWhiteSugar = document.getElementById("flatWhiteSugar");
    flatWhiteSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(flatWhiteSugar);
    });
    let flatWhiteMilk = document.getElementById("flatWhiteMilk");
    flatWhiteMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(flatWhiteMilk);
    });
    let flatWhiteSelect = document.querySelector('.flatWhiteSelect');
    flatWhiteSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(flatWhiteSelect);
    });
    let latteNum = document.getElementById("latteNum");
    latteNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(latteNum);
    });
    let latteSugar = document.getElementById("latteSugar");
    latteSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(latteSugar);
    });
    let latteMilk = document.getElementById("latteMilk");
    latteMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(latteMilk);
    });
    let latteSelect = document.querySelector('.latteSelect');
    latteSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(latteSelect);
    });
    let ristrettoNum = document.getElementById("ristrettoNum");
    ristrettoNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(ristrettoNum);
    });
    let ristrettoSugar = document.getElementById("ristrettoSugar");
    ristrettoSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(ristrettoSugar);
    });
    let ristrettoMilk = document.getElementById("ristrettoMilk");
    ristrettoMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(ristrettoMilk);
    });
    let ristrettoSelect = document.querySelector('.ristrettoSelect');
    ristrettoSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(ristrettoSelect);
    });
    let affogatoNum = document.getElementById("affogatoNum");
    affogatoNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(affogatoNum);
    });
    let affogatoSugar = document.getElementById("affogatoSugar");
    affogatoSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(affogatoSugar);
    });
    let affogatoMilk = document.getElementById("affogatoMilk");
    affogatoMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(affogatoMilk);
    });
    let affogatoSelect = document.querySelector('.affogatoSelect');
    affogatoSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(affogatoSelect);
    });
    let rafCoffeeNum = document.getElementById("rafCoffeeNum");
    rafCoffeeNum.addEventListener('input', (e) => {
        calculationOfTheOrderCost(rafCoffeeNum);
    });
    let rafCoffeeSugar = document.getElementById("rafCoffeeSugar");
    rafCoffeeSugar.addEventListener('input', (e) => {
        calculationOfTheOrderCost(rafCoffeeSugar);
    });
    let rafCoffeeMilk = document.getElementById("rafCoffeeMilk");
    rafCoffeeMilk.addEventListener('click', (e) => {
        calculationOfTheOrderCost(rafCoffeeMilk);
    });
    let rafCoffeeSelect = document.querySelector('.rafCoffeeSelect');
    rafCoffeeSelect.addEventListener('click', (e) => {
        calculationOfTheOrderCost(rafCoffeeSelect);
    });
    // расчет стоимости итогового заказа //
    function calculationOfTheOrderCost(value) {
        if (value.value < 0) {
            value.value = 0;
        }
        if (value.value >= 999) {
            value.value = 999;
        }

        // стоимость товаров в рублях //
        order = newOrder();
        let priceSugar = 5;
        let priceMilk = 10;
        let priceCoffee = {
            Cappuccino: 120,
            Americano: 120,
            Espresso: 120,
            Macchiato: 120,
            flatWhite: 120,
            latte: 120,
            rafCoffee: 120,
            ristretto: 120,
            affogato: 120
        };  
        let supplements = {
            caramel: 15,
            chocolate: 20,
            acid: 10,
            sharp: 10,
            bitter: 10,
        };

        // капучино //
        order.priceOrder += orderEdit(order.Cappuccino, CappuccinoNum, CappuccinoSugar, CappuccinoMilk,
            CappuccinoSelect, priceSugar, priceMilk, priceCoffee.Cappuccino, supplements);
        // американо //
        order.priceOrder += orderEdit(order.Americano, AmericanoNum, AmericanoSugar, AmericanoMilk,
            AmericanoSelect, priceSugar, priceMilk, priceCoffee.Americano, supplements);
        // экспрессо //
        order.priceOrder += orderEdit(order.Espresso, EspressoNum, EspressoSugar, EspressoMilk,
            EspressoSelect, priceSugar, priceMilk, priceCoffee.Espresso, supplements);
        // макиато //
        order.priceOrder += orderEdit(order.Macchiato, MacchiatoNum, MacchiatoSugar, MacchiatoMilk,
            MacchiatoSelect, priceSugar, priceMilk, priceCoffee.Macchiato, supplements);
        // флет уайт //
        order.priceOrder += orderEdit(order.flatWhite, flatWhiteNum, flatWhiteSugar, flatWhiteMilk,
            flatWhiteSelect, priceSugar, priceMilk, priceCoffee.flatWhite, supplements);
        // латте //
        order.priceOrder += orderEdit(order.latte, latteNum, latteSugar, latteMilk,
            latteSelect, priceSugar, priceMilk, priceCoffee.latte, supplements);
        // раф кофе //
        order.priceOrder += orderEdit(order.rafCoffee, rafCoffeeNum, rafCoffeeSugar, rafCoffeeMilk,
            rafCoffeeSelect, priceSugar, priceMilk, priceCoffee.rafCoffee, supplements);
        // ристретто //
        order.priceOrder += orderEdit(order.ristretto, ristrettoNum, ristrettoSugar, ristrettoMilk,
            ristrettoSelect, priceSugar, priceMilk, priceCoffee.ristretto, supplements);
        // аффогато //
        order.priceOrder += orderEdit(order.affogato, affogatoNum, affogatoSugar, affogatoMilk,
            affogatoSelect, priceSugar, priceMilk, priceCoffee.affogato, supplements);

        let price = document.querySelector('.priceCoffee');
        price.innerHTML = "Стоимость: " + order.priceOrder + " руб.";
    }

    // функция заполнения заказа //
    function orderEdit(order, num, sugar, milk, supplements, priceSugar, priceMilk, 
        priceCoffee, priceSupplements) {
        order.num = num.value;
        order.Sugar = sugar.value;
        let price = 0;
        if (milk.checked) {
            order.milk = true;
            price += priceMilk;
        }
        order.supplements = supplements.value;
        price += (order.Sugar * priceSugar) + (priceCoffee * order.num);
        switch(order.supplements) {
            case 'Нет':
                price += 0;
                break;
            case 'Карамель':
                price += priceSupplements.caramel;
                break;
            case 'Шоколад':
                price += priceSupplements.chocolate;
                break;
            case 'Покислее':
                price += priceSupplements.acid;
                break;
            case 'Поострее':
                price += priceSupplements.sharp;
                break;
            case 'Погорчее':
                price += priceSupplements.bitter;
                break;
        }
        return price;
    }

    // кнопка оформить //
    let btnBuyCoffee = document.querySelector('.btnBuyCoffee');
    btnBuyCoffee.addEventListener('click', (e) => {
        let textBoxCoffeeName = document.querySelector('.textBoxCoffeeName');
        let price = document.querySelector('.priceCoffee');
        let address = document.querySelector('.textBoxCoffeeAddress');
        let phone = document.querySelector('.textBoxCoffeePhone');
        let goBuy = true; // флаг покупки
        if (order.priceOrder == 0) {
            price.innerHTML = "Упс, кажется вы не выбрали заказ:(";
            goBuy = false;
        }
        if (textBoxCoffeeName.value == "") {
            price.innerHTML = "Ой! Вам необходимо ввести имя!";
            goBuy = false;
        }
        if (address.value == "") {
            price.innerHTML = "Необходимо указать адрес!";
            goBuy = false;
        }
        if (phone.value == "") {
            price.innerHTML = "Пожалуйста! Нам нужен Ваш номер телефона!";
            goBuy = false;
        }
        /*if (!ValidPhone(phone.value)) {
            price.innerHTML = "Некорректный номер телефона!";
            goBuy = false;
        }*/
        if (goBuy) {
            let trueOrder = JSON.stringify(order);
            console.log("Заказ успешно оформлен!");
            console.log(trueOrder);
        }
    });
    
    // проверки по регулярному выражению //
    function ValidPhone(myPhone) {
        let re = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
        let valid = re.test(myPhone);
        return valid;
    }
    document.querySelector('.textBoxCoffeePhone').addEventListener('input', (e) => {
        checkNumber(document.querySelector('.textBoxCoffeePhone'));
    });
    function checkNumber(input) { 
        var value = input.value; 
        var rep = /[\.;":'a-zA-Zа-яА-Я]/; 
        if (rep.test(value)) { 
            value = value.replace(rep, ''); 
            input.value = value; 
        } 
    } 

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

let navMenu = document.getElementById("header");
window.addEventListener("scroll", (e) => {
    // меню навигации //
    if (window.scrollY >= 100) {
        navMenu.style.backgroundColor = "rgba(48, 40, 39, 0.6)";
    } else {
        navMenu.style.backgroundColor = "rgba(48, 40, 39, 0)";
    }
});

document.addEventListener('DOMContentLoaded', () => {

    let video = document.querySelector(".video-play");
    video.play();
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

// гамбургер меню //
let gamburgerMenuBtn = document.getElementById("menu__toggle");
gamburgerMenuBtn.addEventListener('click', (e) => {
    let menuBox = document.querySelector('.menu__box');
    if (gamburgerMenuBtn.checked) {
        menuBox.style.left = "0%";
    } else {    
        menuBox.style.left = "-100%";
    }
});
