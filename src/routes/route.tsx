import { RoutesPathEnum } from "../types/route";
import HomePage from '../pages/HomePage'
import FavouritesPage from "../pages/FavouritesPage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
    {
        path: RoutesPathEnum.loginPage,
        element: <LoginPage />
    },
    {
        path: '*',
        element: <Navigate to={RoutesPathEnum.loginPage} />
    },
];
export const privateRoutes = [
    {
        path: RoutesPathEnum.homePage,
        element: <HomePage />
    },
    {
        path: RoutesPathEnum.favouritePage,
        element: <FavouritesPage />
    },
    {
        path: RoutesPathEnum.userPage,
        element: <UserPage />
    },
    {
        path: '*',
        element: <Navigate to={RoutesPathEnum.homePage} />
    },
];
