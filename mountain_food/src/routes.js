import { ADMIN_ROUTE, AUTH_REG_ROUTE, CART_ROUTE, DRINKS_ROUTE, HACHAPURI_ROUTE, HINKALI_ROUTE, HOME_ROUTE, MAIN_MEALS_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,   
        Component: Cart
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Admin
    },
    {
        path: AUTH_REG_ROUTE,   
        Component: Cart
    },
    {
        path: HINKALI_ROUTE,
        Component: Admin
    },
    {
        path: HACHAPURI_ROUTE,   
        Component: Cart
    },
    {
        path: MAIN_MEALS_ROUTE,
        Component: Admin
    },
    {
        path: DRINKS_ROUTE,   
        Component: Cart
    },
]