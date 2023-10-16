import React from 'react'
import classes from './DrinkLine.module.css'
import {observer} from 'mobx-react-lite'
import {Button} from "react-bootstrap";

const DrinkLine = observer(({drink, onAdd}) => {
  return (
      <div style={{
          display: 'flex'
      }}>
          <div className={classes.drink}>
              <div className={classes.name}>{drink.name}</div>
              <div className={classes.price}>{drink.price + " ₽"}</div>
          </div>
          <div className={classes.counter_wrap}>
              <Button id={drink.id}
                      onClick={()=>onAdd(drink.id)}>+</Button>
          </div>
      </div>
  )
})

export default DrinkLine