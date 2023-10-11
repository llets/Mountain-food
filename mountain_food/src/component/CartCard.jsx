import {React,  useContext} from 'react'
import {Button} from 'react-bootstrap'
import classes from './CartCard.module.css'
import CartItem from './CartItem'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'

const CartCard = observer(() => {
    const {cart} = useContext(Context)
    const {meals} = useContext(Context)
    const {user} = useContext(Context)
    let meals_list = cart._cart.filter((cart_item) => cart_item.id_user === user._user.id)
    meals_list = meals_list.map((item) =>
    {
        let m = (meals._meal_list).filter((mea) => mea.id === item.id_meal)
          item.name = (m[0]).name
          item.photo = (m[0]).photo
          item.price = (m[0]).price
          return item
    })
    let total_price = 0
    meals_list.map((meal) => {
        total_price += meal.price.split(' ')[0] * meal.amount
    })

    const increaseAmount = (id_m) => {
        cart.increaseAmountOfProduct(id_m)
    }
    const decreaseAmount = (id_m) => {
        cart.decreaseAmountOfProduct(id_m)
    }
    const deleteMeal = (id_m) => {
        cart.deleteCartProduct(id_m)
    }
  return (
    <div className={classes.cart}>
       <div className={classes.column_1}>
            <div className={classes.title}>Блюда</div>
            <div className={classes.meal_list}>
                {meals_list.map((meal) => {
                    return <CartItem 
                    key={meal.id}
                    id={meal.id} 
                    name={meal.name} 
                    photo={meal.photo} 
                    price={meal.price} 
                    amount={meal.amount}
                    increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} deleteMeal={deleteMeal}/>}
                )}
            </div>
            <div className={classes.line}></div>
            <div className={classes.total}>
                <div className={classes.total_header}>Итого:</div>
                <div className={classes.total_price}>{total_price}</div>
            </div>
       </div>
       <div className={classes.column_2}>
            <div className={classes.title}>Оплата</div>
            <div className={classes.payment_info}>
            <div className={classes.textOnInput}>
                <label>Номер карты</label>
                <input 
                    className={classes.card}
                    type='text'
                    placeholder='1234 5678 9012 3456'>
                </input>
            </div>
            <div className={classes.textOnInput}>
                <label>Владелец</label>
                <input 
                    className={classes.owner}
                    type='text'
                    placeholder='Гай Юлий'>
                </input>
            </div>
                <div className={classes.card_additional}>
                    <div className={classes.textOnInput}>
                        <label>Срок</label>
                        <input
                            className={classes.expiration}
                            type='text'
                            minLength='7'
                            maxLength='7'
                            placeholder='MM/YYYY'>
                        </input>  
                    </div>
                    <div className={classes.textOnInput}>
                        <label>CVV</label>
                        <input
                            className={classes.cvv}
                            type='text'
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;">
                        </input>
                    </div>
                </div>
            </div>
            <Button className={classes.pay}>Оплатить</Button>
       </div>
    </div>
  )
})

export default CartCard
