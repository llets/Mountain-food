import {
    ADMIN_PANEL_ROUTE,
    AUTH_REG_ROUTE,
    CART_ROUTE,
    DRINKS_ROUTE,
    HACHAPURI_ROUTE,
    HINKALI_ROUTE,
    HOME_ROUTE,
    MAIN_MEALS_ROUTE
} from "./utils/consts"
import AdminPanelPage from "./pages/AdminPanelPage";
import CartPage from "./pages/CartPage";
import IndexPage from "./pages/IndexPage";
import AuthAndRegPage from "./pages/AuthAndRegPage";
import HinkaliPage from "./pages/HinkaliPage";
import HachapuriPage from "./pages/HachapuriPage";
import MainMealsPage from "./pages/MainMealsPage";
import DrinksPage from "./pages/DrinksPage";

export const adminRoutes = [
    {
        path: ADMIN_PANEL_ROUTE,
        element: <AdminPanelPage/>
    }
]

export const authRoutes = [
    {
        path: CART_ROUTE,
        element: <CartPage/>
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <IndexPage/>
    },
    {
        path: AUTH_REG_ROUTE,
        element: <AuthAndRegPage/>
    },
    {
        path: HINKALI_ROUTE,
        element: <HinkaliPage/>
    },
    {
        path: HACHAPURI_ROUTE,
        element: <HachapuriPage/>
    },
    {
        path: MAIN_MEALS_ROUTE,
        element: <MainMealsPage/>
    },
    {
        path: DRINKS_ROUTE,
        element: <DrinksPage/>
    }
]