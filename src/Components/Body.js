

import { CLD_IMG } from "./Constants"
const Body = ({Data}) =>
 {
 
    return (
    <div className="border-1 w-70 h-77 bg-gray-50 hover:bg-gray-200 rounded-2xl ml-2 ">
       
        <img className='w-65 h-45 rounded-4xl items-center ml-3 mt-2' src= {CLD_IMG + Data.info.cloudinaryImageId} alt="Pure Veg Badge" />
        <div className="mt-4">
         <h6 className="text-xs">Restratent-NAME : {Data.info.name}</h6>
         <h6 className="text-xs">PRICE : {Data.info.costForTwo}</h6>
         <h6 className="text-xs">CUISINES : {Data.info.cuisines.join(", ")}</h6>
         <h6 className="text-xs">RATING : {Data.info.avgRating}</h6>
         <h6>{Data.info.promoted}</h6>
      
         {/* <h6>{mockData.info.locality}</h6>
         <h6>{mockData.info.sla.deliveryTime}</h6> */}
         </div>
    </div>
    )
 }
 export const RestrantPromoted = (Body) =>
 {
     return(restratent) =>
     {
      return(
         <div>
         <label>Promoted</label>
         <Body {...restratent}/>
         </div>
      )
     }
 }
 export default Body;