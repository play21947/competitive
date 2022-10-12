import axios from 'axios'
import Swal from 'sweetalert2'

let end_point = 'http://192.168.105.243:3001'



export const LoginService=(username, password)=>{
    return new Promise((resolve, reject)=>{
        if(username && password){
            axios.post(end_point+'/api/login',{
                username: username,
                password: password
            }).then((res)=>{
                resolve(res.data)
            })
        }else{
            Swal.fire("กรุณาใส่ข้อมูลให้ครบถ้วน")
        }
    })
}


export const GetUserDetail=(token)=>{
    return new Promise((resolve, reject)=>{
        axios.get(end_point+"/api/user",{
            headers:{
                auth: token
            }
        }).then((res)=>{
            resolve(res.data)
        })
    })
}