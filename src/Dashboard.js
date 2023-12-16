import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from './LoginSlice'


const Dashboard = () => {

  const out = useSelector((state) => state.islogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!out) {
      navigate('/')
    }
  }, [out, navigate])

  return (
    <div>
      <h1>Hello</h1>
      <button className='btn' onClick={() => { dispatch(logout()) }}>Logout</button>
    </div>
  )
}

export default Dashboard
