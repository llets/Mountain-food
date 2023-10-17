import React from 'react'
import {Button} from 'react-bootstrap'
import classes from './CartItem.module.css'
import {observer} from 'mobx-react-lite'

const CartItem = observer(({item, increaseAmount, decreaseAmount, deleteMeal}) => {
    return (
    <div className={classes.cart_box}>
          <img className={classes.cart_img} src={item.food.photo} alt="photo of cart food"></img>
          <div className={classes.name_amount}>
            <div className={classes.name}>{item.food.name}</div>
            <div className={classes.price}>{item.food.price}</div>
            <Button className={classes.btn_delete}
            onClick={()=>deleteMeal(item.id)}>X</Button>
            <div className={classes.counter_wrap}>
              <Button className={classes.btn_decrease} id={item.id}
              onClick={()=>decreaseAmount(item.id)}>-</Button>
              <b>{item.amount}</b>
              <Button className={classes.btn_increase} id={item.id}
              onClick={()=>increaseAmount(item.id)}>+</Button>
            </div>
        </div>
    </div>
  )
})

export default CartItem
