import React from 'react';
import { logout } from './LoginSlice';


const Dashboard = () => {

  return (
    <div>
      <h1>Hello</h1>
      <button className='btn' onClick={() => { dispatch(logout()) }}>Logout</button>
    </div>
  )
}

export default Dashboard
