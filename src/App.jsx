import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Account, SignIn, SignUp } from "./pages";
import { PreloaderLogin, PreloaderSignUp } from "./preloader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/preloaderlogin",
      element: <PreloaderLogin />,
    },
    {
      path: "/preloader",
      element: <PreloaderSignUp />,
    },
    {
      path: "/account",
      element: <Account />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
