import React, { useState } from 'react';
// import { AiFillEnvironment } from 'react-icons/ai';


export default function Bar() {
    const [open, setOpen] = useState(true);

  return (
    <nav className='flex'>
        <div className={`bg-dark-purple h-screen p-5 pt-8
        ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
            <i className={`fa-solid fa-arrow-left bg-white text-dark-purple
            text-xl rounded-full p-2 absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}></i>
            <div className="flex inline-flexe-">
              <img src="https://yt3.ggpht.com/a/AGF-l7_lwWZmSjA50lpZHUV7-2Q_7-DfWDmlMz7Sig=s900-c-k-c0xffffffff-no-rj-mo" alt="red eyed monnkey with a yellow vest and " 
                className={`h-9 block float-left cursor-pointer mr-2 duration-300 ${ open && 'rotate-[360deg]'}`}/>
              <h1 className={`text-white origin-left font-medium text-2xl ${!open && 'scale-0'}`}>
                Meme Me Baby
              </h1>
            </div>
            <ul className="pt-4">
              <li className='text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-light-white rounded-md mt-2'>
                  <a href="#">
                      <i className="fas fa-home block float-left text-2xl mr-2"></i>
                      <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                        Home
                      </span>
                  </a>
              </li>
              <li className='text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-light-white rounded-md mt-2'>
                <a href="">
                    <i class="fa-regular fa-face-grin-tongue-wink block float-left text-2xl mr-2"></i>{/* TODO: List icon from font-awsome  */}
                    <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`} >
                      Create Meme
                    </span>
                </a>
              </li>
              <li className='text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-light-white rounded-md mt-2'>
                <a href="#">
                    <i className='fa-solid fa-list block float-left text-2xl mr-2'></i> {/* TODO: find whacky emoji from font-awsome */}
                    <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                      Memes
                    </span>
                </a>
              </li>
              <li className='text-slate-300 text-sm flex items-center gap-x-4 cursor-pointer 
                p-2 hover:bg-light-white rounded-md mt-2'>
                <a href="#">
                    <i className='fas fa-sign-out-alt block float-left text-2xl mr-2'></i>
                    <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>
                      Log Out
                    </span>
                </a>
              </li>
            </ul>
        </div>
    </nav>
  )
}

