import React, { useEffect, useState } from 'react'
import { GetUserDetail } from './Services'
import App from './App.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Home = () => {

    let [user, setUser] = useState('')

    const GetAllApi = async () => {
        let token = await localStorage.getItem('token')
        let user_data = await GetUserDetail(token)
        setUser(user_data)
    }

    const Exit=()=>{
        Swal.fire({
            title: 'ต้องการออกจากระบบ',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'ออกจากระบบ',
            denyButtonText: `ยกเลิก`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                localStorage.removeItem('token')
                navigate('/')
            }
          })
    }

    let navigate = useNavigate()



    useEffect(() => {
        GetAllApi()
    }, [])


    return (
        <div>
            <div className='header-home'>
                <p className='header-home-text'>สหกรณ์ออมทรัพย์</p>
                {user ? <p className='name'>ชื่อผู้ใช้ : {user.username}</p> : null}
            </div>

            <div className='left-bar'>
                <div onClick={()=>{
                    navigate('/home')
                }} className='left-bar-box'>
                    <p>หน้าหลัก</p>
                </div>
                <div onClick={()=>{
                    navigate('/dashboard')
                }} className='left-bar-box'>
                    <p>แดชบอร์ด</p>
                </div>
                <div onClick={()=>{
                    Exit()
                }} className='left-bar-box'>
                    <p>ออกจากระบบ</p>
                </div>
            </div>
            {/* <div className='box-home'>
                <p className='text-box-home'>Test</p>
            </div> */}

        </div>
    )
}

export default Home