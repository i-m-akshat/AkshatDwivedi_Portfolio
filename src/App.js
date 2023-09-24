import Intro from './components/Intro/Intro';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Topbar from './components/topbar/topbar';
import Work from './components/work/work';
import  Menu from './components/menu/menu'
import './App.scss';
import { useState } from 'react';

function App() {
  const [menuOpen,setmenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className='sections'>
<Intro></Intro>
<Portfolio></Portfolio>
<Work></Work>
<Testimonials></Testimonials>
<Contact></Contact>
      </div>
    </div>
  );
}

export default App;
