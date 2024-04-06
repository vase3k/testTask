const items = [
    {
        ratingRevievs: '264 отзыва',
        price: { oldUan: '4 333 грн', newUan: '3 799 грн' },
        name: 'Motorola MOTO G4 (XT1622) Black',
    },
    {
        ratingRevievs: '1355 отзывов',
        price: '4 999 грн',
        name: 'Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!',
    },
    {
        ratingRevievs: '426 отзывов',
        price: '5 199 грн',
        name: 'Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!',
    },
    {
        ratingRevievs: '403 отзыва',
        price: '4 349 грн',
        name: 'Xiaomi Redmi Note 4X 3/32GB Black',
    },
    {
        ratingRevievs: '488 отзывов',
        price: '6 199 грн',
        name: 'Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!',
    },
    {
        ratingRevievs: '198 отзывов',
        price: { oldUan: '3 495 грн', newUan: '2 995 грн' },
        name: 'Lenovo K5 (A6020a40) Silver',
    },
    {
        ratingRevievs: '352 отзыва',
        price: { oldUan: '9 799 грн', newUan: '7 999 грн' },
        name: 'Apple iPhone 5s 16GB Space Gray',
    },
    {
        ratingRevievs: '59 отзывов',
        price: '5 999 грн',
        name: 'Nokia 5 Dual Sim Tempered Blue',
    },
    {
        ratingRevievs: '119 отзывов',
        price: '11 999 грн',
        name: 'Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!',
    },
    {
        ratingRevievs: '1106 отзывов',
        price: '3 999 грн',
        name: 'Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!',
    },
    {
        ratingRevievs: '380 отзывов',
        price: '2 199 грн',
        name: 'Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!',
    },
    {
        ratingRevievs: '86 отзывов',
        price: { oldUan: '24 999 грн', newUan: '22 999 грн' },
        name: 'Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!',
    },
    {
        ratingRevievs: '177 отзывов',
        price: '6 499 грн',
        name: 'Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!',
    },
    {
        ratingRevievs: '347 отзывов',
        price: '4 299 грн',
        name: 'Xiaomi Redmi 4X 3/32GB Black (Международная версия)',
    },
    {
        ratingRevievs: '709 отзывов',
        price: '2 799 грн',
        name: 'Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!',
    },
    {
        ratingRevievs: '527 отзывов',
        price: '3 999 грн',
        name: 'Huawei Y6 Pro Gold + чехол + защитное стекло!',
    },
    {
        ratingRevievs: '66 отзывов',
        price: '16 499 грн',
        name: 'Apple iPhone 6s 32GB Gold',
    },
    {
        ratingRevievs: '14 отзывов',
        price: '11 499 грн',
        name: 'Apple iPhone 6 32GB Space Gray',
    },
    {
        ratingRevievs: '70 отзывов',
        price: { oldUan: '7 399 грн', newUan: '5 999 грн' },
        name: 'Asus ZenFone 2 32GB (ZE551ML) Black',
    },
    {
        ratingRevievs: '45 отзывов',
        price: '4 299 грн',
        name: 'Nokia 3 Dual Sim Silver White + сертификаты 500 грн!',
    },
];

function sortByFeedbacks(arr) {
    const temp = JSON.parse(JSON.stringify(arr));

    temp.forEach(item => {
        item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, '');
    });

    temp.sort((a, b) => a.ratingRevievs > b.ratingRevievs ? 1 : -1);

    document.querySelector('.result').innerHTML = '';

    temp.forEach(item => {

        if (typeof(item.price) === 'string') {
            item.price = +item.price.replace(/\D/g, '');
        } else {
            item.price = +item.price.newUan.replace(/\D/g, '');
        }

        document.querySelector('.result').innerHTML += `
            <h3>${item.name}</h3>
            <div>price: ${item.price}</div>
            <div>review: ${item.ratingRevievs}</div>
        `;
    });
}  

function sortByPrice(arr) {
    const temp = JSON.parse(JSON.stringify(arr));

    temp.forEach(item => {
        if (typeof(item.price) === 'string') {
            item.price = +item.price.replace(/\D/g, '');
        } else {
            item.price = +item.price.newUan.replace(/\D/g, '');
        }
    });

    temp.sort((a, b) => a.price - b.price);

    document.querySelector('.result').innerHTML = '';

    temp.forEach(item => {
        document.querySelector('.result').innerHTML += `
            <h3>${item.name}</h3>
            <div>price: ${item.price}</div>
            <div>review: ${item.ratingRevievs}</div>
        `;
    });
}


document.querySelector('.price').addEventListener('click', () => {
    sortByPrice(items);
});

document.querySelector('.feed').addEventListener('click', () => {
    sortByFeedbacks(items);
});