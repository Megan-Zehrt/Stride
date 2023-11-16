import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {

    const [userName, setUserName] = useState("")
    const [caption, setCaption] = useState("")
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const { id } = useParams()

    // SHOW DATA FROM AUTHOR
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + id)
            .then(res => {
                console.log("✅✅✅✅", res.data)

                setUserName(res.data.user.userName)
                setCaption(res.data.user.caption)
            })
            .catch(err => console.log(err))

    }, [id])

    // SUBMITTING THE EDITTED AUTHOR DATA
    const submitUser = (e) => {
        e.preventDefault();

        const tempObjectToSendToDB = {
            userName,
            caption
        };

        axios.patch("http://localhost:8000/api/users/" + id, tempObjectToSendToDB)
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
            <div >
                <p>Edit this Account:</p>
                <form onSubmit={submitUser}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>Username:</p>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <p>Caption:</p>
                    <input value={caption} onChange={(e) => setCaption(e.target.value)} />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    export default EditUser