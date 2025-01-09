import {MoonIcon, SunIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { useState } from 'react';

function Nav(){
    // Hamburger Menu state 
    let [isMenuVisible, setMenuVisibility] = useState(window.innerWidth < 640 ? false : true);

    // Re-opens menu if:
    // The user opens and closes 
    // the menu at a mobile width (w < 640px), but then resizes to tablet or desktop sizes.
    // Without this, the mobile hamburger menu could be opened and closed but then
    // remain hidden at larger screen sizes
    window.addEventListener('resize', () => {
        if(window.innerWidth >= 640 && !isMenuVisible){
            setMenuVisibility(true);
        }else if(window.innerWidth < 640 && isMenuVisible){
            // This is for when the screen is resized from desktop to mobile,
            // the menu will close automatically
            setMenuVisibility(false);
        }
    });
    return (
        <nav>
            <div className='flex justify-between max-w-7xl mx-auto sticky top-0 bg-transparent px-6 py-6 text-white'>
                {/* Logo */}
                <p>GAEL</p>

                <div className='flex gap-6'>
                    {/* Site links */}
                    {isMenuVisible ?
                        <ul className='flex flex-col fixed inset-0 p-24 bg-slate-900 sm:bg-transparent gap-6 sm:static sm:flex-row sm:p-0'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Skills</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    :
                        <></>
                    }

                    {/* Light / Dark mode toggle */}
                    <button className='flex gap-2'>
                        <MoonIcon className='size-6'/>
                        <SunIcon className='size-6'/>
                    </button>

                    {/* Mobile Menu Button */}
                    <button className='block sm:hidden z-40' onClick={()=>{
                        setMenuVisibility(!isMenuVisible)
                    }}>
                        {isMenuVisible ?
                            <XMarkIcon className='size-6'/>
                            :
                            <Bars3Icon className='size-6'/>
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav