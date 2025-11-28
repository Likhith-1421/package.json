import Shimmer from "./Shimmer";
import { json } from "react-router-dom";
import { useParams } from "react-router-dom";
import useRestratentMenu from "./useRestratentMenu";
import RestratentCatagory from "./RestratentCatagory";
import { useState } from "react";

const RestratentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestratentMenu(resId);
  console.log(resInfo);
  const [showIndex, setShowIndex] = useState(2);
  //  console.log(resInfo)
  if (resInfo === null) return <Shimmer />;

  const { name, city } = resInfo?.cards[2]?.card?.card?.info;
  console.log(name)
  const result =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card
      .itemCards;
  // const item =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );
  const item =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log(item);

  return (
    <div>
      <h5 className="font-bold text-center text-2xl">{name}</h5>
      <h5 className="font-bold text-center text-lg">{city}</h5>

      {item.map((cat, index) => (
        <RestratentCatagory
          className="m-28"
          data={cat.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestratentMenu;
