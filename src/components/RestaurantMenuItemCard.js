import { RESTAURANT_IMG_URL } from "../common/restaurant_img_url";
import { useDispatch } from "react-redux";
import { addItem } from "../common/cartSlice";

const RestaurantMenuItemCard = (props) => {
  const { name, imageId, price, description } = props.menuDetails;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    console.log("item added");
    dispatch(addItem(props.menuDetails));
  };

  return (
    <div className="menu-item">
      <div className="item-details">
        <h4> {name}</h4>
        <span> Cost : {price / 100}</span>
        <p> {description}</p>
      </div>
      <img src={`${RESTAURANT_IMG_URL}${imageId}`} alt="menu item"></img>
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default RestaurantMenuItemCard;
