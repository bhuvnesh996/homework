import React from 'react'
import Popup from './Popup';

function Grid({id,farm,server,secret,setIsOpen,isOpen}) {

    const srcPath ='https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'.jpg'
    const togglePopup =()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div>
           <img  src={srcPath} alt='' onClick={togglePopup}/>
           {isOpen&&<Popup srcPath={srcPath} handleClose={togglePopup} />}
        </div>
    )
}

export default Grid
