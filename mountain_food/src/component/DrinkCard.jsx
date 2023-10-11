import React, { useContext } from 'react'
import DrinkLine from './DrinkLine'
import classes from './DrinkCard.module.css'
import {observer} from 'mobx-react-lite'

const DrinkCard = observer(({drinks, category, onAdd}) => {
    return (
        <div style={{
            overflow: 'auto'
        }}>
            <div className={classes.drink_card}>
                <h1 className={classes.header}>{category}</h1>
                <div className={classes.drinks_list}>
                    {drinks.map((drink)=>{
                            return <DrinkLine key={drink.id} name={drink.name} price={drink.price + " ₽"} onAdd={onAdd}/>
                        }
                    )}
                </div>
            </div>
        </div>

    )
})

export default DrinkCard