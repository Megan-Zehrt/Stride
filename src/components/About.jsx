import React from 'react'
import '../styling/About.css'

const About = () => {

    const username = localStorage.getItem("username")
    const image = localStorage.getItem("image")

    return (
        <div className='HomeAbout'>
            <div className='NavBar'>
                <p className='NavBarHeader'>About</p>
                <img className='HomePFP' src={image} alt="Profile" />
                <p className='HelloUserName'>{username}</p>
            </div>
            <div className='Body'>

                <div className='ScrollBar'>
                    <div className="AboutBody">
                        <div className='WelcomeSection'>
                            <p>Welcome to Stride - Your Personalized Hub for Shared Interests! At Stride, we believe that the best online experiences are the ones tailored to your unique interests. Whether you're passionate about technology, fashion, travel, or any other niche, our platform is designed to connect you with like-minded individuals who share your enthusiasms.</p>
                        </div>
                        <div className='TextAndImage'>
                            <div className='TextAbout'>
                                <h1 className='AboutHeader'>Our Mission</h1>
                                <p className='TextWriting'>Our mission is to create a vibrant community where users can explore, engage, and share their passions with others. We understand that the online world is vast, and finding content that resonates with your interests can be challenging. That's why we've built Stride - a space where your interests take center stage.</p>
                            </div>
                            <div>
                                <img className='AboutImage' src="https://i.pinimg.com/236x/b0/c3/cc/b0c3cccfe4c08fff4d1c8603e77005cf.jpg" alt="about" />
                            </div>
                        </div>
                        <div className='TextAndImage'>
                            <div>
                                <img className='AboutImage' src="https://i.pinimg.com/236x/11/11/3f/11113fd79a28f4a79f08918c337075a4.jpg" alt="" />
                            </div>
                            <div className='TextAboutRight'>
                                <h1 className='AboutHeader'>Start Your Journey Today</h1>
                                <p className='TextWriting'>Join Stride today and embark on a journey of discovery, connection, and shared interests. Your personalized online experience awaits – where every post, every comment, and every connection is a step towards building a community that celebrates what you love.</p>
                                <p className='TextWriting'>Discover. Share. Connect. Welcome to Stride – Your Space for Shared Interests!</p>
                            </div>
                        </div>
                        <h1 className='AboutHeader'>What Sets Us Apart</h1>
                        <h3 className='SubHeader'>Personalized Feeds</h3>
                        <p className='AboutParagraph'>Enjoy a curated feed that aligns with your interests. Our intelligent algorithms analyze your activity to provide you with content that matters to you the most. Say goodbye to endless scrolling through irrelevant posts – Stride ensures your feed is always filled with content that sparks your curiosity.</p>

                        <h3 className='SubHeader'>Diverse Communities</h3>
                        <p className='AboutParagraph'>Connect with people who share your passions. Join or create communities centered around specific topics, hobbies, or interests. Whether you're a seasoned enthusiast or a curious beginner, there's a space for you in our diverse and welcoming community.</p>

                        <h3 className='SubHeader'>User-Friendly Interface</h3>
                        <p className='AboutParagraph'>Navigating Stride is a breeze. Our user-friendly interface makes it easy to discover, share, and engage with content that resonates with you. From intuitive search features to seamless post sharing, we've designed every aspect of our platform with your convenience in mind.</p>

                        <h1 className='AboutHeader'>How It Works</h1>
                        <ol className='AboutListing'>
                            <li className='AboutList'>Create Your Profile: Sign up and build a profile that reflects your interests. Share a bit about yourself, and let others get to know the real you.</li>
                            <li className='AboutList'>Explore Communities: Join existing communities or create your own! Our platform is home to a wide range of interests – find the one that speaks to you.</li>
                            <li className='AboutList'>Share Your Passion: Post updates, articles, photos, or anything else related to your interests. Your content will reach the people who appreciate it the most.</li>
                            <li className='AboutList'>Connect and Engage: Like, comment, and connect with others who share your passions. Build meaningful connections with individuals who understand what makes your interests special.</li>
                        </ol>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default About