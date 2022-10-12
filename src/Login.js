import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { GetUserDetail, LoginService } from "./Services"
import Swal from "sweetalert2"

const Login = () => {

    let navigate = useNavigate()

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')


    return (
        <div className="header">

            <div className="Top">
                <p className=" Text-top "> Welcome to pet market </p>
            </div>

            <div className="box">

                <p className="sign-in"> Sign in </p>

                <div className='box-inside'>

                    <div className="input">

                        <input onChange={(e) => {
                            setUsername(e.target.value)
                            // console.log(e.target.value)
                        }} className="input-box" placeholder="username"></input>

                        <input onChange={(e) => {
                            setPassword(e.target.value)
                            // console.log(e.target.value)
                        }} className="input-box" placeholder="Password"></input>

                    </div>

                </div>


                <div className="Footer">

                    <button onClick={() => {
                        // console.log(username)
                        // console.log(password)

                        LoginService(username, password).then((result) => {
                            if (result.success) {
                                localStorage.setItem("token", result.token)
                                Swal.fire("เข้าสู่ระบบสำเร็จ")
                                navigate('/home')
                            } else {
                                Swal.fire("ไอดีหรือรหัสผ่านไม่ถูกต้อง")
                            }
                        })

                    }} className="button">เข้าสู่ระบบ</button>

                    <div className="Footer-left">
                        <p> <a href="">   </a></p>
                    </div>

                    <div className="Footer-right">
                        <p> <a href="">   </a></p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Login