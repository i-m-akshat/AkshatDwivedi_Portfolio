import './testimonials.scss';
export default function Testimonials(){
    const data=[
        {
            id:1,
            name:"AxA",
            post:"Developer At ResoluteAi",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            img:"Assets/Best-Comedy-Anime-Of-All-Time-4-min.jpg"
        },
        {
            id:2,
            name:"AxA",
            post:"Developer At ResoluteAi",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            img:"Assets/Best-Comedy-Anime-Of-All-Time-4-min.jpg",
            featured:true
        },
        {
            id:3,
            name:"AxA",
            post:"Developer At ResoluteAi",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            img:"Assets/Best-Comedy-Anime-Of-All-Time-4-min.jpg"
        },
        // {
        //     id:4,
        //     name:"AxA",
        //     post:"Developer At ResoluteAi",
        //     desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        //     img:"Assets/Best-Comedy-Anime-Of-All-Time-4-min.jpg"
        // },
        // {
        //     id:5,
        //     name:"AxA",
        //     post:"Developer At ResoluteAi",
        //     desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        //     img:"Assets/Best-Comedy-Anime-Of-All-Time-4-min.jpg"
        //  }
    ]
    return(
        <div className='testimonials' id='testimonials'>
          <h1>Testimonials</h1> 
          <div className='container'>
           
            {data.map((p)=>(
                <div className={p.featured?"card featured":"card"}>
                <div className='top'>
                    <img src='Assets/arrow-right_8812093.png' className='left' alt=''></img>
                    <img src={p.img} alt='' className='user'></img>
                    <img src='Assets/youtube-logo-png-31792.png' alt='' className='right'></img>
                </div>
                <div className='center'>
                    <p>{p.desc}</p>
                </div>

                <div className='bottom'>
                    <h3>{p.name}</h3>
                    <h4>{p.post}</h4>
                </div>
            </div>
            ))}
            
          </div>
        </div>
    )
}