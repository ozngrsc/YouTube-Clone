import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menuIcon" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          className="headerInput__input"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEZ5TX0YIhjUw/profile-displayphoto-shrink_800_800/0/1517626990623?e=1660176000&v=beta&t=K8bzdUFf4Zwm3Xo-uQvgyM49g7-6ylxjNniwiBTQSTw"
          alt="Ozan Gürsucu"
        />
      </div>
    </div>
  );
}

export default Header;
