import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { Menu2_Api } from "./Constants";
import Shimmer from "./Shimmer";

const Trail = () =>

{

   // const [resId2]= useParams();

   useEffect(()=>{
      fetchTrail()
   },[])

   const[Trail,setTrail] = useState(null);

   const fetchTrail = async()=>
   {
      const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=781328&catalog_qa=undefined&query=South%20Indian&submitAction=ENTER');
      const Data = await data.json()
      console.log(Data)
      console.log(data)
      setTrail(Data.data)
   }
   if (Trail===null) return<Shimmer/>;
   // const {name} = Trail?.cards[2]?.card?.card?.info
  const result2 = Trail.cards[4].groupedCard.cardGroupMap.REGULAR.
cards[2].card.card.itemCards;
// console.log(result2)
   return(
      <div>
         <h2>Menu</h2>
       {Trail?.cards[2]?.card?.card?.info.name}
       <h2>ItemCards</h2>
       {result2.map((Trail)=><h5>({Trail.card.info.name})</h5>)}
       {/* {} */}

    
      </div>
   )
}
export default Trail;
