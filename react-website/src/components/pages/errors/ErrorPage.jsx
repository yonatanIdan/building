import React from 'react';
import error404 from '../../images/error404.png';
import error500 from '../../images/error500.jpg';

function ErrorPage(props) {
    console.log(props)
    const style = {
        width: '100%',
        height: '90vh',
        maxWidth: '900px',
        display: 'flex',
        justifyContent: 'center'
    }
    const errorimage = props.type === 500 ? error500 : error404;
  return (
    <>
        <div style={{'textAlign': '-webkit-center'}}>
            <div style={{'marginTop':'15px'}}>
                <h2>
                    Error {props.type? props.type : 500}
                </h2>
                <h3>
                    {props.message ? props.message : 'שגיאה! נא לפנות למנהל האפליקציה.'}
                </h3>
            </div>
            <img src={errorimage} style={style} alt={`error: ${props.type}`} />
        </div>
    </>
  )
}

export default ErrorPage