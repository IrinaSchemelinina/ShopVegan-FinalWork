const productData = [
    {
        id: 1,
        image: '/img/sweets/1.jpg',
        title: 'Сироп низкокалорийный БАУНТИ "FITFORCE", бут.стекл.0.7 л',
        cost: 17.88
    },
    {
        id: 2,
        image: '/img/sweets/2.jpg',
        title: 'Плитка кондитерская шоколадная “Умные сладости” с миндалем со стевией',
        cost: 10.69
    },
    {
        id: 3,
        image: '/img/sweets/3.jpg',
        title: 'Батончики безглютеновые «Губка Боб» с шоколадной начинкой, витаминизированные, 110гр',
        cost: 13.21
    },
    {
        id: 4,
        image: '/img/sweets/4.jpg',
        title: 'Конфеты желейные "Умные сладости" со вкусом Малины, 90гр',
        cost: 8.23
    },
    {
        id: 5,
        image: '/img/sweets/5.jpg',
        title: 'Подушечки амарантовые «Умные сладости» с шоколадной начинкой со стевией, 150гр',
        cost: 11.32
    },
    {
        id: 6,
        image: '/img/sweets/6.jpg',
        title: 'Батончики амарантовые «Умные сладости» с начинкой лесная ягода , в глазури, 20гр 4*20',
        cost: 2.47
    },
    {
        id: 7,
        image: '/img/sweets/7.jpg',
        title: 'КУКУРУЗА ВОЗДУШНАЯ (ПОПКОРН) "ШОКОЛАДНАЯ" 50 Г',
        cost: 7.30
    },
    {
        id: 8,
        image: '/img/sweets/8.jpg',
        title: 'Урбеч из тертого обжаренного арахиса "Ореховые истории", 300 гр',
        cost: 9.05
    },
    {
        id: 9,
        image: '/img/sweets/9.jpg',
        title: 'Батончик протеиновый Венские вафли Protein viennese waffles Bombbar 60 гр.',
        cost: 2.80
    },
    {
        id: 10,
        image: '/img/flour/1.jpg',
        title: 'МУКА ИЗ КРАСНОГО РИСА БЕЗ ГЛЮТЕНА 500ГР',
        cost: 6.60
    },
    {
        id: 11,
        image: '/img/flour/2.png',
        title: 'МУКА КУКУРУЗНАЯ "ГАРНЕЦ" БЕЗ ГЛЮТЕНА, 500 Г',
        cost: 5.66
    },
    {
        id: 12,
        image: '/img/flour/3.jpg',
        title: 'МУКА КУНЖУТНАЯ 300Г. ФАРМЭКО',
        cost: 8.25
    },
    {
        id: 13,
        image: '/img/flour/4.jpg',
        title: 'МУКА ГРЕЧНЕВАЯ "ГАРНЕЦ" БЕЗ ГЛЮТЕНА, 500 Г',
        cost: 9.75
    },
    {
        id: 14,
        image: '/img/flour/5.jpg',
        title: 'МУКА ИЗ ЧЕРНОГО РИСА БЕЗ ГЛЮТЕНА 500Г',
        cost: 11.20
    },
    {
        id: 15,
        image: '/img/flour/6.jpg',
        title: 'МУКА РИСОВАЯ ЦЕЛЬНОЗЕРНОВАЯ БЕЗ ГЛЮТЕНА "ГАРНЕЦ", 500 Г',
        cost: 6.80
    },
    {
        id: 16,
        image: '/img/flour/7.jpg',
        title: 'МУКА СОЕВАЯ "ГАРНЕЦ", 500 Г',
        cost: 6.87
    },
    {
        id: 17,
        image: '/img/flour/8.jpg',
        title: 'МУКА ПШЕНИЧНАЯ ОБОЙНАЯ (ЦЕЛЬНОЗЕРНОВАЯ) 500Г',
        cost: 2.71
    },
    {
        id: 18,
        image: '/img/flour/9.jpg',
        title: 'МУКА РЖАНАЯ ЦЕЛЬНОСМОЛОТАЯ "ГАРНЕЦ" 500ГР',
        cost: 2.65
    },
    {
        id: 19,
        image: '/img/Oils/1.jpg',
        title: 'Масло кукурузное сыродавленное нерафинированное Масляный Король, 350 мл',
        cost: 17.40
    },
    {
        id: 20,
        image: '/img/Oils/2.jpg',
        title: 'Масло авокадо рафинированное Aroy-D, 500 мл',
        cost: 53.29
    },
    {
        id: 21,
        image: '/img/Oils/3.jpg',
        title: 'Масло грецкого ореха нерафинированное холодного отжима Belalea, 250 мл',
        cost: 26.35
    },
    {
        id: 22,
        image: '/img/Oils/4.jpg',
        title: 'Масло горчичное сыродавленное нерафинированное Масляный Король, 350 мл',
        cost: 13.99
    },
    {
        id: 23,
        image: '/img/Oils/5.jpg',
        title: 'Масло тыквенное нерафинированное холодного отжима Belalea, 250 мл',
        cost: 25.20
    },
    {
        id: 24,
        image: '/img/Oils/6.jpg',
        title: 'Кокосовое масло Extra Virgin Aroy-D, 180 мл',
        cost: 19.23
    },
    {
        id: 25,
        image: '/img/Oils/7.jpg',
        title: 'Масло топленое Гхи Вастэко, 200 гр',
        cost: 28.13
    },
    {
        id: 26,
        image: '/img/Oils/8.jpg',
        title: 'Масло из семян черного тмина Житница здоровья, 100 мл',
        cost: 29.99
    },
    {
        id: 27,
        image: '/img/Oils/9.jpg',
        title: 'Какао масло UFEELGOOD, 200 гр',
        cost: 35.50
    },
    {
        id: 28,
        image: '/img/stocks/1.jpg',
        title: 'Кокосовое молоко Aroy-D, 500 мл',
        cost: 10.0
    },
    {
        id: 29,
        image: '/img/stocks/2.jpg',
        title: 'Арахисовая паста Nutbutter (классическая), 320гр',
        cost: 15.0
    },
    {
        id: 30,
        image: '/img/stocks/3.jpg',
        title: 'Напиток растительный «Грецкий орех» ультрапастеризованный Тake a Bite, 1л',
        cost: 14.32
    },
    {
        id: 31,
        image: '/img/stocks/4.jpg',
        title: 'Квадры Bitey (овсяно-фруктовый батончик) "черная смородина", 30 гр',
        cost: 2.87
    },
    {
        id: 32,
        image: '/img/stocks/5.jpg',
        title: 'Макароны цельнозерновые пшеничные "Перья", 350 гр',
        cost: 3.50
    },
    {
        id: 33,
        image: '/img/stocks/6.jpg',
        title: 'Орех кедровый Сибирский кедр, 200 гр',
        cost: 35.50
    },
    {
        id: 34,
        image: '/img/popular/1.jpg',
        title: 'Печенье безглютеновое Bitey "Клубника", 125 гр',
        cost: 8.15
    },
    {
        id: 35,
        image: '/img/popular/2.jpg',
        title: "Горький шоколад с гречишным чаем Nature's own factory, 20 гр",
        cost: 6.50
    },
    {
        id: 36,
        image: '/img/popular/3.jpg',
        title: 'Пастила фруктовая Фрутоежка, 500 гр',
        cost: 18.89
    },
    {
        id: 37,
        image: '/img/popular/4.jpg',
        title: 'Хлебцы хрустящие кукурузно-рисовые с морской солью Bite, 150 гр',
        cost: 35.50
    },
    {
        id: 38,
        image: '/img/popular/5.jpg',
        title: 'Напиток "Кокосово-рисовый" ультрапастеризованный Barista Bite, 1 л',
        cost: 17.79
    },
    {
        id: 39,
        image: '/img/popular/6.jpg',
        title: 'Гималайская розовая соль крупного помола UFEELGOOD, 200 гр',
        cost: 14.15
    },
    
]
