import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s48-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="1,13M"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the..."
      />
    </div>
  );
}

export default SearchPage;
