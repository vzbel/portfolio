import {MoonIcon, SunIcon, Bars3Icon} from '@heroicons/react/24/outline'

function Nav(){
    return (
        <nav className='flex justify-between max-w-7xl mx-auto sticky top-0 px-6 py-6 bg-red-100'>
            {/* Logo */}
            <p>GAEL</p>

            <div className='flex gap-6'>
                {/* Site links */}
                <ul className='hidden gap-6 sm:flex'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                {/* Light / Dark mode toggle */}
                <button className='flex gap-2'>
                    <MoonIcon className='size-6'/>
                    <SunIcon className='size-6'/>
                </button>

                {/* Mobile Menu Button */}
                <button className='block sm:hidden'>
                    <Bars3Icon className='size-6'/>
                </button>
            </div>
        </nav>
    );
}

export default Nav