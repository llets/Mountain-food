import {React, useContext, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import classes from './CartCard.module.css'
import CartItem from './CartItem'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {fetchFood} from "../http/foodAPI";
import {changeAmount, deleteCartItem, fetchCart} from "../http/cartAPI";
import {useNavigate} from "react-router-dom";

const CartCard = observer(() => {
    const {cart} = useContext(Context)
    const {food} = useContext(Context)
    const {user} = useContext(Context)
    useEffect(() => {
        fetchFood().then(data => {
                food.setFood(data);
            }, data => {
                food.setFood([])
            }
        )
        fetchCart(user.userId).then(data => {
            cart.setCart(data)
        })
    }, []);

    const increaseAmount = async (id_m) => {
        await changeAmount(id_m, "increase")
        cart.increaseAmountOfProduct(id_m)
    }
    const decreaseAmount = async (id_m) => {
        await changeAmount(id_m, "decrease")
        cart.decreaseAmountOfProduct(id_m)
    }
    const deleteMeal = async (id_m) => {
        await deleteCartItem(id_m)
        cart.deleteCartProduct(id_m)
    }

  return (
    <div className={classes.cart}>
       <div className={classes.column_1}>
            <div className={classes.title}>Блюда</div>
            <div className={classes.meal_list}>
                {cart.Cart.map((item) => {
                    return <CartItem
                        key={item.id}
                        item = {item}
                    increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} deleteMeal={deleteMeal}/>}
                )}
            </div>
            <div className={classes.line}></div>
            <div className={classes.total}>
                <div className={classes.total_header}>Итого:</div>
                <div className={classes.total_price}>{cart.Total}</div>
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
