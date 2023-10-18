import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../index'
import MealCard from '../component/MealCard'
import {useNavigate} from 'react-router-dom'
import {fetchFood} from "../http/foodAPI";
import {observer} from "mobx-react-lite";
import {createCartItem, fetchCart} from "../http/cartAPI";
import {fetchCategory} from "../http/categoryAPI";

const HachapuriPage = observer(() => {
    const {food} = useContext(Context)
    const {cart}= useContext(Context)
    const {user}= useContext(Context)
    const {category} = useContext(Context)

    const [categoryId, setCategoryId] = useState(0)

    const navigate = useNavigate()

  useEffect(() => {
        fetchFood().then(data => {
              food.setFood(data)
            }, () => {
              food.setFood([])
            }
        )
          if (user.userId !== 0) {
          fetchCart(user.userId).then(data => {
              cart.setCart(data)
          })
      }
          fetchCategory().then(data => {
              category.setCategory(data)
              setCategoryId(category.getCategoryId('Хачапури'))
          })
      }
      , []);

  const addToCart = (id_food) => {
    createCartItem(user.userId, id_food, 1).then( data =>{
      if (JSON.stringify(data) === '{}'){
        navigate('/cart')
      } else{
        alert("Блюдо успешно добавлено в корзину")
      }
    })
  }

  return <div style={{
    overflow: 'auto'
  }}>
        {
          food._food_list.map((food) => {
              if (food.category.id === categoryId) {
                  return <MealCard
                      key={food.id}
                      food = {food}
                      onAdd={addToCart} />
                }
            })
        }

    {/*{food._food_list.map((food)=>{*/}
    {/*    if (food.category === 'Хачапури'){*/}
    {/*      return <MealCard*/}
    {/*          key={food.id}*/}
    {/*          food = {food}*/}
    {/*          onAdd={addToCart} />*/}
    {/*    }*/}
    {/*}*/}
    {/*)}*/}
  </div>
})

export default HachapuriPage