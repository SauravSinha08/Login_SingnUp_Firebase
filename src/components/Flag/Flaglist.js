import React from "react";

const Flaglist = (props) => {
  const Flaglist = props.Flaglist;
  const flag = props.flag;
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      <div className="Product flex pt-4">
        {Flaglist &&
          Flaglist.map((elem, id) => {
            return (
              <div
                className="card mb-4  d-flex align-items-center justify-content-center"
                style={{ width: "10rem" }}
                key={id}
                onClick={() => props.handleFavouriteClick(elem)}
              >
                <img
                  className="card-img-top"
                  src={elem.flag}
                  alt="Card flag"
                />
                <FavouriteComponent />
              </div>
            );
          })}
        {flag &&
          flag.map((elem, id) => {
            return (
              <div
                className="card mb-4  d-flex align-items-center justify-content-center"
                style={{ width: "10rem" }}
                key={id}
                onClick={() => props.handleFavouriteClick(elem)}
              >
                <img
                  className="card-img-top"
                  src={elem.flag}
                  alt="Card flag"
                />
                <FavouriteComponent />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Flaglist;
