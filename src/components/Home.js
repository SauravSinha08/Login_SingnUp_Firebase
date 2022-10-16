import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Flaglist from "./Flag/Flaglist";
import AddFavourite from "./Flag/AddFavourites";
import RemoveFavourites from "./Flag/RemoveFavourites";

const Home = () => {
  const [data, setData] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const getApiData = async () => {
    await fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApiData();
  }, []);

  const addFavouriteFlag = (flag) => {
    const newList = [...favourite, flag];
    setFavourite(newList);
  };

  const removeFavouriteFlag = (elem) => {
    const newFavouriteList = favourite.filter(
      (x) => x !== elem
    );
    setFavourite(newFavouriteList);
  };

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="navbar p-3 px-xl-5">
        <NavLink className="active" to={"/"}>
          <h3>Home</h3>
        </NavLink>
        <div>
          {user && user.email}{" "}
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>
      <hr/>
      <div className="main">
      <Flaglist
        Flaglist={data}
        favouriteComponent={AddFavourite}
        handleFavouriteClick={addFavouriteFlag}
      />
      <h1>Favourites</h1>
      <Flaglist
        flag={favourite}
        handleFavouriteClick={removeFavouriteFlag}
        favouriteComponent={RemoveFavourites}
      />
      </div>    
    </>
  );
};

export default Home;
