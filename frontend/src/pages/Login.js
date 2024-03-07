import React from 'react'
import LoginForm from '../component/LoginForm'
import CustomerLogin from '../component/CustomerLogin'
// import LoginCarousel from '../component/Carousel'

const Login = ({prop}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-1\2 xl:p-20 md:p-4 p-20'>
                    { prop === "payhabib" ? <LoginForm /> : <CustomerLogin /> }
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className={`${prop === 'payhabib' ? 'bg-violet-500' : 'bg-cyan-400'} h-full`}>
                        {/* <LoginCarousel /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login