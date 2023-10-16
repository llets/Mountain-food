import {makeAutoObservable} from 'mobx'

class CartStore{
    constructor(){
        this._cart=[]
        makeAutoObservable(this)
    }

    _cart=[
    ]
    _total = 0

    setCart(thing){
        this._cart = thing[0]
        this._total = thing[1]
    }

    addCartProduct(food){
        this._cart.push(food)
    }

    increaseAmountOfProduct(id){
        for (let item in this._cart){
            if (item.id === id){
                item.amount +=1
                break
            }
        }
    }

    decreaseAmountOfProduct(id){
        for (let item in this._cart){
            if (item.id === id){
                item.amount -=1
                if (item.amount === 0){
                    this.deleteCartProduct(id)
                }
                break
            }
        }
    }
    
    deleteCartProduct(id){
        let item = this._cart.filter(item => item.id === id)
        this._total = this._total - (item[0].amount * item[0].food.price)
        this._cart = this._cart.filter(item => item.id !== id)
    }

    get Cart(){
        return this._cart
    }

    get Total(){
        return this._total
    }
}

export default CartStore