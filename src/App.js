import { useEffect, useState } from "react";
import Grid from "./Grid";



function App() {
  const [data,setData] = useState([])
  const [tags,setTags] = useState([])
  const [isOpen,setIsOpen] = useState(false)
  useEffect(()=>{

    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=48805ca63fb60952462f3dbdb732400d&format=json&nojsoncallback=1r')
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
      console.log(data)
    })
  

  
  },[])
  return (
    
    <div className="App">
        <div>
          <input type="text" onChange={e=> setTags(e.target.value)} value={tags} />
        </div>
        <div> {data&&data.map((pic)=>{
          return <Grid key={pic.id} id={pic.id} farm ={pic.farm} server = {pic.server} secret={pic.secret} setIsOpen={setIsOpen} isOpen={isOpen}/>
        })}</div>
    </div>
  );
}

export default App
