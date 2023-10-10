import {makeAutoObservable} from 'mobx'
import { v4 as uuidv4 } from 'uuid';

class CartStore{
    _cart =[
        {
        'id': 1,
        'id_user': 1,
        'id_meal': 2,
        'amount': 1
        },{
        'id': 2,
        'id_user': 1,
        'id_meal': 12,
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
            'id_meal': id_product,
            'amount': 1
        }
        this._cart.push(cart)
        // localStorage = JSON.stringify(this._cart)
    }

    increaseAmountOfProduct(id){
        for (let item in this._cart){
            if (item.id_meal == id){
                item.amount +=1
                break
            }
        }
        // localStorage = JSON.stringify(this._cart)
    }

    decreaseAmountOfProduct(id){
        for (let item in this._cart){
            if (item.id_meal == id){
                item.amount -=1
                if (item.amount == 0){
                    this.deleteCartProduct(id)
                }
                break
            }
        }
        
    }
    
    deleteCartProduct(id){
        let del_index = 0
        for (let i = 0; i < this._cart.length; i++) {
            if (this._cart[i].id == id){
                del_index = i
                break
            }
        }
        this._cart.splice(del_index, 1)
    }

    get Cart(){
        return this._cart
    }
}

export default CartStore