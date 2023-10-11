import React, {useContext} from 'react'
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import AdminCard from "../component/AdminCard";
import {observer} from "mobx-react-lite";

const AdminPanelPage = observer(() => {
    const {food} = useContext(Context)
    const {cart}= useContext(Context)
    const deleteMeal = (id_food) => {
        cart.deleteCartProductByFoodId(id_food)
        food.deleteFood(id_food)
        console.log(food)
    }
    return <div style={{
        overflow: 'auto'
    }}>
        {food._food_list.map((food)=>{
                    return <AdminCard
                        id_meal={food.id}
                        title={food.name}
                        img={food.photo}
                        price={food.price}
                        description={food.description}
                        addit={food.additional}
                        categ={food.category}
                        onDelete={deleteMeal} />
            }
        )}
    </div>
})

export default AdminPanelPage
