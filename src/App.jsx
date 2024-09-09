import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn.jsx/SignIn";
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      </>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
