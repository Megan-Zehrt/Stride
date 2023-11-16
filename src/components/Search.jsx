import React from 'react'
import '../styling/Search.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Search = (props) => {

    const [post, setPost] = useState([])
    const [posts, setPosts] = useState([])
    const [categoryType, setCategoryType] = useState("")
    const username = localStorage.getItem("username")
    const image = localStorage.getItem("image")
    const _id = localStorage.getItem("_id")

    const navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/category/" + categoryType)
            .then(res => {
                console.log("✅✅✅✅", res.data)
                // console.log(res.data.posts.posts.posts)
                console.log(res.data.posts)
                setPost(res.data.posts)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }, [categoryType])

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

    const submitSearch = (e) => {
        e.preventDefault()

        console.log(categoryType)

        setCategoryType("")

    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
            .then(res => {
                console.log("✅✅✅✅", res.data)
                setPost(res.data.posts)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }, [])

    const Home = () => {
        axios.get("http://localhost:8000/api/posts")
            .then(res => {
                console.log("✅✅✅✅", res.data)
                setPost(res.data.posts)
            })
            .catch(err => console.log("❌❌❌❌", err))

    }

    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }



    return (
        <div className='HomeOnePost'>
            <div className='NavBar'>
                <div>
                    <form onSubmit={submitSearch}>
                        <label htmlFor="header-search">
                        </label>
                        <div className='Align'>
                            <input className='SearchBar' value={categoryType} placeholder="Search Post By Category" onChange={(e) => setCategoryType(e.target.value)} />
                            <div className='SearchBtn' type="submit">
                                <img className='searchimg' src="https://www.pinclipart.com/picdir/middle/485-4851736_free-png-search-icon-search-icon-free-download.png" alt="Search Icon" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='BodyOnePost'>

                <div className='ScrollBar'>
                    <div className="BodyHomeOnePost">

                        {post === undefined ?
                            <div>
                                <div className="BodyHome">
                                    {
                                        posts.map((onePost) => {
                                            return (
                                                <div>
                                                    <Link to={`/stride/post/${onePost._id}`}>
                                                        <img src={onePost.newImage} />
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> :
                            post.map((onePost) => {
                                return (
                                    <Link to={`/stride/post/${onePost._id}`}>
                                        <div className='PostBoxOnePost' key={onePost._id}>
                                            <p>{onePost.user_id === _id ? <div className='PostOption'>
                                            </div> : null}</p>
                                            <img className='ImageSearchHome' src={onePost.newImage} alt="submitted" />
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

export default Search

