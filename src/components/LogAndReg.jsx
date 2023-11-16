import React from 'react'
import Register from './Register'
import Login from './Login'
import '../styling/LogReg.css'

const LogAndReg = () => {
    return (
        <div>
            <div className='Home'>
                <div className='NavBarLogReg'>
                    <p className='NavBarHeader'>Sign In</p>
                </div>
                <div className='Body'>
                    <div className='logRegPage'>
                        <Register />

                        <Login />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LogAndReg