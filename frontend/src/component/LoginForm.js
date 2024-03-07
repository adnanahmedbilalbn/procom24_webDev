import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {RiWallet2Fill} from 'react-icons/ri'
import { useFetchUsersQuery } from '../store';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from '../store';

const LoginForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let message = "";
    let messageClass = "hidden";

    const {data, isSuccess} = useFetchUsersQuery(username);

    if (data){
        if(data?.username === username){
            console.log("Correct Username")
            message = "Username Matched";
            messageClass = "text-sm text-green-700";
        }
        else{
            console.log("Incorrect Username")
            message = "Unregistered Username";
            messageClass = "text-sm text-red-700";
        }
    }

    function usernameChange(event){
        setUsername(event.target.value);
    }

    function passwordChange(event){
        setPassword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(data){
            if(data.username === username && data.password === (password + "123")){
                dispatch(setUser("Saad"))
                navigate("/")
            }
            else{
                alert("Wrong Email or Password")
            }
        }
    }

    return (
        <div className='xl:mx-16'>
            <div className=' flex align-middle justify-center text-center py-4'>
                <span className='text-2xl text-violet-500 pe-2'><RiWallet2Fill /></span>
                <span className='font-semibold'>PayHabib</span>
            </div>
            <div className='my-3 text-center'>
                <h3 className='p-3 text-3xl font-bold'>Login</h3>
                <h3 className='py-3 text-3xl font-bold'><span className='text-violet-500'>PayHabib</span> account</h3>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="username">
                    <Form.Label className='font-bold'>Username</Form.Label>
                    <Form.Control required className='bg-light' type="text" placeholder="Enter username" onChange={usernameChange}/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                    <Form.Label className='font-bold'>Password</Form.Label>
                    <Form.Control required className='bg-light' type="password" placeholder="Enter at least 8+ characters" onChange={passwordChange}/>
                </Form.Group>
                <Form.Group className="mt-5">
                    <Form.Control className='bg-violet-600 text-white font-bold text-2xl py-2 shadow-xl' type="submit" value="Sign in" />
                    </Form.Group>
                <Form.Group className="mt-5 d-grid">
                    <Button type='submit' size='lg' className='border-none sign-in-btn bg-violet-500 hover:bg-violet-500  text-white font-bold text-xl py-2 shadow-xl'>Sign in</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default LoginForm