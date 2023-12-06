import React from 'react'
import '../index.css'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const togglesidebar = () => {
        const toggleButton = document.getElementById('togglemenu');
        const sidebar = document.getElementById('sidebar');
      
        toggleButton.addEventListener('click', function () {
          // Toggle the width of the sidebar to show/hide it
          sidebar.style.width = sidebar.style.width === '40vw' ? '0' : '40vw';
         
        });
    }




    return (
        <><nav id='navbar' className='flex align-center justify-around'>
            <h1>Mini News</h1>
            <ul id='navul' className='flex align-center justify-end'>

                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Category</button>
                        <div className="dropdown-content">
                            <Link to="/health">Health</Link>
                            <Link to="/science">Science</Link>
                            <Link to="/sports">Sports</Link>
                            <Link to="/technology">Tech</Link>
                            <Link to="/">Business</Link>
                            <Link to="/entertainment">Entertainment</Link>

                            <Link to="/Politics">Politics</Link>
                        </div>
                    </div>
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div hidden id='togglemenu' onClick={togglesidebar}>
                <img src="./more.png" alt="Menu" />
            </div>
        </nav>


        <div id="sidebar" class="sidebar">
     
                <ul className='flex align-center justify-center flex-col'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/health">Health</Link></li>
                    <li><Link to="/science">Science</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                    <li><Link to="/technology">Tech</Link></li>
                    <li><Link to="/Politics">Politics</Link></li>
                    {/* <li><Link to="/">Business</Link></li> */}
                    <li><Link to="/entertainment">Entertainment</Link></li>
                    {/* <li><Link to="/">Category</Link></li> */}

                </ul>
            </div>
        </>
    )
}


// {
//     "categoryUri": "dmoz/Science"
// },
// {
//     "categoryUri": "dmoz/Business"
// },
// {
//     "categoryUri": "dmoz/Computers"
// },
// {
//     "categoryUri": "dmoz/Games"
// },
// {
//     "categoryUri": "dmoz/Arts/Movies"
// }