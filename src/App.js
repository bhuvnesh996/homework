import { useEffect, useState } from "react";
import Filter from "./Filter";
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
      let picArray = j.photos.photo      //fetching data from api method flicke.photos.getrecent
      setData(picArray)
      console.log(data)
    })
  

  
  },[])
  return (
    
    <div className="App">
        <div className="header">
          <h1>Photo Gallery</h1>
          <input type="text" onChange={e=> setTags(e.target.value)} value={tags} />
        </div>
        <div> {tags?
         <Filter  tags={tags} setIsOpen={setIsOpen} isOpen={isOpen} />                                             //conditional setting between filter data and default data
                                                                                                                            //in we have some input in inputbox we render filter component else we render default component
        :data.map((pic)=>{
          return <Grid key={pic.id} id={pic.id} farm ={pic.farm} server = {pic.server} secret={pic.secret} setIsOpen={setIsOpen} isOpen={isOpen}/>
        })}</div>
    </div>
  );
}

export default App
