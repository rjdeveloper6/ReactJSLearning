import { IMAGE_URL } from "../utils/constant";

const RestoruntCard = (props) => {
  console.log("", props.resData);
  const { resData } = props;

  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={IMAGE_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestoruntCard;