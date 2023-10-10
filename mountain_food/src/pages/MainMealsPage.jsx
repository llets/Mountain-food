import {React, useContext} from 'react'
import {Context} from '../index'
import MealCard from '../component/MealCard'
import {useNavigate} from 'react-router-dom'

const MainMealsPage = () => {
  const {meals} = useContext(Context)
  const {cart}= useContext(Context)
  const {users}= useContext(Context)
  const navigate = useNavigate()
  const addToCart = (id_meal, id_user = users.userId) => {
    if (cart._cart.filter((cart_thing) => cart_thing.id_meal == id_meal && cart_thing.id_user == id_user)){
        navigate('/cart')
    } else{
      cart.addCartProduct(id_meal, id_user)
    }
  }
  return <div>
    {meals._meal_list.map((meal)=>{
      if (meal.category == 'main meals'){
        return <MealCard 
        id_meal={meal.id}
        title={meal.name} 
        img={meal.photo} 
        price={meal.price} 
        description={meal.description} 
        addit={meal.additional} 
        categ={meal.category}
        onAdd={addToCart} />
      }
    }
      )}
  </div>
}

export default MainMealsPage