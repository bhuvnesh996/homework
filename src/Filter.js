import React, { useEffect, useState } from 'react'
import Grid from './Grid';

function Filter({tags,setIsOpen,isOpen})  {
    const[data,setData] = useState([])
    useEffect(()=>{

        fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=48805ca63fb60952462f3dbdb732400d&tags='+tags+'+&format=json&nojsoncallback=1')
        .then(function(response){
          return response.json();
        }).then(function(j){
          let picArray = j.photos.photo   //.map((pic)=>{
           // var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
         //  var raw =  pic.farm + pic.server + pic.id + pic.secrete
         //   return(
         //    raw
          //  )
         // })
          setData(picArray)
          console.log(picArray)                                                                                 //fetching data from api method:getSearch searching with tags
        })
      
    
      
      },[tags])
    return (
        <div>
            <div>
            {data.map((pic)=>{
            return <Grid key={pic.id} id={pic.id} farm ={pic.farm} server = {pic.server} secret={pic.secret} setIsOpen={setIsOpen} isOpen={isOpen}/>
            })}
            </div>
        </div>
    )
}

export default Filter
