import React from 'react'
import '../styling/Users.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {

    const [user, setUser] = useState([])
    const username = localStorage.getItem("username")
    const image = localStorage.getItem("image")
    const _id = localStorage.getItem("_id")

    useEffect(() => {
        axios.get("http://localhost:8000/api/users")
            .then(res => {
                console.log("✅✅✅✅", res.data)
                setUser(res.data.users)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }, [])

    return (
        <div className='Home'>
            <div className='NavBar'>
                <p className='NavBarHeader'>Users</p>
                <img className='HomePFP' src={image} alt="Profile" />
                <p className='HelloUserName'>{username}</p>
            </div>
            <div className='Body'>

                <div className='ScrollBar'>
                    <div className="UserBody">
                        {
                            user.map((oneUser) => {
                                return (
                                    <Link to={`/stride/user/${oneUser._id}`}>
                                        <div className='UserBox' key={oneUser._id}>
                                            <div className='UserSearchBox'>
                                                <img className='UserImage' src={oneUser.image} />
                                                <p className='UserName'>{oneUser.username}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Users