import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"

const App_Leyout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default App_Leyout