import { Link } from "react-router-dom";

const Contact = () =>
{
   return(
      <div className="bg-amber-500 h-120 ">
         <br/>
          <div className="border w-[500] h-[400] ml-60 bg-gradient-to-b from-white to-orange-300 rounded-md shadow ml-99">
             <h2 className="text-center pt-5  font-semibold">CONTACT US !</h2>
            <br/>
            <br/>
             <div className="flex ">
             <h6 className="text-xs px-3">NAME : P.SAI LIKHITH</h6>
             <h6 className="text-xs px-3">WHATS NO : 899409806</h6>
             <h6 className="text-xs px-3">Email : likhithpbk@gmail.com</h6>
             </div>
             <form className="mt-9 text-center">
               <label>NAME - </label>
               <input type="text" className="border-1 "></input>
               <br/>
               <br/>
                <label>Email - </label>
               <input type="Email" className="border-1 "></input>
               <br/>
               <br/>

               <Link to={'/Login'}><button className="w-20 h-9 bg-amber-500 text-white ml-80 mt-9">Conact</button></Link>
             </form>
          </div>
      </div>
   )
}
export default Contact;