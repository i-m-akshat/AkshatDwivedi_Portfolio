import {useEffect,useState } from 'react';
import PortfolioList from '../fPortfolioList/portFolioList';
import './portfolio.scss';
import { MobileApp,WebApplications,Design,featurePortfolio } from '../../data';
export default function Portfolio(){
    const [selected,setSelected]=useState("featured");
    const [data,setData]=useState([]);
    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featurePortfolio);
             break;
            case "design":
                setData(Design);
            break;
            case "mobileApp":
                setData(MobileApp);
            break;
            case "webApp":
                setData(WebApplications);
            break;  
            default:
                setData(featurePortfolio);
        }
    },[selected]);
    const list  =[
        {
            id:"featured",
            title:"Featured",
        },
        {
            id:"design",
            title:"Design",
        },
        {
            id:"mobileApp",
            title:"Mobile App",
        },
        {
            id:"webApp",
            title:"WebApp",
         }
        // {
        //     id:"featured",
        //     title:"Featured",
        // }
    ];
    
    return (
        <div className='portfolio' id='Portfolio'>
            <h1>Portfolio</h1>   
            <ul>
                {list.map((item)=>(
                   <PortfolioList title={item.title} 
                   id={item.id} 
                   active={selected===item.id} 
                   setSelected={setSelected}/>
                ))}
                
            </ul>
            <div className='container'>
                {
                data.map((d)=>
                (
                    <div className='item'>
                    <img 
                    src={d.img} alt=''/>
                    <h3>{d.title}</h3>
                </div>
                ))}
                
                {/* <div className='item'>
                    <img src='Assets/undraw_progressive_app_m9ms.png' alt=''/>
                    <h3>Banking App</h3>
                </div>
                <div className='item'>
                    <img src='Assets/undraw_progressive_app_m9ms.png' alt=''/>
                    <h3>Banking App</h3>
                </div>
                <div className='item'>
                    <img src='Assets/undraw_progressive_app_m9ms.png' alt=''/>
                    <h3>Banking App</h3>
                </div>
                <div className='item'>
                    <img src='Assets/undraw_progressive_app_m9ms.png' alt=''/>
                    <h3>Banking App</h3>
                </div>
                <div className='item'>
                    <img src='Assets/undraw_progressive_app_m9ms.png' alt=''/>
                    <h3>Banking App</h3>
                </div> */}
            </div>
        </div>
    )
}