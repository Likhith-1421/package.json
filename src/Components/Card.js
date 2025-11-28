import Body, { RestrantPromoted } from "./Body";
import mockData from "../public/Mockdata";
import { useState, useContext } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Likhith from "./AboutUser";
import useOffline from "../useOnline";
import Usercontext from "../../Usercontext";

const Card = () => {
  let [result, setResult] = useState([]);
  const [res, setRes] = useState([]);
  const [search2, setSearch] = useState("");
  const WithRestratendPromoted = RestrantPromoted(Body);

  // console.log(res)
  const { matter, setUserName } = useContext(Usercontext);
  // console.log(matter)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data)
    const json = await data.json();

    setResult(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  //   const online = useOffline();
  //   if (online === false) return <h4>YOU ARE OFFLINE</h4>;
  const online = useOffline();
  //  if (res.length=== 0 )
  // {
  //    return(
  //   < Shimmer />
  //    )
  // }

  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <br />
      <div className="flex justify-between">
        <button
          className="flex border-0 w-55 h-9 bg-amber-500 ml-13 items-center"
          onClick={() => {
            const result = res.filter((x) => x.info.avgRating > 4.3);
            setResult(result);
          }}
        >
          Click here for Top Restratent
        </button>

        <button
          className="flex border-0 w-55 h-9 mr-13 bg-amber-500 text-white"
          onClick={() => {
            const result = res.filter((restaurants) =>
              restaurants.info.cuisines.includes("Pizzas")
            );
            console.log(result);
            setResult(result);
          }}
        >
          Click here for Ice Creams
        </button>

        <div className="flex">
          <form>
            <input
              className="w-80 border-1 h-6"
              type="search"
              placeholder="SEARCH  HERE  FOR  YOUR  MEAL"
              value={search2}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
          </form>
          <button
            className="border-1 w-20 h-6 bg-amber-500"
            onClick={() => {
              setResult(
                result.filter((restratents) =>
                  restratents.info.name
                    .toLowerCase()
                    .includes(search2.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
{/* 
          <input
            className="border border-black"
            value={matter}
            onChange={(e) => setUserName(e.target.value)}
          ></input> */}
        </div>

        {/* <Link to={"/Trail/"}>
          {" "}
          <button>Click here</button>
        </Link> */}

        <h4 className="online"> online status : {online ? "✅" : "🔴"}</h4>
      </div>
      <br />
      <div className="flex gap-9 flex-wrap text-center ">
        {result.map((restratent) => (
          <Link to={"/restratentmenu/" + restratent.info.id}>
            <Body Data={restratent} key={restratent.info.id} />
          </Link>
        ))}
      </div>

      {/* <div className="header_bottom">
        <div>
          <h1 className="Body2">ARE YOU HUNGRY ?</h1>
          <h3 className="sastify">Swiggy Satisfies Your Hunger !</h3>
          <h3 className="sastify2">Order It Now </h3>
        </div>
        <img
          className="image-discount"
          src="https://img-cdn.publive.online/fit-in/1200x675/entrackr/media/post_attachments/wp-content/uploads/2018/12/swiggy.jpg"
        ></img>
      </div>

      <Likhith /> */}
    </div>
  );
};
export default Card;
