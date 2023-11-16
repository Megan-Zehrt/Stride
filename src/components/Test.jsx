import React from 'react'
import { useState } from "react";

const Test = () => {

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };

    const handleClose = () => {
        setShowAlert(false);
    };


    return (
        <div>
            <div>
                <button onClick={handleClick}>Upload</button>
                {showAlert && (
                    <div className="alert">
                        <span className="closebtn" onClick={handleClose}>
                            &times;
                        </span>
                        <div>
                            <p>test line one</p>
                            <p>test line two</p>
                            <p>test line three</p>
                            <p>test line four</p>
                            <p>test line five</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Test