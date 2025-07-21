import RestoruntCard from "./RestoruntCard";
import resObject from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restoruntlist, setRestoruntList] = useState(resObject);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restoruntlist.filter(
              (restorunt) => restorunt.card.card.info.avgRatingString > 4.0
            );
            setRestoruntList(filteredList);
          }}
        >
          Top Rated Restorunts
        </button>
      </div>
      <div className="res-container">
        {restoruntlist.map((restorunt) => {
          return (
            <RestoruntCard
              key={restorunt.card.card.info.id}
              resData={restorunt.card.card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
