import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function Register() {

  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  return (
    <div>

      <div className="header">

        <div className="Top">
          <p className=" Text-top "> Welcome to pet market </p>
        </div>

        <div className="box">

          <p className="sign-in"> Register </p>

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

              <input onChange={(e) => {
                setPassword(e.target.value)
                // console.log(e.target.value)
              }} className="input-box" placeholder="Password"></input>


            </div>

          </div>


          <div className="Footer">

            <button onClick={() => {
              console.log(username)
              console.log(password)
            }} className="button"> เข้าสู่ระบบ </button>

            <div className="Footer-left">
              <p> <a href="">   </a></p>
            </div>

            <div className="Footer-right">
              <p> <a href="">   </a></p>
            </div>
          </div>

        </div>


      </div>



    </div>
  );
}

export default Register;
