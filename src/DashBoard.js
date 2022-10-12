import react from 'react'
import { useNavigate } from 'react-router-dom'


const DashBoard = () => {

    let navigate = useNavigate()


    return (
        <div>

            <div onClick={()=>{
                navigate('/home')
            }} className='header-home'>
                <p className='header-home-text'>แดชบอร์ด</p>
            </div>

            <div className='left-bar'>
                <div onClick={() => {
                    navigate('/home')
                }} className='left-bar-box'>
                    <p>หน้าหลัก</p>
                </div>
                <div onClick={() => {
                    navigate('/dashboard')
                }} className='left-bar-box'>
                    <p>แดชบอร์ด</p>
                </div>
            </div>

        </div>
    )
}

export default DashBoard