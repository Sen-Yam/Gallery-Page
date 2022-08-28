import './Style.css'
import ImagesPage from './Components/ImagesPage';
import {useState , useEffect} from 'react'
import ImageSearch from './Components/ImageSearch';
function App() {
 
  var Link = '29558720-32f9c8fe8de24fbd834dad08b'
  
  const [Images , setImages] = useState([]);
  const [IsLoading , setIsLoading] = useState(true);
  const [Term , setTerm] = useState('');
  
  useEffect( ()=> {
    try {
      
       fetch(`https://pixabay.com/api/?key=${Link}&q=${Term}&image_type=photo&pretty=true`)
      .then(res=> res.json())
      .then(Data=>{
        setImages(Data.hits)
       
       setIsLoading(false)
       
      })

    }catch(err)  {
      console.log(`Error is : ${err}`)
    }
  } ,[Term])
  return (
    <div className="App">
      <ImageSearch NewSearch={(Text)=> setTerm(Text)} />
      
      {
        Images.length>0 ?      IsLoading ? <div style={{textAlign :'center'}}><h2 style ={{
          color : 'green' , fontStyle : 'bold'
        }}>Loading...</h2> </div>: <div className='Container'>
        {Images.map(Image=> (  
        <ImagesPage image={Image} key = {Image.id}/>
         
        ))}
        </div> : <div style={{textAlign :'center'}}><h2 style ={{
          color : 'green' , fontStyle : 'bold'
        }}>no images found !!</h2> </div>
      }
    </div>
  );
}

export default App;
