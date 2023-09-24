import './Topbar.scss';
import Logo from '../../Assets/img/Text_Signature.png';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({menuOpen,setmenuOpen}){
    return(
        <div className={'topbar '+ (menuOpen&&"active")}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#Intro' id='logo' className='logobox'><img src={Logo} className='logo' alt='Akshat Dwivedi'/></a>
                    <div className='itemContainer'>
                        <PersonIcon className='icon'/>
                        <span>+91 95 195 95 778</span>
                        </div>
                        <div className='itemContainer'>
                        <EmailIcon className='icon'/>
                        <span>akshatdwivedi59941@gmail.com</span>
                    </div>
                </div>
                <div className='right'>
                    <div className='hamburger'onClick={()=>setmenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}