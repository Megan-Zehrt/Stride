import React from 'react'
import '../styling/Edit.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'

const EditPost = (props) => {

  const [caption, setCaption] = useState("")
  const [category, setCategory] = useState("Other")
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const { id } = useParams()

  const submitPost = (e) => {
    e.preventDefault();

    const tempObjectToSendToDB = {
      caption,
      category
    };

    // SUBMITING THE PRODUCTS
    axios.patch("http://localhost:8000/api/posts" + id, tempObjectToSendToDB)
      .then(res => {
        console.log("✅✅✅✅", res.data)
        navigate("/stride/home")
      })
      .catch(err => console.log("❌❌❌❌", err))
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts/" + id)
      .then(res => {
        console.log("✅✅✅✅", res.data)

        setCaption(res.data.post.caption)
        setCategory(res.data.post.category)
      })
      .catch(err => console.log(err))

  }, [id])

  return (
    <div>
      <div className='NavBarEdit'>
        <p className='NavBarHeader'>Edit Your Post</p>
      </div>
      <div className='Body'>
        <div className='BodyForm'>
          <h1 className='FormHeader'>Create a New Post</h1>
          <form className='Form' onSubmit={submitPost}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            Caption <input value={caption} onChange={(e) => setCaption(e.target.value)} /> <br />

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
              </select>
            </div>

            <button className='ShareBtn' type="submit">Edit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPost