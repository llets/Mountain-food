import {makeAutoObservable} from 'mobx'

class FoodStore{
    _food_list=[
    ]

    constructor(){
        this._food_list=[]
        makeAutoObservable(this)
    }

    setFood(food){
        this._food_list = food
    }

    addFood(food){
        this._food_list.push(food)
    }

    deleteFood(food_id){
        this._food_list=this._food_list.filter(food=> food.id!==food_id)
    }

    get FoodList(){
        return this._food_list
    }
}

export default FoodStore