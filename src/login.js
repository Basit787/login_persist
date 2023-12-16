import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { entry } from './LoginSlice';


const userName = 'basit';
const passWord = 'asdf';

const Login = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');



    const login = useSelector((state) => state.islogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (login) {
            navigate('/dashboard')
        }
    }, [login, navigate])


    const handleUser = (event) => {
        setUser(event.target.value);
    }
    const handlePass = (event) => {
        setPass(event.target.value);
    }


    const handleClick = () => {
        if (user === userName && pass === passWord) {
            dispatch(entry())
        }
        else {
            alert('Wrong credentials!!!')
        }
    }




    return (
        <div>
            <section className='container'>
                <h1>Login Form</h1>

                <div className='card'>
                    <div >
                        <form className='login'>
                            <label className='label'>Username<input type='text' value={user} placeholder='enter username' className='input' required onChange={handleUser} /></label>
                            <label className='label'>Password<input type='password' value={pass} placeholder='enter your password' className='input' required onChange={handlePass} /></label>
                            <button className='btn' onClick={handleClick}>LogIn</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
