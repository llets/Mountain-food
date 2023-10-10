import {makeAutoObservable} from 'mobx'

class DrinkStore{
    _drink_list=[
        {
            "id": 1,
            "category": "alcohol",
            "name": "Чача",
            "price": "350 ₽"
        },
        {
            "id": 2,
            "category": "alcohol",
            "name": "Грузинская настойка из дикой сливы",
            "price": "450 ₽"
        },
        {
            "id": 3,
            "category": "alcohol",
            "name": "Грузинская настойка из хурмы",
            "price": "450 ₽"
        },
        {
            "id": 4,
            "category": "alcohol",
            "name": "Абрикосовая водка. Арцах",
            "price": "450 ₽"
        },
        {
            "id": 5,
            "category": "alcohol",
            "name": "Тутовка. Арцах",
            "price": "450 ₽"
        },
        {
            "id": 6,
            "category": "alcohol",
            "name": "АрАрАт Ани 7 лет",
            "price": "450 ₽"
        },
        {
            "id": 7,
            "category": "alcohol",
            "name": "АрАрАт Шарль Азнавур",
            "price": "3000 ₽"
        },
        {
            "id": 8,
            "category": "cool",
            "name": "Borjomi",
            "price": "300 ₽"
        },
        {
            "id": 9,
            "category": "cool",
            "name": "Саирме",
            "price": "300 ₽"
        },
        {
            "id": 10,
            "category": "cool",
            "name": "Освежающий домашний лимонад",
            "price": "270 ₽"
        },
        {
            "id": 11,
            "category": "cool",
            "name": "Соки: яблоко, персик, томат",
            "price": "300 ₽"
        }
    ]

    constructor(){
        makeAutoObservable(this)
    }

    addDrink(drink){
        this._drink_list.push(drink)
    }

    deleteDrink(drink_id){
        this._drink_list=this._drink_list.filter(drink=> drink.id!==drink_id)
    }
}

export default DrinkStore