// Каталог товаров в виде массива объектов, содержащих поля:

//  id            Код товара
//  name          Наименование
//  description   Описание
//  sizes         массив возможных размеров
//  price         цена товара
//  available     Признак доступности для продажи

// Создайте в коде несколько (не менее 5) товаров в каталоге

const goods = {
    1 : {
        id: 1,
        name: "Майка мужская хлопковая белая",
        description: "хлопок 95 %, лайкра 5 %",
        sizes: ["L", "XL", "XXL"],
        price: 1.89,
        available: true,
    },
    2 : {
        id: 2,
        name: "Рубашка",
        description: "хлопок 100 %",
        sizes: ["XL", "XXL"],
        price: 5.60,
        available: true
    },
    3 : {
        id: 3,
        name: "Рубашка приталенная",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 6.00,
        available: true
    },
    4 : {
        id: 4,
        name: "Пиджак серый",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 21.55,
        available: false
    },
    5 : {
        id: 5,
        name: "Брюки серые",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 15.65,
        available: false
    },
}


// Корзина в виде массива объектов, содержащих поля:

// good           ссылка на товар в каталоге
// amount         количество товара в корзине

// и несколько (не менее 2) товаров в корзине.
const basket = [
    {
        good: 1,
        amount: 3,
    },
    {
        good: 2,
        amount: 2,
    },
    {
        good: 3,
        amount: 1,
    },
]



// Реализуйте функции добавления товара в корзину и удаления одного товара из нее, а также функцию полной очистки корзины.

// Реализуйте функции добавления товара в корзину
function addOneGood(good, amount) {
    basket.push({"good":good, "amount": amount})
    return basket
}
// Тест функции
// console.log(addOneGood(process.argv[2], process.argv[2]));

// и удаления одного товара из нее
function delOneGood(good) {
    basket.splice(good, 1); // так можно удалить элемент
    return basket
}
// Тест функции
// console.log(delOneGood(process.argv[2]));

// а также функцию полной очистки корзины.
function clearBasket() {
    basket.splice(0, basket.length); 
    return basket
}
// Тест функции
// console.log(clearBasket());


// Реализуйте функцию вычисления общего количества и стоимости товаров в корзине. Функция должна возвращать объект, содержащий поля:

// totalAmount    Общее количество товаров в корзине
// totalSumm      Общая стоимость товаров в корзине

function total() {

    let totalSumm = 0
    let totalAmount = 0

    for (let basketPosition = 0; basketPosition < basket.length; basketPosition++) {

        totalSumm = totalSumm + basket[basketPosition].amount * goods[basket[basketPosition].good].price 

        totalAmount = totalAmount + basket[basketPosition].amount 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        }
    return totals
}

// Тест функции
// console.log(total());