import React from 'react'
import classes from './DrinkLine.module.css'
import {observer} from 'mobx-react-lite'
import {Button} from "react-bootstrap";

const DrinkLine = observer(({id_drink, name, price, onAdd}) => {
  return (
      <div style={{
          display: 'flex'
      }}>
          <div className={classes.drink}>
              <div className={classes.name}>{name}</div>
              <div className={classes.price}>{price}</div>
          </div>
          <div className={classes.counter_wrap}>
              <Button id={id_drink}
                      onClick={()=>onAdd(id_drink)}>+</Button>
          </div>
      </div>
  )
})

export default DrinkLine