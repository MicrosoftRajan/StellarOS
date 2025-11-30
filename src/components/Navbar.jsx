import dayjs from 'dayjs'
import { navIcons, navLinks } from '@/constants'
import React from 'react'
import useWindowStore from '@/store/window'

const Navbar = () => {
    const { openWindow } = useWindowStore();

    const toggleWallpaper = () => {
        if (typeof document !== 'undefined') {
            document.body.classList.toggle('dark-wallpaper');
        }
    }
  return (
    <nav>
        <div>
        <img src="/images/logo.svg" alt="applelogo" />
        <p className='font-bold'>Rajan's Portfolio</p>
        <ul>
            {navLinks.map(({id, name, type}) => (
                <li key={id} onClick={() => openWindow(type)}>
                    <p>{name}</p>
                </li>
            ))}
        </ul>
        </div>


        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id} onClick={id === 4 ? toggleWallpaper : undefined}>
                        <img src={img} alt={`icon${id}`} className='icon-hover'  />
                    </li>
                ))}
            </ul>
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  )
}

export default Navbar