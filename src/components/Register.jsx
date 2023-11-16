import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styling/LogReg.css'

const Register = (props) => {

  const [username, setUsername] = useState("")
  const [image, setImage] = useState("")
  const [email, setEmail] = useState()
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [caption, setCaption] = useState("")
  const navigate = useNavigate()
  const [errors, setErrors] = useState({

  })

  const register = (e) => {
    e.preventDefault();

    const tempObjectToSendToDB = {
      username,
      image,
      email,
      caption,
      password,
      confirm
    };


    // SUBMITING THE PRODUCTS
    axios.post("http://localhost:8000/api/register", tempObjectToSendToDB, { withCredentials: true })
      .then(res => {
        console.log("✅✅✅✅", res.data)
        if (res.data.errors) {
          setErrors(res.data.errors)
          navigate("/stride/signin/register")
        } else {
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
          navigate("/stride/home")
        }
      })
      .catch(err => console.log("❌❌❌", err))
  }

  return (
    <div className='RegistrationBox'>
      <h1 className='RegisterHeader'>Create An Account</h1>
      <form onSubmit={register}>
        <div>
          <label className='labelusername'>Username</label>
          <input className='inputusername' type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username ? <p>{errors.username.message}</p> : ""}
        </div>
        <div>
          <label className='labelusername'>Image</label>
          <input className='inputusername' type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
          {errors.image ? <p>{errors.image.message}</p> : ""}
        </div>
        <div>
          <label className='labelemail'>Email</label>
          <input className='inputemail' type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email ? <p>{errors.email.message}</p> : ""}
        </div>
        <div>
          <label className='labelusername'>Caption</label>
          <input className='inputusername' type="text" name="caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
          {errors.caption ? <p>{errors.caption.message}</p> : ""}
        </div>
        <div>
          <label className='labelpassword'>Password</label>
          <input className='inputpassword' type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password ? <p>{errors.password.message}</p> : ""}
        </div>
        <div>
          <label className='labelconfirm'>Confirm Password</label>
          <input className='inputconfirm' type="text" name="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          {errors.confirm ? <p>{errors.confirm.message}</p> : ""}
        </div>
        <button className='RegisterButton' type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register