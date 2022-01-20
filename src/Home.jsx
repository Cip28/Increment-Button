import React from 'react'
import banner from './images/banner.jpg'
import {Link} from 'react-router-dom'

export default function Home(props) {
    

    return (
        <div className='home'>
            <img src={banner} alt="banner" className='banner'/>
            <div className='text'>
                <h1>Isn't it a beautiful morning to start working full of energy?</h1>
                <p>If your answer is <span>NO</span> you should visit <a href="https://www.google.com/search?q=puppy&rlz=1C1GCEB_enRO964RO964&sxsrf=AOaemvIPSiYoXwgPMKjOfmlITNv4oeS5sA:1642062622955&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiD7Nv6p671AhVC3KQKHZgLDNcQ_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1">this</a> link.</p>
                <Link to="/archive" className='btn'>Previous activity</Link>
            </div>
        </div>
    )
}
