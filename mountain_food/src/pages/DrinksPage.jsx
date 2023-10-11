import React, { useContext } from 'react'
import {Context} from '../index'
import DrinkCard from '../component/DrinkCard'
import {useNavigate} from "react-router-dom";

const DrinksPage = () => {
    const {food} = useContext(Context)
    const {cart}= useContext(Context)
    const {user}= useContext(Context)
    const navigate = useNavigate()
    const addToCart = (id_food) => {
        if (cart._cart.filter((cart_thing) => cart_thing.id === id_food && cart_thing.id_user === user.userId)){
            navigate('/cart')
        } else{
            cart.addCartProduct(id_food, user.userId)
        }
    }
  return <div style={{
      overflow: 'auto'
  }}>
      <DrinkCard 
      drinks={food._food_list.filter((food) => food.category === 'alcohol')}
      category='Алкогольные'
      onAdd={addToCart}/>
      <DrinkCard 
      drinks={food._food_list.filter((food) => food.category === 'cool')}
      category='Прохладительные'
      onAdd={addToCart}/>
  </div>
}

export default DrinksPage