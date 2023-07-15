import SearchComponent from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../common/useOnline";
import useFetch from "../common/useFetch";

// Hooks --- JS Function "use"

const BodyComponent = () => {
  const isOnline = useOnline();
  const url =
    "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&lat=18.6565914&lng=73.77277640000001&carousel=true&third_party_vendor=1";
  const { response, isPending, error } = useFetch(url);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurantsArray, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    if (!isPending) {
      const restaurantCards = response?.data?.cards?.filter(
        (card) => card.cardType === "restaurant"
      );
      if (restaurantCards !== undefined) {
        setAllRestaurants(restaurantCards);
        setFilteredRestaurants(restaurantCards);
      }
    }
  }, [isPending, response]);

  function filteredRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }

  function filterTopRatedRestaurants() {
    let topRatedRestaurants = filteredRestaurantsArray.filter(
      (restaurant) => restaurant.avgRating > 4
    );

    setFilteredRestaurants(topRatedRestaurants);
  }

  if (!isOnline) {
    return <h1>Please check your Internet Connection</h1>;
  }

  // conditional rendering
  return (
    <>
      <div className="filter-search-bar">
        <SearchComponent
          restaurants={allRestaurants}
          filteredRestaurants={filteredRestaurants}
        />
        <button className="top-rated" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>

      {error && <div>{error}</div>}

      {isPending ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredRestaurantsArray.map((restaurant) => (
            <Link
              key={restaurant?.data?.data?.id}
              to={"/restaurant/" + restaurant?.data?.data?.id}
            >
              <RestaurantCard
                // Optional Chaining
                key={restaurant?.data?.data?.id}
                res_details={restaurant?.data?.data}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default BodyComponent;
