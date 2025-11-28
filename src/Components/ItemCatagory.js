import { CLD_IMG } from "./Constants";

const ItemCatagory = ({items}) =>
    
{
    console.log(items)
    return(
      
        <div >
     {items.map(item  => <div key = {item.card.info.id}className="p-2 m-2 border-b-1 border-white text-left flex justify-between">
      
         <div className="w-9/12 ">
        <span className="font-bold ">{(item.card.info.name) }</span>
        <span>-₹{(item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice/100)}</span>
    
           <p className="text-xs mt-10">{(item.card.info.description)}</p>
           </div>
       
    <div >
        <button className="absolute bg-white ml-10 text-black mt-24 w-14 rounded-2xl">Add +</button>
       <img src={CLD_IMG + item.card.info.imageId} className="w-32 rounded-3xl h-30"></img>
      
    </div>
       </div>
       
       
    )}
  
        </div>

    )
}
export default ItemCatagory;