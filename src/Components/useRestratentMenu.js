import { useEffect, useState } from "react";
import { Menu2_Api } from "./Constants";
const useRestratentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=' + resId);
    //  console.log(data)
    const DATA = await data.json();
    setResInfo(DATA.data);
  };
  return resInfo;
};

export default useRestratentMenu;
