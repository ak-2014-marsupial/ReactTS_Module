import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";
import SelectedCerPage from "./pages/SelectedCerPage";

const router= createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {index:true,element:<Navigate to={"home"}/>},
            {path:"home", element: <HomePage/>},
            {
                path:"cars", element:<CarsPage/>,children:[
                    {path:"select",element:<SelectedCerPage/>}
                ]
            }
        ]
    }
])
export default router;