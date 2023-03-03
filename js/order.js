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
        calculationOfTheOrderCost(ristrettoeSugar);
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
        if (phone.value.toString().length != 11) {
            price.innerHTML = "Некорректный номер телефона!";
            goBuy = false;
        }
        if (goBuy) {
            let trueOrder = JSON.stringify(order);
            console.log("Заказ успешно оформлен!");
            console.log(trueOrder);
        }
    });