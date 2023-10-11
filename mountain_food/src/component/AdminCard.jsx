import React from 'react'
import Card from 'react-bootstrap/Card';
import classes from './AdminCard.module.css'
import { Button } from 'react-bootstrap';
import {observer} from 'mobx-react-lite'

const AdminCard = observer(({id_meal, title, img, price, description, addit, categ, onDelete}) => {
    return (
        <Card className={classes.post}>
            <div className={classes.post_top}>
                <Card.Img src={img} className={classes.post_top_img}/>
                {addit && <p className={classes.post_top_angle}>{addit}</p>}
                <div className={classes.post_top_price}><span>{price  + " ₽"}</span></div>
            </div>
            {/* изменение высоты поля для описания в зависисмости от категории */}
            {/*{categ==='main meals' &&*/}
            {/*    <div className={classes.post_content} style={{height:'270px'}}>*/}
            {/*        <h3>{title}</h3>*/}
            {/*        <p>{description}</p>*/}
            {/*    </div>}*/}
            {/*{(categ==='alcohol' || categ==='cool') &&*/}
            {/*    <div className={classes.post_content} style={{height:'100px'}}>*/}
            {/*        <h3>{title}</h3>*/}
            {/*        <p>{description}</p>*/}
            {/*    </div>}*/}
            {/*{(categ==='hachapuri' || categ==='hinkali') &&*/}
            {/*    <div className={classes.post_content}>*/}
            {/*        <h3>{title}</h3>*/}
            {/*        <p>{description}</p>*/}
            {/*    </div>*/}
            {/*}*/}
            <div className={classes.post_content} style={{height:'270px'}}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={classes.counter_wrap}>
                <Button id={id_meal}
                        onClick={()=>onDelete(id_meal)}>Удалить</Button>
            </div>
        </Card>
    )
})

export default AdminCard