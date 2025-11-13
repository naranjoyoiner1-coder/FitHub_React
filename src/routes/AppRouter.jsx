import Home from "../pages/home/Home";
import Places from "../pages/places/Places";
import Promotions from "../pages/promotions/Promotions";
import Us from "../pages/us/Us";
import Register from "../pages/register/Register";
import LoginPage from "../pages/loginPage/LoginPage"; 
import Couches from "../pages/coaches/Coaches";  
import Plans from "../pages/plans/Plans";
import Reviews from "../pages/reviews/Reviews";
import Terms from "../pages/terms/Terms";

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
        path: '/terms',
        element: <Terms/>
    }

]