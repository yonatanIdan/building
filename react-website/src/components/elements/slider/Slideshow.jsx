import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Slideshow(props) {
  const style = (i) => {
    return {
    'content' : `url('${props.slideImages[i].url}')`,
    'height': '500px',
    'width': '-webkit-fill-available'
    }
  }

  return (
    <div className="slide-container">
      <Slide>
        {props.slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div style={style(index)}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

export default Slideshow; 