import {React, useContext} from 'react'
import {Context} from '../index'
import MealCard from '../component/MealCard'
import {useNavigate} from 'react-router-dom'

const MainMealsPage = () => {
  const {food} = useContext(Context)
  const {cart}= useContext(Context)
  const {user}= useContext(Context)
  const navigate = useNavigate()
  const addToCart = (id_food) => {
    if (cart._cart.filter((cart_thing) => cart_thing.id_meal === id_food && cart_thing.id_user === user.userId)){
        navigate('/cart')
    } else{
      cart.addCartProduct(id_food, user.userId)
    }
  }
  return <div style={{
    overflow: 'auto'
  }}>
    {food._food_list.map((food)=>{
      if (food.category === 'main meals'){
        return <MealCard 
        id_meal={food.id}
        title={food.name}
        img={food.photo}
        price={food.price}
        description={food.description}
        addit={food.additional}
        categ={food.category}
        onAdd={addToCart} />
      }
    }
      )}
  </div>
}

export default MainMealsPage