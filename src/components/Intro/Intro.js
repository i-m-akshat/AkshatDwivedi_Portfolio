import { useEffect,useRef } from 'react';
import './Intro.scss';
import { init } from 'ityped';
export default function Intro(){
    const textRef=useRef();
    useEffect(()=>{
      
         init(textRef.current,
          { 
            showCursor:true,
            backDelay:  1500,
            backSpeed:60,
             strings: ['Dot Net Developer', 'Full Stack Web Developer','Sql Developer' ],
         });
    },[]);
    return(
        
        <div className='Intro' id='Intro'>
          <div className='left'>
            <div className='imgContainer'>
                <img src='Assets/logo.png' alt='Akshat'/>
            </div>
          </div>
          <div className='right'>
            <div className='wrapper'>
                <h2>Hi There, I'm</h2>
                <h1>Akshat Dwivedi</h1>
                <h3>A <span ref={textRef}></span></h3>
            </div>
            <a href='#Portfolio'>
                <img src='Assets/line-angle-down-icon.png'alt='downwards'></img>
            </a>
          </div>
        </div>
    )
}
