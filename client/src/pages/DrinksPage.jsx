import React, {useContext, useEffect} from 'react'
import {Context} from '../index'
import {useNavigate} from 'react-router-dom'
import {fetchFood} from "../http/foodAPI";
import {observer} from "mobx-react-lite";
import {createCartItem, fetchCart} from "../http/cartAPI";
import DrinkCard from "../component/DrinkCard";

const DrinksPage = observer( () => {
    const {food} = useContext(Context)
    const {cart}= useContext(Context)
    const {user}= useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
            fetchFood().then(data => {
                    food.setFood(data)
                }, data => {
                    food.setFood([])
                }
            )
            if (!user.userId) {
                fetchCart(user.userId).then(data => {
                    cart.setCart(data)
                })
            }
        }
        , []);

    const addToCart = (id_food) => {
        createCartItem(user.userId, id_food, 1).then( data =>{
            if (JSON.stringify(data) === '{}'){
                navigate('/cart')
            } else{
                alert("Напиток успешно добавлен в корзину")
            }
        })
    }

  return <div style={{
      overflow: 'auto'
  }}>
      <DrinkCard
      drinks={food._food_list.filter((food) => food.category === 'Алкогольные')}
      key={1}
      category='Алкогольные'
      onAdd={addToCart}/>
      <DrinkCard 
      drinks={food._food_list.filter((food) => food.category === 'Прохладительные')}
      key={2}
      category='Прохладительные'
      onAdd={addToCart}/>
  </div>
})

export default DrinksPage