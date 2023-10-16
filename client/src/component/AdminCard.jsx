import React from 'react'
import Card from 'react-bootstrap/Card';
import classes from './AdminCard.module.css'
import { Button } from 'react-bootstrap';
import {observer} from 'mobx-react-lite'

const AdminCard = observer(({food, onDelete}) => {
    return (
        <Card className={classes.post}>
            <div className={classes.post_top}>
                <Card.Img src={food.photo} className={classes.post_top_img}/>
                {food.additional && <p className={classes.post_top_angle}>{food.additional}</p>}
                <div className={classes.post_top_price}><span>{food.price.toString()  + " ₽"}</span></div>
            </div>
            <div className={classes.post_content} style={{height:'270px !important'}}>
                <h3>{food.name}</h3>
                <h5>{"Категория: " + food.category}</h5>
                <p>{food.description}</p>
            </div>
            <div className={classes.counter_wrap}>
                <Button id={food.id}
                        onClick={()=>onDelete(food.id)}>Удалить</Button>
            </div>
        </Card>
    )
})

export default AdminCard