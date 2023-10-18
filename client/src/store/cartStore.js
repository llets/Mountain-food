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
        for (let i = 0; i < this._cart.length; i++){
            if (this._cart[i].id === id){
                this._cart[i].amount +=1
                this._total += this._cart[i].food.price
                break
            }
        }
    }

    decreaseAmountOfProduct(id){
        for (let i = 0; i < this._cart.length; i++){
            if (this._cart[i].id === id){
                if (this._cart[i].amount !== 1) {
                    this._cart[i].amount -= 1
                    this._total -= this._cart[i].food.price
                } else{
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

    deleteCartProductByFood(id){
        let item = this._cart.filter(item => item.foodId === id)
        console.log(item)
        this._total = this._total - (item[0].amount * item[0].food.price)
        this._cart = this._cart.filter(item => item.foodId !== id)
    }

    get Cart(){
        return this._cart
    }

    get Total(){
        return this._total
    }
}

export default CartStore