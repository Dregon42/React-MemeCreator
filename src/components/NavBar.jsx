import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className='col h-full hidden lg:block navbar-menu relative z-50 bg-black'>
      <nav className=' flex flex-col absolute top-0 bottom-0 h-full w-24 lg:w-8 sm:max-w-xs pt-6 pb-8 left-0 bg-slate-400 overflow-y-auto '>
        <ul>
            <li className=' flex row'>
                <Link to="/">
                    <img src="https://yt3.ggpht.com/a/AGF-l7_lwWZmSjA50lpZHUV7-2Q_7-DfWDmlMz7Sig=s900-c-k-c0xffffffff-no-rj-mo" alt="red eyed monnkey with a yellow vest and " className='w-2.5'id='nav-image'/>{/* Meme logo here */}
                    <span>Meme Me Baby</span>
                </Link> 
            </li>
            <li className=' flex row'>
                <a href="/"> {/*TODO: Add functional link*/}  
                    <i className="fas fa-home"></i>
                    <span className='nav-item font-semibold text-xl'>Home</span>
                </a>
            </li>
            <li className=' flex row'>
                <Link to="/meme"> {/*TODO: Add functional link*/}  
                    <i class="fa-regular fa-face-grin-tongue-wink"></i>
                    <span className='nav-item font-semibold text-xl'>Create Meme</span>
                </Link>
            </li>
            <li className=' flex-row justify-between'>
            <Link to="/memelist"> {/*TODO: Add functional link*/}  
                    <i className='fa-solid fa-list'></i> {/* TODO: find whacky emoji from font-awsome */}
                    <span className='nav-item font-semibold text-xl'>Memes</span>
                </Link>
            </li>
            <li className=' flex row'>
                <a href="#">
                    <i className='fas fa-sign-out-alt'></i>
                    <span>Log Out</span>
                </a>
            </li>
        </ul>
      </nav>
    </div>
  )
}
