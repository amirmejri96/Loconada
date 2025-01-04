import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FetchUser } from '../../API/AuthApi';
import UserDashboard from '../User/UserDashboard'
import AdminDashboard from '../Admin/AdminDashboard'



const PrivateRoute = () => {
    const Navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({})

    const GetUser = async () => {
        const data = await FetchUser()
        console.log(data)
        const user = data
        console.log('user ',user)
        setUserInfo(user)
    }

    useEffect(()=> {
        GetUser()
    },[])

    const logout = ()=> {
        localStorage.removeItem('token')
        Navigate('/')
    }
    
    return (
    <div>
    
    {
        userInfo.role === 'User' ? <UserDashboard logout={logout} /> : <AdminDashboard logout={logout} />
    }
    </div>
  )
}

export default PrivateRoute