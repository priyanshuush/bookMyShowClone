
import React from 'react'
import './Trailer.css';


function Trailer() {

return (
    <div className='trailer-div'>
      <div className="video-div">
        <h1>Movie Trailer</h1>
        {<iframe className='video-frame'
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PLl99DlL6b4"
          title="YouTube Video"
          frameBorder="0"
           allowFullScreen
         ></iframe>}
      </div>
      <div className="details-section">
        
      </div>
    </div>
  );
}

export default Trailer;
