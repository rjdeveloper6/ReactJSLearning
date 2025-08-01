import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestoruntMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const res = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5529716&lng=73.7699627&restaurantId=613996&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await res.json();
    console.log("Restaurant Menu Data:", data);
    setRestaurantMenu(data.data);
  };

  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
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
            <h4>₹{item.card.info.price / 100}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestoruntMenu;
