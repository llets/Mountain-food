import {React, useContext} from 'react'
import {Context} from '../index'
import MealCard from '../component/MealCard'
import {useNavigate} from 'react-router-dom'

const MainMealsPage = () => {
  const {food} = useContext(Context)
  const {cart}= useContext(Context)
  const {users}= useContext(Context)
  const navigate = useNavigate()
  const addToCart = (id_food, id_user = users.userId) => {
    if (cart._cart.filter((cart_thing) => cart_thing.id_meal === id_food && cart_thing.id_user === id_user)){
        navigate('/cart')
    } else{
      cart.addCartProduct(id_food, id_user)
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