import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANT_MENU_API } from "../utils/constant";

const RestoruntMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const { id } = useParams();
  console.log("Restaurant ID:", id);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const res = await fetch(RESTAURANT_MENU_API + id);
    console.log("Response:", RESTAURANT_MENU_API + id);
    const data = await res.json();
    console.log("Restaurant Menu Data:", data);
    setRestaurantMenu(data.data);
  };

  const { name, cuisines, costForTwoMessage } =
    restaurantMenu?.cards[2].card.card.info || {};

  const { itemCards } =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log("Item Cards:", itemCards);

  return restaurantMenu === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <h3>{item.card.info.name}</h3>
            <p>{item.card.info.description}</p>
            <h4>
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestoruntMenu;
