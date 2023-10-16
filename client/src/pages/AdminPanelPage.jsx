import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../index";
import AdminCard from "../component/AdminCard";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import CreateHinkali from "../component/modal/CreateHinkali";
import CreateHachapuri from "../component/modal/CreateHachapuri";
import CreateDrink from "../component/modal/CreateDrink";
import CreateMainMeal from "../component/modal/CreateMainMeal";
import {deleteFood, fetchFood} from "../http/foodAPI";

const AdminPanelPage = observer(() => {
    const {food} = useContext(Context)

    useEffect(() => {
        fetchFood().then(data => {
                food.setFood(data)
            }, data => {
                food.setFood([])
            }
        )
    }, []);
    const deleteMeal = async (id_food) => {
        await deleteFood(id_food)
        food.deleteFood(id_food)
    }

    const [HinkaliVisible, setHinkaliVisible] = useState(false)
    const [HachapuriVisible, setHachapuriVisible] = useState(false)
    const [MainMealVisible, setMainMealVisible] = useState(false)
    const [DrinkVisible, setDrinkVisible] = useState(false)

    return <div className="overflow-auto d-flex flex-column flex-wrap">
        <div className="d-flex flex-row align-self-center justify-content-around mt-3"
        style={{
            width: '850px'
        }}>
            <Button style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #d0b97d',
                font:  `20px Roboto`
            }}
            onClick={()=>setHinkaliVisible(true)}>Добавить Хинкали</Button>
            <Button style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #d0b97d',
                font: '20px Roboto'
            }}
            onClick={()=>setHachapuriVisible(true)}>Добавить Хачапури</Button>
            <Button style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #d0b97d',
                font: '20px Roboto'
            }}
            onClick={()=>setMainMealVisible(true)}>Добавить основное блюдо</Button>
            <Button style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #d0b97d',
                font: '20px Roboto'
            }}
            onClick={()=>setDrinkVisible(true)}>Добавить Напиток</Button>
        </div>
        <div>
            {food._food_list.map((food)=>{
                    return <AdminCard
                        key={food.id}
                        food={food}
                        onDelete={deleteMeal}
                        />
                }
            )}
        </div>
        <CreateHinkali show={HinkaliVisible} onHide={() => setHinkaliVisible(false)}/>
        <CreateHachapuri show = {HachapuriVisible} onHide={() => setHachapuriVisible(false)}/>
        <CreateDrink show={DrinkVisible} onHide={() => setDrinkVisible(false)}/>
        <CreateMainMeal show={MainMealVisible} onHide={() => setMainMealVisible(false)}/>
    </div>
})

export default AdminPanelPage
