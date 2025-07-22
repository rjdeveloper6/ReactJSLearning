import RestoruntCard from "./RestoruntCard";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restoruntlist, setRestoruntList] = useState([]);
  const [filteredRestoruntList, setFilteredRestoruntList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "this is my JSON " +
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestoruntList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestoruntList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restoruntlist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restoruntlist.filter((restorunt) =>
                restorunt.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestoruntList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restoruntlist.filter(
              (restorunt) => restorunt.info.avgRatingString > 4.3
            );
            setRestoruntList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestoruntList.map((restorunt) => {
          return <RestoruntCard key={restorunt.info.id} resData={restorunt} />;
        })}
      </div>
    </div>
  );
};

export default Body;
