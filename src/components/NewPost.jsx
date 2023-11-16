import React from 'react'
import '../styling/NewPost.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const NewPost = (props) => {

    const _id = localStorage.getItem("_id")
    const [newImage, setNewImage] = useState("")
    const [caption, setCaption] = useState("")
    const [category, setCategory] = useState("Other")
    const user_id = _id
    const [theUsername, setTheUsername] = useState('')
    const [errors, setErrors] = useState([])

    const username = localStorage.getItem("username")
    const image = localStorage.getItem("image")

    const navigate = useNavigate()

    const submitPost = (e) => {
        e.preventDefault();

        const tempObjectToSendToDB = {
            newImage,
            caption,
            category,
            user_id
        };
        console.log(tempObjectToSendToDB)

        // SUBMITING THE PRODUCTS
        axios.post("http://localhost:8000/api/posts", tempObjectToSendToDB)
            .then(res => {
                console.log("✅✅✅✅", res.data)
                navigate("/stride/home")
            })
            .catch(err => {
                console.log("❌❌❌❌", err)
                const errorResponse = err.response.data.errors;
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            }
            )
    }
    return (
        <div className='NewPost'>
            <div className='NavBar'>
                <p className='NavBarHeader'>New Post</p>
                <img className='HomePFPCreate' src={image} alt="Profile" />
                <p className='HelloUserName'>{username}</p>
            </div>
            <div className='BodyNewPost'>
                <div className='BodyFormNewPost'>
                    <h1 className='FormHeader'>Create a New Post</h1>
                    <form className='Form' onSubmit={submitPost}>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <p>Image</p>
                        <input className='FormInputTop' value={newImage} onChange={(e) => setNewImage(e.target.value)} /> <br />
                        <p>Caption</p>
                        <input className='FormInputCaption' value={caption} onChange={(e) => setCaption(e.target.value)} /> <br />

                        <p className='Category'>Post Category:</p>
                        <div>
                            <select className='selector' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Other">Other</option>
                                <option value="Gym Workouts">Gym Workouts</option>
                                <option value="Equestrian">Equestrian</option>
                                <option value="Dogs">Dogs</option>
                                <option value="Cats">Cats</option>
                                <option value="Blog">Blog</option>
                                <option value="Car">Car</option>
                                <option value="Bikes">Bikes</option>
                                <option value="Styles and Trends">Styles and Trends</option>
                                <option value="Hairstyles">Hairstyles</option>
                                <option value="Farm Animals">Farm Animals</option>
                                <option value="Aquatics">Aquatics</option>
                                <option value="Motorcycles">Motorcycles</option>
                                <option value="Food">Food</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Arts">Arts</option>
                                <option value="Travel">Travel</option>
                                <option value="Vacation">Vacation</option>
                                <option value="Indoor Sports">Indoor Sports</option>
                                <option value="Outdoor Sports">Outdoor Sports</option>
                                <option value="Water Sports">Water Sports</option>
                                <option value="Science and Tech">Science and Tech</option>
                                <option value="Performing Arts">Performing Arts</option>
                                <option value="TV and Movies">TV and Movies</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Home">Home</option>
                                <option value="Garden">Garden</option>
                                <option value="Business">Business</option>
                                <option value="Runner">Runner</option>
                            </select>
                        </div>
                        <input value={user_id} type="hidden" />

                        <button className='ShareBtnNewPost' type="submit">Share</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPost