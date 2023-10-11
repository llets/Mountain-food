import React from 'react'
import {Button} from 'react-bootstrap'
import classes from './CartItem.module.css'
import {observer} from 'mobx-react-lite'

const CartItem = observer(({id, name, photo, price, amount, increaseAmount, decreaseAmount, deleteMeal}) => {
  return (
    <div className={classes.cart_box}>
          <img className={classes.cart_img} src={photo}></img>
          <div className={classes.name_amount}>
            <div className={classes.name}>{name}</div>
            <div className={classes.price}>{price}</div>
            <Button className={classes.btn_delete}
            onClick={()=>deleteMeal(id)}>X</Button>
            <div class={classes.counter_wrap}>
              <Button className={classes.btn_decrease} id={id}
              onClick={()=>{decreaseAmount(id)}}>-</Button>
              <b>{amount}</b>
              <Button className={classes.btn_increase} id={id}
              onClick={()=>{increaseAmount(id)}}>+</Button>
            </div>
        </div>
    </div>
  )
})

export default CartItem
