import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserStore from './store/userStore';
import CartStore from './store/cartStore';
import MealStore from './store/mealStore';
import DrinkStore from './store/drinkStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Context.Provider value={{
    user: new UserStore(),
    cart: new CartStore(),
    meals: new MealStore(),
    drinks: new DrinkStore()
}}>
<App />
</Context.Provider>
)