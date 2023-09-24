import { useState } from 'react';
import './contact.scss';
export default function Contact(){
    const [Message,setMessage]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault()  ;
        setMessage(true);
    }
    return(
        <div className='contact' id='contact'>
            <div className='left'>
                <img src='Assets/undraw_contact_us_re_4qqt.svg' alt=''></img>

            </div>
            <div className='right'>
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='EMail'></input>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {Message &&<span>Thanks, I'll Reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}