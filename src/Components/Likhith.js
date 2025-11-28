import {useContext, useState } from "react"
import Usercontext from "../../Usercontext"



const Likith = () => 
{
const {matter} = useContext(Usercontext)
// console.log(data)
const [showitems, setShowitems] = useState(false)
const handleClick  = () =>
{
   setShowitems(!showitems)
}


   return(
 <div>
       <h3>{matter}</h3>

    <div className='border w-20 h-auto text-center ml-90'>
         <h4 onClick={handleClick} className="cursor-pointer">info</h4>
        {showitems && <ui >
            <li>name</li>
            <li>class</li>
            <li>age</li>
            <li>name</li>
            <li>class</li>
            <li>age</li>
            
        </ui>}
        <br/>
   
    </div>
{/* <label>userName : </label>
<input className="border-black" value={name} onChange={(e)=>setUserName(e.target.value)}/> */}
 
      
  </div>
)}
export default Likith;