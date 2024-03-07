import React from 'react'
import LoginForm from '../component/LoginForm'
import CustomerLogin from '../component/CustomerLogin'
import LoginCarousel from '../component/Carousel'

const Login = ({prop}) => {
    return (
        <div className='container mx-auto'>
            <div className='row'>
                <div className='col-6 py-24 px-28'>
                    { prop === "payhabib" ? <LoginForm /> : <CustomerLogin /> }
                </div>
                <div className='col-6'>
                    <div className={`${prop === 'payhabib' ? 'bg-violet-500' : 'bg-cyan-400'} h-full`}>
                        <LoginCarousel />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login