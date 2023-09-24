import { useState } from 'react';
import './work.scss';
export default function Work(){
    const [currentSlider,setCurrentSlide]=useState(0)
    
    const data=[
        {
            id:1,
            title:"Online Library Management",
            img:"Assets/OnlineLibraryManagement.png",
            address:"http://ayodhyadarshnam.in/",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id:2,
            title:"Ayodhya Darshnam",
            img:"Assets/AyodhyaDarshnamFullpage.jpeg",
            address:"http://ayodhyadarshnam.in/",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
            id:3,
            title:"Project MCQ",
            img:"Assets/ProjectMCQFullPage.jpeg",
            address:"http://ayodhyadarshnam.in/",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        // {
        //     id:4,
        //     title:"Dummy 4",
        //     img:"Assets/OnlineLibraryManagement.png",
        //     address:"http://ayodhyadarshnam.in/",
        //     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        // },
        // {
        //     id:5,
        //     title:"Dummy 5",
        //     img:"Assets/OnlineLibraryManagement.png",
        //     address:"http://ayodhyadarshnam.in/",
        //     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        // },
        
    ];
    const handleClick=(way)=>{
        way==="left" ? setCurrentSlide(currentSlider>0?currentSlider-1:data.length-1):
        setCurrentSlide(currentSlider<data.length-1?currentSlider+1:0);
    }
    return(
       <div className='work' id='work'>
        
            <div className='slider' style={{transform:`translateX(-${currentSlider*100}vw)`}}>
            {data.map(d=>(
            <div className='container'>
                        <div className='item'>
                            <div className='left'>
                               <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={d.img} alt=''></img>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                    {d.description}
                                    </p>
                                    <a href={d.address}>See More</a>
                                </div> 
                            </div>
                            <div className='right'>
                                <img src={d.img} alt=''></img>
                            </div>
                        </div>
                    </div>
                   )) }
                </div>  
                <img src='Assets/arrow-right_8812093.png' className='arrow left' onClick={()=>handleClick("left")} alt=''></img>
                <img src='Assets/arrow-right_8812093.png' className='arrow right' onClick={()=>handleClick("right")} alt=''></img>
        </div>
    )
}