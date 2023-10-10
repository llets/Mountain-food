import React from 'react'
import classes from './DrinkLine.module.css'
import {observer} from 'mobx-react-lite'

const DrinkLine = observer(({name, price}) => {
  return (
    <div className={classes.drink}>
      <div className={classes.name}>{name}</div>
      <div className={classes.price}>{price}</div>
    </div>
  )
})

export default DrinkLine