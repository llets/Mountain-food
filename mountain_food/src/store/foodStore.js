import {makeAutoObservable} from 'mobx'

class FoodStore{
    _food_list=[
        {
            "id": 1,
            "category": "hinkali",
            "photo": "https://mininakar.github.io/cafe/pic/kalakuri.jpg",
            "name": "Калакури со свининой и говядиной, 3 шт",
            "description": "Внутри фарш из двух типов мяса со смесью прованских трав",
            "price": 450,
            "additional": "Хит продаж"
        },
        {
            "id": 2,
            "category": "hinkali",
            "photo": "https://mininakar.github.io/cafe/pic/meshuri.jpg",
            "name": "Месхури с бараниной и копченым сулугуни",
            "description": "Тонкое тесто, сочная начинка и невероятно ароматный соус с копчёной ноткой",
            "price": 750,
            "additional": ""
        },
        {
            "id": 3,
            "category": "hinkali",
            "photo": "https://mininakar.github.io/cafe/pic/mini-hi.jpg",
            "name": "Мини-хинкали с говядиной в перечном соусе",
            "description": "Сочетание остроты перца и нежности сливок прекрасно дополняет вкус мяса",
            "price": 850,
            "additional": "Хит продаж"
        },
        {
            "id": 4,
            "category": "hinkali",
            "photo": "https://mininakar.github.io/cafe/pic/pasanauri.jpeg",
            "name": "Пасанаури, 5 шт",
            "description": "Традиционные хинкали с телятиной, родом из маленького одноименного села Грузии",
            "price": 650,
            "additional": ""
        },
        {
            "id": 5,
            "category": "hachapuri",
            "photo": "https://mininakar.github.io/cafe/pic/penovani.jpg",
            "name": "Пеновани",
            "description": "Это аппетитное хачапури из воздушного слоёного теста и сочной сырной начинки",
            "price": 540,
            "additional": "Скидка"
        },
        {
            "id": 6,
            "category": "hachapuri",
            "photo": "https://mininakar.github.io/cafe/pic/penovanikinza.jpg",
            "name": "Пеновани с ягненком и кинзой",
            "description": "Аккуратный конвертик из слоеного теста, внутри — ароматная начинка",
            "price": 850,
            "additional": ""
        },
        {
            "id": 7,
            "category": "hachapuri",
            "photo": "https://mininakar.github.io/cafe/pic/adjar.jpg",
            "name": "Аджарскиий с яйцом",
            "description": "Изящная, хрупкая на вид лодочка из румяного теста, переполненная бурлящей лавой из тягучего расплавленного сыра",
            "price": 660,
            "additional": ""
        },
        {
            "id": 8,
            "category": "hachapuri",
            "photo": "https://mininakar.github.io/cafe/pic/megrel.jpg",
            "name": "Мегрельский с сыром",
            "description": "Это лепешка из теста с творожной начинкой не только внутри, а еще снаружи",
            "price": 660,
            "additional": "Хит продаж"
        },
        {
            "id": 9,
            "category": "main meals",
            "photo": "https://mininakar.github.io/cafe/pic/chakapuri.jpg",
            "name": "Чакапули из ягненка",
            "description": "В чакапули много разнообразной зелени, но главной составляющей, наряду с мясом, является тархун (эстрагон), который превосходно сочетается с молодой бараниной, придавая ей неповторимую пикантность",
            "price": 1390,
            "additional": "Хит продаж"
        },
        {
            "id": 10,
            "category": "main meals",
            "photo": "https://mininakar.github.io/cafe/pic/chicken.jpg",
            "name": "Цыпленок табака",
            "description": "Хрустящая, зажаристая корочка и нежное сочное мясо — вот секретная формула, которая никого не оставит равнодушным",
            "price": 1320,
            "additional": ""
        },
        {
            "id": 11,
            "category": "main meals",
            "photo": "https://mininakar.github.io/cafe/pic/shkmereli.jpg",
            "name": "Шкмерули",
            "description": "Аппетитный, румяный, сочный цыпленок с пикантно-сливочным соусом. Подается на стол прямо в сковороде, также к нему идет лаваш",
            "price": 660,
            "additional": ""
        },
        {
            "id": 12,
            "category": "main meals",
            "photo": "https://mininakar.github.io/cafe/pic/forel.jpg",
            "name": "Форель в виноградных листьях",
            "description": "Виноградные листья — прекрасный природный контейнер, позволяющий не только сохранить сочность рыбы при запекании, но и обогатить ее приятными вкусовыми оттенками",
            "price": 660,
            "additional": ""
        },
        {
            "id": 13,
            "category": "alcohol",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Чача",
            "description": "",
            "price": 350,
            "additional": ""
        },
        {
            "id": 14,
            "category": "alcohol",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Грузинская настойка из дикой сливы",
            "description": "",
            "price": 450,
            "additional": ""
        },
        {
            "id": 15,
            "category": "alcohol",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Грузинская настойка из хурмы",
            "description": "",
            "price": 450,
            "additional": ""
        },
        {
            "id": 16,
            "category": "alcohol",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Абрикосовая водка. Арцах",
            "description": "",
            "price": 450,
            "additional": ""
        },
        {
            "id": 17,
            "category": "alcohol",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Тутовка. Арцах",
            "description": "",
            "price": 450,
            "additional": ""
        },
        {
            "id": 18,
            "category": "alcohol",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "АрАрАт Ани 7 лет",
            "description": "",
            "price": 450,
            "additional": ""
        },
        {
            "id": 19,
            "category": "alcohol",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "АрАрАт Шарль Азнавур",
            "description": "",
            "price": 3000,
            "additional": ""
        },
        {
            "id": 20,
            "category": "cool",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Borjomi",
            "description": "",
            "price": 300,
            "additional": ""
        },
        {
            "id": 21,
            "category": "cool",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Саирме",
            "description": "",
            "price": 300,
            "additional": ""
        },
        {
            "id": 22,
            "category": "cool",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Освежающий домашний лимонад",
            "description": "",
            "price": 270,
            "additional": ""
        },
        {
            "id": 23,
            "category": "cool",
            "photo": "https://github.com/mininakar/cafe/blob/main/pic/drink.jpg?raw=true",
            "name": "Соки: яблоко, персик, томат",
            "description": "",
            "price": 300,
            "additional": ""
        }
    ]

    constructor(){
        makeAutoObservable(this)
    }

    addFood(food){
        this._food_list.push(food)
    }

    deleteFood(food_id){
        this._food_list=this._food_list.filter(food=> food.id!==food_id)
    }
}

export default FoodStore