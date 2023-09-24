import './portFolioList.scss';
export default function PortfolioList({title,id,active,setSelected}){
return(
    <li className={active?'portFolioList active':'portFolioList'} 
    onClick={()=>{
        setSelected(id)
    }
       }> {title}</li>
    
);
}