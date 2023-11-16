import './App.css';
import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom'
import Home from './components/Home';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import Search from './components/Search'
import LogAndReg from './components/LogAndReg'
import Profile from './components/Profile'
import About from './components/About'
import OnePost from './components/OnePost'
import Users from './components/Users'
import OneUser from './components/OneUser'
import EditUser from './components/EditUser'
import Test from './components/Test'
import { useState } from 'react';


function App() {
  const [activeButton, setActiveButton] = useState(null);
  const buttonshome = ["Home"];
  const buttonsnewPost = ["Create"];
  const buttonSearch = ["Explore"];
  const buttonSignIn = ["Sign in"];
  const buttonProfile = ["Profile"];
  const buttonUsers = ["Users"];
  const buttonAbout = ["About"];
  const buttonTest = ["Testing"];

  const username = localStorage.getItem("username")

  const _id = localStorage.getItem("_id")

  const navigate = useNavigate()

  const handleClick = (button) => {
    // set the active button to the one that was clicked
    setActiveButton(button);
  };

  // define a style object for the active button
  const activeStyle = {
    fontWeight: "bold",
  };

  const SignOut = () => {
    navigate("/stride/signin/register")
    localStorage.clear();
  }

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleStylingClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };




  return (
    <div className='MainCombo'>
      {username ?
        <>
          <div className='BodyNavBar'>
            <img className='LogoImage' src="https://i.pinimg.com/236x/c1/1d/59/c11d5939e39164968adfc62c754c0822.jpg" alt="Logo" ></img>
            <p className='WebName'>Stride</p>
            <div>
              <img src="https://th.bing.com/th/id/OIP.0MQmhlBn3rC0z9LHgM4vDQHaH7?pid=ImgDet&rs=1" alt="Home Icon" className='HouseIcon' />
              {buttonshome.map((button) => (
                <Link to="/stride/home" >
                  <button
                    key={button}

                    className="DefaultBtn"
                    // use a ternary operator to apply the active style if the button matches the active button
                    style={button === activeButton ? activeStyle : null}
                    // pass the button value to the handleClick function on click
                    onClick={() => handleClick(button)}
                  >
                    {button}
                  </button>
                </Link>
              ))}
            </div>
            <div>
              {buttonsnewPost.map((button) => (
                <Link to={`/stride/new/post/${_id}`} >
                  <img src="https://th.bing.com/th/id/OIP.gt7G-pYy45PBwC0u4Qfo8gHaHa?pid=ImgDet&rs=1" alt="Create Icon" className='HouseIcon' />
                  <button
                    key={button}

                    className="DefaultBtn"
                    // use a ternary operator to apply the active style if the button matches the active button
                    style={button === activeButton ? activeStyle : null}
                    // pass the button value to the handleClick function on click
                    onClick={() => handleClick(button)}
                  >
                    {button}
                  </button>
                </Link>
              ))}
            </div>
            <div>
              {buttonSearch.map((button) => (
                <Link to="/stride/posts/category" >
                  <img src="https://www.pinclipart.com/picdir/middle/485-4851736_free-png-search-icon-search-icon-free-download.png" alt="Create Icon" className='HouseIcon' />
                  <button
                    key={button}

                    className="DefaultBtn"
                    // use a ternary operator to apply the active style if the button matches the active button
                    style={button === activeButton ? activeStyle : null}
                    // pass the button value to the handleClick function on click
                    onClick={() => handleClick(button)}
                  >
                    {button}
                  </button>
                </Link>
              ))}
            </div>
            <div>
              {buttonProfile.map((button) => (
                <Link to="/stride/your/profile" >
                  <img src="https://th.bing.com/th/id/OIP.Jp2m2XCoeiyYjBGpFpwqwQAAAA?pid=ImgDet&rs=1" alt="Create Icon" className='HouseIcon' />
                  <button
                    key={button}

                    className="DefaultBtn"
                    // use a ternary operator to apply the active style if the button matches the active button
                    style={button === activeButton ? activeStyle : null}
                    // pass the button value to the handleClick function on click
                    onClick={() => handleClick(button)}
                  >
                    {button}
                  </button>
                </Link>
              ))}
            </div>
            <div>
              {buttonUsers.map((button) => (
                <Link to="/stride/search/users" >
                  <img src="https://th.bing.com/th/id/OIP.EOiBPIeKpH-d2fCinzfGbwHaHa?pid=ImgDet&rs=1" alt="Create Icon" className='HouseIcon' />
                  <button
                    key={button}

                    className="DefaultBtn"
                    // use a ternary operator to apply the active style if the button matches the active button
                    style={button === activeButton ? activeStyle : null}
                    // pass the button value to the handleClick function on click
                    onClick={() => handleClick(button)}
                  >
                    {button}
                  </button>
                </Link>
              ))}
            </div>
            <div>
              <img className='HouseIcon' src="https://www.freeiconspng.com/uploads/sign-out-icon-27.jpg" alt="Sign Out" />
              <button className='DefaultBtnSignOut' onClick={() => SignOut()}>Sign Out</button>
            </div>
            
            <div>
              {buttonAbout.map((button) => (
                <Link to="/stride/about" >
                  <img src="https://static.vecteezy.com/system/resources/previews/000/442/530/original/information-vector-icon.jpg" alt="Create Icon" className='HouseIcon' />
                  <button
                    key={button}

                    className="DefaultBtnAbout"
                    // use a ternary operator to apply the active style if the button matches the active button
                    style={button === activeButton ? activeStyle : null}
                    // pass the button value to the handleClick function on click
                    onClick={() => handleClick(button)}
                  >
                    {button}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className="App">
            <Routes>
              <Route path="/stride/home" element={<Home />} />
              <Route path="stride/new/post/:id" element={<NewPost />} />
              <Route path="stride/edit/:id" element={<EditPost />} />
              <Route path='/stride/posts/category' element={<Search />} />
              <Route path='/stride/signin/register' element={<LogAndReg />} />
              <Route path='/stride/your/profile' element={<Profile />} />
              <Route path='/stride/search/users' element={<Users />} />
              <Route path='/stride/user/:id' element={<OneUser />} />
              <Route path='/stride/about' element={<About />} />
              <Route path='/stride/post/:id' element={<OnePost />} />
              <Route path='/stride/edit/user/:id' element={<EditUser />} />
              <Route path="*" element={< Navigate to={"/stride/home"} />} />
            </Routes>
          </div>
        </>
        : <LogAndReg />}
    </div>
  );
}

export default App;
