import React, {useContext} from 'react'
import Card from 'react-bootstrap/Card';
import classes from './MealCard.module.css'
import { Button } from 'react-bootstrap';
import {observer} from 'mobx-react-lite'
import {Context} from "../index";

const MealCard = observer(({food, onAdd}) => {
    const {user} = useContext(Context)
  return (
    <Card className={classes.post}>
      <div className={classes.post_top}>
        <Card.Img src={food.photo} className={classes.post_top_img}/>
        {food.additional && <p className={classes.post_top_angle}>{food.additional}</p>}
        <div className={classes.post_top_price}><span>{food.price  + " ₽"}</span></div>
      </div>
      {/* изменение высоты поля для описания в зависисмости от категории */}
      {food.category==='Основные блюда' &&
      <div className={classes.post_content} style={{height:'270px'}}>
        <h3>{food.name}</h3>
        <p>{food.description}</p>
      </div>}
      {food.category!=='Основные блюда' &&
      <div className={classes.post_content}>
        <h3>{food.name}</h3>
        <p>{food.description}</p>
      </div>
      }
        {
            user.user &&
            <div className={classes.counter_wrap}>
                <Button id={food.id}
                        onClick={()=>onAdd(food.id)}>+</Button>
            </div>
        }
    </Card>
  )
})

export default MealCard