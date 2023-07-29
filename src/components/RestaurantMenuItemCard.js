import { RESTAURANT_IMG_URL } from "../common/restaurant_img_url";

const RestaurantMenuItemCard = (props) => {
  const { name, imageId, price, description } = props.menuDetails.card.info;
  return (
    <div className="menu-item">
      <div className="item-details">
        <h4> {name}</h4>
        <span> Cost : {price / 100}</span>
        <p> {description}</p>
      </div>
      <img src={`${RESTAURANT_IMG_URL}${imageId}`} alt="menu item"></img>
    </div>
  );
};

export default RestaurantMenuItemCard;
