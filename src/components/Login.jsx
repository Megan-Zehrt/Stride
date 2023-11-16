import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styling/LogReg.css'


const Login = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errormsg, seterrormsg] = useState("")
    const navigate = useNavigate()

    const username = localStorage.getItem("username")

    const login = (e) => {
        e.preventDefault();
    
        const tempObjectToSendToDB = {
            email,
            password
        };
    
        console.log(tempObjectToSendToDB)
        // SUBMITING THE PRODUCTS
        axios.post("http://localhost:8000/api/login", tempObjectToSendToDB, {withCredentials:true})
            .then(res => {
                console.log("✅✅✅✅", res.data)
                if(res.data.message== "Login successful"){
                    localStorage.setItem("username", res.data.user.username)
                    const username = localStorage.getItem("username")
                    localStorage.setItem("image", res.data.user.image)
                    const image = localStorage.getItem("image")
                    localStorage.setItem("caption", res.data.user.caption)
                    const caption = localStorage.getItem("caption")
                    localStorage.setItem("email", res.data.user.email)
                    const email = localStorage.getItem("email")
                    localStorage.setItem("_id", res.data.user._id)
                    const _id = localStorage.getItem("_id")
                    console.log(username)
                    console.log(image)
                    console.log(email)
                    console.log(caption)
                    console.log(_id)
                    navigate("/stride/your/profile")
                }else{
                    seterrormsg(res.data.message)
                }
            })
            .catch(err => console.log("❌❌❌", err))
    }


    return (
        <div className='LoginBox'>
            <h1 className='LoginHeader'>Login Here</h1>
            <form onSubmit={login}>
                <div>
                    <label className='Loginlabelemail'>Email</label>
                    <input className='Logininputemail' type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {/* {errors.email? <p>{errors.email.message}</p>:""} */}
                </div>
                <div>
                    <label className='Loginlabelpassword'>Password</label>
                    <input className='Logininputpassword' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/*{errors.password? <p>{errors.password.message}</p>:""} */}
                </div>
                <button className='LoginButton' type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login