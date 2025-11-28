import { useState , useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import Usercontext from "../../Usercontext";



export const Header = () =>
   
 {
 
   const {matter} = useContext(Usercontext)
     let [loginform,setlogin] = useState('Login')
   
     

    return (
        <div className='flex justify-between border-1  h-24.8 p-3 rounded-4xl m-4 '>
            <div>
            <img className='w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzY-bEYo0KQs8N7Vhs_KIXqdY86io2Rsb4ZA&s" alt="Logo" />
            </div>
            
            <div className='flex items-center'>
                <ul className="flex">
                    <li className="px-4"><Link to={'/'}>HOME</Link></li>
                    <li className="px-4"><Link to={'/Contact'}>CONTACT US</Link></li>
                    <li className="px-4"> <Link to={'/Aboutus'}>ABOUT US </Link></li>
                    <li className="px-4"><Link to={'/Cart'}>CART</Link></li>
                    <li className="px-4"><Link to={'/groceary'}>Groceary</Link></li>
                    <Link to={loginform==='Login' ? '/Login' : '/'}>
                    <button  className="px-4 border-1 w-23 h-8 bg-amber-500" onClick={()=>{ loginform === 'Login' ? setlogin('Logout') : setlogin('Login') }}>{loginform}</button>
                    </Link>
                   
                    {/* <li>{matter}</li> */}
                </ul>
            </div>
        </div>
       
       
    )
 }
 export default Header;