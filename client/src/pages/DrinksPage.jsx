import React, {useContext, useEffect} from 'react'
import {Context} from '../index'
import {useNavigate} from 'react-router-dom'
import {fetchFood} from "../http/foodAPI";
import {observer} from "mobx-react-lite";
import {createCartItem, fetchCart} from "../http/cartAPI";
import DrinkCard from "../component/DrinkCard";
import {fetchCategory} from "../http/categoryAPI";

const DrinksPage = observer( () => {
    const {food} = useContext(Context)
    const {cart}= useContext(Context)
    const {user}= useContext(Context)
    const {category}= useContext(Context)

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
            })
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
          {
              category._category_list.filter((item) => item.type === 'Напиток').map((c) => {
                      // if (c.type === 'Напиток') {
                          let drinks = food._food_list.filter((food) => food.category.id === c.id)
                          return <DrinkCard
                              drinks={drinks}
                              key={c.id}
                              category={c.name}
                              onAdd={addToCart}/>
                      // }
                  }
              )
          }
  </div>
})

export default DrinksPage