import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../common/restaurant_img_url";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();
  const propsData = location.state;

  const [restaurantMenuItems, setRestaurantMenu] = useState([]);

  const { name, cuisines, avgRating, _id } = propsData;

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch(
        "http://localhost:8000/api/restaurantMenu/64bcc09a64e55f2a99ffcb18"
      );
      const restaurantMenu = await response.json();

      setRestaurantMenu(restaurantMenu);

      console.log("restaurant menu", restaurantMenu);
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
      <div className="restaurant-details">
        <div className="res-header-container">
          <div className="restaurant-header-details">
            <h2>{name}</h2>
            <span>{cuisines}</span>
          </div>

          <div className="rating">
            <Link to={"/restaurant/" + { _id } + "/review"}>
              <h1>{avgRating}</h1>
              <AiFillStar className="star" color={"green"} size={25} />
            </Link>
          </div>
        </div>
        <div className="restaurant-menu">
          <h3>Recommended({restaurantMenuItems.length})</h3>
          {restaurantMenuItems.map((menu) => (
            <RestaurantMenuItemCard
              key={menu.id}
              menuDetails={menu}
            ></RestaurantMenuItemCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
