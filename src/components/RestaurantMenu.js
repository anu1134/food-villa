import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../common/restaurant_img_url";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [restaurantMenuItems, setRestaurantMenu] = useState([]);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch(`${RESTAURANT_MENU_URL}${resId}`);
      const restaurantMenu = await response.json();

      let menu =
        restaurantMenu?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card?.itemCards;

      console.log("menu", menu);

      if (menu === undefined) {
        menu =
          restaurantMenu?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards[2]?.card?.card?.itemCards;
      }

      setRestaurantMenu(menu);
    }
    fetchMenu();
  }, [resId]);

  if (restaurantMenuItems === undefined) {
    return <h1>No menu Items found for this restaurant</h1>;
  }

  return restaurantMenuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {restaurantMenuItems.map((menu) => (
        <RestaurantMenuItemCard
          key={menu.card.info.id}
          menuDetails={menu}
        ></RestaurantMenuItemCard>
      ))}
    </>
  );
};

export default RestaurantMenu;
