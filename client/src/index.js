import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserStore from './store/userStore';
import CartStore from './store/cartStore';
import FoodStore from './store/foodStore';
import CategoryStore from "./store/categoryStore";
import StaticPhotoStore from "./store/staticPhotoStore";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Context.Provider value={{
    user: new UserStore(),
    cart: new CartStore(),
    food: new FoodStore(),
    category: new CategoryStore(),
    staticPhoto: new StaticPhotoStore()
    }}>
<App />
</Context.Provider>
)