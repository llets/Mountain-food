import React, {useContext, useEffect} from 'react'
import {Context} from '../index'
import MealCard from '../component/MealCard'
import {useNavigate} from 'react-router-dom'
import {fetchFood} from "../http/foodAPI";
import {observer} from "mobx-react-lite";
import {createCartItem, fetchCart} from "../http/cartAPI";
import {fetchCategory} from "../http/categoryAPI";

const HinkaliPage = observer(() => {
  const {food} = useContext(Context)
  const {cart}= useContext(Context)
  const {user}= useContext(Context)
    const {category} = useContext(Context)
  const navigate = useNavigate()

    useEffect(() => {
        fetchFood().then(data => {
                food.setFood(data)
            }, () => {
                food.setFood([])
            }
        )
            if (!user.userId) {
                fetchCart(user.userId).then(data => {
                    cart.setCart(data)
                })
            }
            fetchCategory().then(data => {
                category.setCategory(data)
            }, () => {
                category.setCategory([])
            })
    }
    , []);

  const addToCart = async (id_food) => {
      const data = await createCartItem(user.userId, id_food, 1)
      if (JSON.stringify(data) === '{}'){
          navigate('/cart')
      } else{
          cart.addCartProduct(data)
          alert("Блюдо успешно добавлено в корзину")
      }
  }

    const categId = (category._category_list.filter((item) => item.name === 'Хинкали'))[0].id

  return <div style={{
              overflow: 'auto'
     }}>
      {
          food._food_list.map((food) => {
              if (food.category.id === categId) {
                  return <MealCard
                      key={food.id}
                      food = {food}
                      onAdd={addToCart} />
              }
          })
      }
  </div>
})

export default HinkaliPage