import React from 'react'
import '../styling/Profile.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OneUser = () => {



    const navigate = useNavigate()

    const { id } = useParams()
    const [thisUser, setThisUser] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8000/api/one/user/" + id)
            .then(res => {
                console.log(res.data)
                setThisUser(res.data.user)
            })
            .catch(err => console.log("❌❌❌", err))
    }, [id]);

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
                        <div>
                            {
                                thisUser ? (
                                    <div>
                                        <div className='ProfileBox'>
                                            <div className='ProfileDisplay'>
                                                <img className='ProfilePageImg' src={thisUser.image} alt="one profile" />
                                            </div>
                                            <div>
                                                <div>
                                                    <p className='username'>{thisUser.username}</p>
                                                </div>
                                                <p className='caption'>{thisUser.caption}</p>
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
                                                            <p>{onePost.user_id === thisUser._id ? <div>
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
                                ) : <h1>Loading...</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OneUser