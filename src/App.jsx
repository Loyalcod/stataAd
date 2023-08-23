import Login from "./pages/Login/Login"
import LoginAuth from "./pages/Login/LoginAuth/LoginAuth"
import LoginAuthChoose from "./components/Login/loginAuthChoose/LoginAuthChoose"
import { Route, Routes } from "react-router-dom"
import TwoFA from "./components/Login/TwoFA/TwoFA"
import SecretToken from "./components/Login/SecretToken/SecretToken"
import LoginFrom from "./components/Login/LoginForm/LoginFrom"
import Register from "./pages/Register/Register"
import ForgotPassword from "./pages/forgotPasswords/ForgotPassword"
import Entercode from "./pages/forgotPasswords/Entercode"
import NewPassword from "./pages/forgotPasswords/NewPassword"
import Sidebar from "./layout/sidebar/Sidebar"
import Home from "./pages/home/Home"


function App() {
  return (
    <>
        <Routes>
            <Route path="" element={<Login/>}>
                <Route path="/" element={<LoginFrom/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/forgot_password" element={<ForgotPassword/>}></Route>
                <Route path="/enter_code" element={<Entercode/>}></Route>
                <Route path="/new_passcode" element={<NewPassword/>}></Route>
            </Route>
            <Route path="" element={<LoginAuth/>}>
                <Route path="/choose_auth" element={<LoginAuthChoose/>}></Route>
                <Route path='/twoFA' element={<TwoFA/>}></Route>
                <Route path="/secret_token" element={<SecretToken/>}></Route>
            </Route>
            <Route path="" element={<Sidebar/>} >
                <Route path="/home" element={<Home/>}></Route>
            </Route>
            
        </Routes>
    </>
)
}

export default App