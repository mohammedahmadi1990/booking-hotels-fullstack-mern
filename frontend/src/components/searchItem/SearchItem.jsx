import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/266236600.webp?k=85737ac4797680f60436117218ace5c72b2e3ef3816c926339c48283704c0286&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio - 1 bathroom - 21m^2 1 full bed
        </span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, sp lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailText">
          <div className="siPrice">$123</div>
          <div className="siTaxOp">Include taxes and fees</div>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
