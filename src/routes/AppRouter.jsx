import Home from "../pages/home/Home";
import Places from "../pages/places/Places";
import Promotions from "../pages/promotions/Promotions";
import Us from "../pages/us/Us";
import Register from "../pages/register/Register";
import LoginPage from "../pages/loginPage/LoginPage"; 
import Couches from "../pages/coaches/Coaches";  
import Plans from "../pages/plans/Plans";
import Reviews from "../pages/reviews/Reviews";
import AdminPage from "../pages/AdminPage/AdminPage";
import TrainerPage from "../pages/TrainerPage/TrainerPage";
import UserPage from "../pages/UserPage/UserPage";
import Assistant from "../pages/assistant/Assistant";

export let AppRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/us',
        element: <Us/>
    },
    {
        path: '/sedes',
        element: <Places/>
    },
    {
        path: '/promociones',
        element: <Promotions/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/coaches',
        element: <Couches/>
    },
    {
        path: '/plans',
        element: <Plans/>
    },
    {
        path: '/reviews',
        element: <Reviews/>
    },
    { 
        path: "/admin", 
        element: <AdminPage /> 
    },
    { 
        path: "/trainer", 
        element: <TrainerPage /> 
    },
    { 
        path: "/user", 
        element: <UserPage /> 
    },
    {
        path: '/assistant',
        element: <Assistant />
    }

]