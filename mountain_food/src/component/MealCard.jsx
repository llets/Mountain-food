import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from './MealCard.module.css'
import { Button } from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
import { Context } from 'react';

const MealCard = observer(({id_meal, title, img, price, description, addit, categ, onAdd}) => {
  return (
    <Card className={classes.post}>
      <div className={classes.post_top}>
        <Card.Img src={img} className={classes.post_top_img}/>
        {addit && <p className={classes.post_top_angle}>{addit}</p>}
        <div className={classes.post_top_price}><span>{price}</span></div>
      </div>
      {/* изменение высоты поля для описания в зависисмости от категории */}
      {categ=='main meals' &&
      <div className={classes.post_content} style={{height:'270px'}}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>}
      {categ!='main meals' &&
      <div className={classes.post_content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      }
      <div className={classes.counter_wrap}>
        <Button id={id_meal}
        onClick={()=>onAdd(id_meal)}>+</Button>
      </div>
    </Card>
  )
})

export default MealCard