import React from 'react'

function Popup({srcPath,handleClose}) {
    return (
        <div className="popup-box" >
             <div className="box">
                <button class='close-icon' onClick={handleClose}>x</button>
                <img src={srcPath}  alt=''/>
            </div>    
            
        </div>
    )
}

export default Popup
