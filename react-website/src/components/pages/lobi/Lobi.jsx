import React from "react";
import lobi from '../lobi/lobi.css';
import Slideshow from "../../elements/slider/Slideshow";
// import image from '~/assets/images/images'

function Lobi() {
  const slideImages = [
    // {
    //   url: image,
    //   caption: 'Slide 1'
    // },
    {
      url: 'https://zarfati-zvi.com/wp-content/uploads/2018/12/gallery_62.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://zarfati-zvi.com/wp-content/uploads/2018/12/ZARFATI_PARADISO.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://zarfati-zvi.com/wp-content/uploads/2018/12/gallery_10-cmyk.jpg',
      caption: 'Slide 3'
    }
  ];

  return (
    <>
      <div>
        <Slideshow slideImages={slideImages}/>
      </div>
      <div className="body">
        <div className="about">
          <p>
            האתר תומך בכלל סוגי הדפדפנים
          </p>
        </div>
        <ul>
          <li><img src="https://d33wubrfki0l68.cloudfront.net/aa7efc39f40fa36a2a8bcd17944a00c640dab9b6/d840e/img/logos/chrome.png" alt="Chrome logo"/></li>
          <li><img src="https://d33wubrfki0l68.cloudfront.net/6344775540237d8e39df3e0a0b44e69a5f1d6942/05ea9/img/logos/firefox.png" alt="Firefox logo"/></li>
          <li><img src="https://d33wubrfki0l68.cloudfront.net/dae22dc10f3acb31b716d89e3ec0fdd7d6cabbcb/abd46/img/logos/safari.png" alt="Safari logo"/></li>
          <li><img src="https://d33wubrfki0l68.cloudfront.net/dfc4f641b2148621e17397d48a70f936fdbb76a2/79cb1/img/logos/edge.png" alt="Edge logo"/></li>
        </ul>
      </div>
      <footer>
        <div className="container-footer">
          <strong>Copyright &copy;2022!</strong>
        </div>
      </footer>
    </>
  );
}

export default Lobi;
