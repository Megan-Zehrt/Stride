import React from 'react'
import '../styling/Home.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = ({ posts }) => {

    const [post, setPost] = useState([])
    const username = localStorage.getItem("username")
    const image = localStorage.getItem("image")
    const _id = localStorage.getItem("_id")

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
            .then(res => {
                console.log("✅✅✅✅", res.data)
                setPost(res.data.posts)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }, [])

    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/users")
            .then(res => {
                console.log("✅✅✅✅", res.data)
                setUser(res.data.users)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }, [])

    const deleteMe = (deletedId) => {
        axios.delete("http://localhost:8000/api/posts/" + deletedId)
            .then(res => {
                console.log("OK DELETED", res.data)
                const filteredPost = post.filter((eachPost) => {
                    return deletedId !== eachPost._id;
                });
                setPost(filteredPost)

            })
            .catch(err => console.log(err))

    }

    const handleLike = async (Id) => {
        try {
            const response = await fetch(`/api/posts/like/${Id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response error');
            }

            // Update the state or rerender the component as needed
        } catch (error) {
            console.error('Error:', error);
        }
    };




    return (
        <div className='Home'>
            <div className='NavBar'>
                <p className='NavBarHeader'>Home</p>
                <img className='HomePFP' src={image} alt="Profile" />
                <p className='HelloUserName'>{username}</p>
            </div>
            <div className='Body'>

                <div className='ScrollBar'>
                    <div className='PostUsers'>
                        <div className="BodyHome">
                            {
                                post.map((onePost) => {
                                    return (
                                        <div className='PostBox' key={onePost._id}>
                                            <p>{onePost.user_id === _id ? <div className='PostOption'>
                                                <img className='userimageHome' src={image} />
                                                <p className='usernamehome'>{username}</p>
                                                <button className='DeleteBtn' onClick={() => deleteMe(onePost._id)}>Delete</button>
                                            </div> : user.map((oneUser) => {
                                                const combo = onePost.user_id === oneUser._id
                                                return (
                                                    <div>
                                                        {combo ? <div>
                                                            <div className='PostOption'>
                                                                <img className='userimageHome' src={oneUser.image} />
                                                                <p className='UserNameHomePost'>{oneUser.username}</p>
                                                            </div>
                                                        </div> : ""}
                                                    </div>
                                                )
                                            })}</p>
                                            <img className='Image' src={onePost.newImage} alt="submitted" />
                                            <div className='CaptionBox'>
                                                <p>{onePost.caption}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='SearchUserSectionBox'>
                            <div className='ScrollBarUser'>
                                <div className="UserBodyHome">
                                    {
                                        user.map((oneUser) => {
                                            return (
                                                <Link to={`/stride/user/${oneUser._id}`}>
                                                    <div className='UserBoxHome' key={oneUser._id}>
                                                        <div className='UserSearchBoxHome'>
                                                            <img className='userimageHome' src={oneUser.image} />
                                                            <p className='UserNameHome'>{oneUser.username}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home

