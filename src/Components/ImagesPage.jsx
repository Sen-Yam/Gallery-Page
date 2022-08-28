import React from 'react'

const ImagesPage = ({image}) => {
  const Tags = image.tags.split(',')  ;
  return (
    <div className='pageimg'>

<div className='element'>
      <img className='image' src={image.webformatURL}/>
      <div className='info'>
        <h3>{image.user}</h3>
        
            <div><h4>Views :</h4>
           <p>{image.views}</p>
           </div>
            <div><h4>Downloads:</h4>
           <p>{image.downloads}</p>
           </div>
            <div><h4>Likes :</h4>
           <p>{image.likes}</p>
           </div>
       
      </div>
      <div className='tags'>
        {Tags.map((tag,index)=>(  
            <span>
            #{tag}
          </span>
        ))}
   
      </div>
      </div>
    </div>
  )
}

export default ImagesPage ;