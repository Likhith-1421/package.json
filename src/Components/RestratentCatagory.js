import { useState } from "react"
import ItemCatagory from "./ItemCatagory"

const RestratentCatagory = ({data,showItems,setShowIndex}) =>
   

{

const handleclick =() =>
    {
       setShowIndex();
        
    }
    return (
    <div className="m-3">
        <div className="text-center  border bg-amber-500 text-white w-6/12  m-auto  shadow-2xs rounded-2xl">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
            <span className="m-3 mt-1 " >{data.title} ({data.itemCards.length})</span>
            <span  className="m-3 mt-1">{showItems ?'⬆' : '⬇'}</span>
            </div>
        {showItems && <ItemCatagory items={data.itemCards} />}
        
           </div>
        
            
    
    </div>
    )
}
export default RestratentCatagory