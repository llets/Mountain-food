import {makeAutoObservable} from 'mobx'
import { v4 as uuidv4 } from 'uuid';

class CartStore{
    _cart =[
        {
        'id': 1,
        'id_user': 1,
        'id_food': 2,
        'amount': 1
        },{
        'id': 2,
        'id_user': 1,
        'id_food': 12,
        'amount': 4
        }
    ]

    constructor(){
        makeAutoObservable(this)
        // this._cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
    }

    setCart(){
       this._cart = localStorage.getItem('cart')
    }

    addCartProduct(id_product, id_user){
        let cart = {
            'id': uuidv4(),
            'id_user': id_user,
            'id_food': id_product,
            'amount': 1
        }
        this._cart.push(cart)
        // localStorage = JSON.stringify(this._cart)
    }

    increaseAmountOfProduct(id){
        for (let item in this._cart){
            if (item.id_meal === id){
                item.amount +=1
                break
            }
        }
        // localStorage = JSON.stringify(this._cart)
    }

    decreaseAmountOfProduct(id){
        for (let item in this._cart){
            if (item.id_meal === id){
                item.amount -=1
                if (item.amount === 0){
                    this.deleteCartProduct(id)
                }
                break
            }
        }
        
    }
    
    deleteCartProduct(id){
        this._cart = this._cart.filter(item => item.id !== id)
    }
    deleteCartProductByFoodId(id_food){
        this._cart = this._cart.filter(item => item.id_food !== id_food)
    }

    get Cart(){
        return this._cart
    }
}

export default CartStore