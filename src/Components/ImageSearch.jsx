import React , {useState} from 'react'
import SearchImage from '../assets/Search.svg'
const ImageSearch = ({NewSearch}) => {
    const [Text , setText] = useState('');
    const Submit = (e)=> {
        e.preventDefault();
        NewSearch(Text)
    }
  
    
  return ( ///
    <div className='Search'>
        <input type="text" placeholder='Enter a term of image...' className='input'
       onChange={(e)=> {
        e.preventDefault();
        setText(e.target.value)
       }}
        />
      
       <img src={SearchImage}  className='img' onClick={Submit} />
      

    </div>
  )
    }

export default ImageSearch