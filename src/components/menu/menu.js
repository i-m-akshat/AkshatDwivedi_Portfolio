import './menu.scss';
export default function Menu({menuOpen,setmenuOpen}){
    return(
        <div className={"menu " +(menuOpen&&"active")}>
            <ul>
                <li onClick={()=>setmenuOpen(false)}>
                    <a href="#Intro">Home</a>
                </li>
                <li onClick={()=>setmenuOpen(false)}>
                    <a href="#Portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setmenuOpen(false)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={()=>setmenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setmenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        )
}