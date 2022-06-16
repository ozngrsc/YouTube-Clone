import React from "react";
import "./SearchPage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="1,13M"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the..."
      />
      <hr />
      <VideoRow
        views="2,5M"
        subs="1,14M"
        description="Here is the best free javascript programming course on the planet."
        timestamp="3 years ago"
        channel="Clever Programmer"
        title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/mqdefault.jpg"
      />
      <VideoRow
        views="368,9K"
        subs="1,14M"
        description="Free Training on How to Become a Developer in 90 Days."
        timestamp="8 months ago"
        channel="Clever Programmer"
        title="ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022]"
        image="https://i.ytimg.com/vi/0mVbNp1ol_w/maxresdefault.jpg"
      />
      <VideoRow
        views="436,6K"
        subs="1,14M"
        description="Learn React JS for FREE."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"
        image="https://i.ytimg.com/vi/-cMqr9HpZ-Y/maxresdefault.jpg"
      />
      <VideoRow
        views="122,2K"
        subs="1,14M"
        description="In this tutorial, you're gonna be building the Coinbase Blockchain Web 3.0 App using Next JS, Sanity.io, thirdweb, Styled Components, and Vercel 🔥"
        timestamp="5 months ago"
        channel="Clever Programmer"
        title="Build Coinbase Blockchain Web 3.0 App with Next.js | Sanity.io | thirdweb"
        image="https://i.ytimg.com/vi/frCsGK4cKks/mqdefault.jpg"
      />
      <VideoRow
        views="1,4M"
        subs="1,14M"
        description="🚀  Join FREE React.js Course."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/maxresdefault.jpg"
      />
      <VideoRow
        views="260,6K"
        subs="1,14M"
        description="FREE JavaScript Training."
        timestamp="2 years ago"
        channel="Clever Programmer"
        title="4 Steps to Become a Front End Developer in 2021"
        image="https://i.ytimg.com/vi/F3ztn4H6Ftg/maxresdefault.jpg"
      />
      <VideoRow
        views="162,4K"
        subs="1,14M"
        description="Register for the challenge ."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="Your Roadmap to becoming a Frontend + Web 3.0 Developer in 2022 | 3-Day React JS + Web 3.0 Challenge"
        image="https://i.ytimg.com/vi/Lz3m4BI1EfY/maxresdefault.jpg"
      />
      <VideoRow
        views="122,9K"
        subs="1,14M"
        description="FREE JavaScript Training."
        timestamp="2 years ago"
        channel="Clever Programmer"
        title="🔴 Frontend Developer Guide 2021 (Your Roadmap to a Successful Career)"
        image="https://i.ytimg.com/vi/UgBTKMUxudw/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
