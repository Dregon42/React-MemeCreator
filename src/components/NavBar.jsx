import React, { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


export default function NavBar() {
  const [open, setOpen] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // Not working as planned; used tenary operator but didn't work
  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false)
  };

  return (
    <nav className='flex h-screen'>
        <div className={`bg-dark-purple  p-5 pt-8
        ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
            <i className={`fa-solid fa-arrow-left bg-white text-dark-purple
            text-xl rounded-full p-2 absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}></i>
            <div className="flex inline-flexe-">
              <a href="/">
                <img src="https://yt3.ggpht.com/a/AGF-l7_lwWZmSjA50lpZHUV7-2Q_7-DfWDmlMz7Sig=s900-c-k-c0xffffffff-no-rj-mo" alt="red eyed monnkey with a yellow vest and " 
                  className={`h-9 block float-left cursor-pointer mr-2 duration-300 ${ open && 'rotate-[360deg]'}`}/>
                <h1 className={`text-white origin-left font-medium text-2xl ${!open && 'scale-0'}`}>
                  Meme or Not
                </h1>
              </a>
            </div>
            <ul className="pt-4">
              <li
                className={`text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover-bg-light-white rounded-md mt-2`}
              >
                <a href="/meme">
                  <i className="fa-regular fa-face-grin-tongue-wink block float-left text-2xl mr-2"></i>
                  <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                    Create Meme
                  </span>
                </a>
              </li>
              <li
                className={`text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover-bg-light-white rounded-md mt-2`}
              >
                <a href="/memelist">
                  <i className='fa-solid fa-list block float-left text-2xl mr-2'></i>
                  <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                    Memes
                  </span>
                </a>
              </li>
              <li className='text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-light-white rounded-md mt-2'>
                  <a>
                    <i className="fa-solid fa-right-to-bracket block float-left text-2xl mr-2"></i>
                    <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                      <LoginButton setAuthenticated={setAuthenticated}/>
                    </span>
                  </a>
                </li>
              {/* TODO: add javavscript if !authenticated show signup or signin else logout  */}
              {
                authenticated &&
                <li className='text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer 
                  p-2 hover:bg-light-white rounded-md mt-2'>
                  <a onClick={ () => {handleLogout()}}>
                    <i className='fas fa-sign-out-alt block float-left text-2xl mr-2'></i>
                    <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                      <LogoutButton />
                    </span>
                  </a>
                </li>
              }
            </ul>
        </div>
    </nav>
  )
}

