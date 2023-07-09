import SearchComponent from "./Search";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

// Hooks --- JS Function "use"

const BodyComponent = () => {
  const [filteredRestaurantsArray, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  function filteredRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }

  function filterTopRatedRestaurants() {
    let topRatedRestaurants = filteredRestaurantsArray.filter(
      (restaurant) => restaurant.avgRating > 4
    );

    setFilteredRestaurants(topRatedRestaurants);
  }

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  async function fetchData() {
    const result = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&lat=18.6565914&lng=73.77277640000001&carousel=true&third_party_vendor=1"
    );

    const response = await result.json();

    const restaurantCards = response.data.cards.filter(
      (card) => card.cardType === "restaurant"
    );

    console.log("restaurant cards", restaurantCards);

    setFilteredRestaurants(restaurantCards);
    setAllRestaurants(restaurantCards);

    //console.log("response", response);
  }

  console.log("Body rendered");

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

      {filteredRestaurantsArray.length === 0 ? (
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
