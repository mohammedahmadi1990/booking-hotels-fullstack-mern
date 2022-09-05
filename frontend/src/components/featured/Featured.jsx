import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/139338970.jpg?k=a279461dfe1091c8994850fd3108eae0d1c2ff79e5a2581e86c0e426daa72a6c&o=&hp=1"
              alt=""
              className="featuredItem"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/267154649.jpg?k=fb7be33225e85f0b619b7e9526fb286f7d768608004eb73e311df19e76676264&o=&hp=1"
              alt=""
              className="featuredItem"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/76316131.jpg?k=9bd26f9ac7ddbb32285e764d18c34640efc099778cb42837dd91c4e873f48db5&o=&hp=1"
              alt=""
              className="featuredItem"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
