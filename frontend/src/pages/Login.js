import React from 'react'
import LoginForm from '../component/LoginForm'

const Login = () => {
    return (
        <div className='container mx-auto'>
            <div className='row'>
                <div className='col-6 py-24 px-28'>
                    <LoginForm />
                </div>
                <div className='col-6'>
                    <div className='bg-purple-700 h-full'></div>
                </div>
            </div>
        </div>
    )
}

export default Login