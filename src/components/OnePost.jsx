import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import '../styling/OnePost.css'

const OnePost = () => {

  const navigate = useNavigate()

  const { id } = useParams()
  const [thisPost, setThisPost] = useState(null)
  const _id = localStorage.getItem("_id")

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts/" + id)
      .then(res => {
        console.log(res.data)
        setThisPost(res.data.post)
      })
      .catch(err => console.log("❌❌❌", err))
  }, [id]);

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
        navigate("/stride/your/profile")
        const filteredPost = thisPost.filter((eachPost) => {
          return deletedId !== eachPost._id;
        });
        setThisPost(filteredPost)

      })
      .catch(err => console.log(err))

  }


  return (
    <div className='HomeOnePost'>
      <div className='NavBarOnePost'>
        <p className='NavBarHeaderOnePost'></p>
      </div>
      <div className='BodyOnePost'>
        <div>
          {
            thisPost ? (
              <div className='OnePostImageBox'>
                <img className='OnePostImage' src={thisPost.newImage} alt="one post" />
                <div>
                  {user.map((oneUser) => {
                    return(
                      <div>{oneUser._id === thisPost.user_id ? 
                          <div className='UsernamePFP'>
                            <img className='userimageAbout' src={oneUser.image} alt="profile" />
                            <p className='UsernameAbout'>{oneUser.username}'s post</p>
                          <p>{thisPost.user_id === _id ? <div>
                            <div>
                              <button className='DeleteBtnOnePost' onClick={() => deleteMe(thisPost._id)}>Delete</button>
                            </div>
                          </div> : ""}</p>
                          </div>
                        : ""}</div>
                    )
                  })}
                  <p className='OnePostCaption'>{thisPost.caption}</p>
                  <p className='OnePostCategory'>Post Category: {thisPost.category}</p>
                </div>
              </div>
            ) : <h3>Loading...</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default OnePost