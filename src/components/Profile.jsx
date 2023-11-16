import React from 'react'
import '../styling/Profile.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = (props) => {

    const username = localStorage.getItem("username")
    const image = localStorage.getItem("image")
    const caption = localStorage.getItem("caption")
    const email = localStorage.getItem("email")
    const [post, setPost] = useState([])
    const _id = localStorage.getItem("_id")


    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
            .then(res => {
                console.log("✅✅✅✅", res.data)
                setPost(res.data.posts)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }, [])


    return (
        <div className='Home'>
            <div className='NavBar'>
                <p className='NavBarHeader'>Your Profile</p>
            </div>
            <div className='Body'>

                <div className='ScrollBar'>
                    <div>
                        <div className='ProfileBox'>
                            <div className='ProfileDisplay'>
                                <img className='ProfilePageImg' src={image} alt="Profile" />
                            </div>
                            <div>
                                <div className='UserNameEmail'>
                                    <p className='username'>{username}</p>
                                </div>
                                <p className='caption'>{caption}</p>
                            </div>
                        </div>
                        <div className='PostIconHeader'>
                            <img className='PostIcon' src="https://th.bing.com/th/id/OIP.n5lYX1jvVW9hbHoOi3VsbQAAAA?pid=ImgDet&w=107&h=105&rs=1" alt="Post Icon" />
                            <p className='PostHeader'>POSTS</p>
                        </div>
                        <div className='PostBorder'>
                            {
                                post.map((onePost) => {
                                    return (
                                        <div className='OnePost'>
                                            <p>{onePost.user_id === _id ? <div>
                                                <Link to={`/stride/post/${onePost._id}`}>
                                                    < img className='ProfilePosts' src={onePost.newImage} alt="one post" />
                                                </Link>
                                            </div> : ""}</p>
                                        </div>


                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile