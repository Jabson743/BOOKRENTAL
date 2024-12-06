import SignUp from "../auth/SignUp";
import Login from "../auth/Login";
import MainPage from "../componenets/MainPage";

const routes = [
     {
          path: "",
          element: <MainPage />
     },
     {
          path: "/login",
          element: <Login/>
     },
     {
          path: "/signup",
          element: <SignUp/>
     },
     {
          path: "/mainpage",
          element: <MainPage/>
     }
]

export default routes;