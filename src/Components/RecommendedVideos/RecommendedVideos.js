import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Let's Build a YouTube Clone with REACT JS for Beginners"
          views="2,3M views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        />
        <VideoCard
          title="Solo Camping in the Australian Bush with my Dog [ Steak on campfire, Car: Jeep Wrangler ] SoC ep19"
          views="193,5K views"
          timestamp="8 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLThNfNaqCtbVTLmTK8ZXMBL_15YqtJYF-hMjSfJKQ=s48-c-k-c0x00ffffff-no-rj"
          channel="Go4x4"
          image="https://i.ytimg.com/vi/RyZD01ZUu3E/maxresdefault.jpg"
        />
        <VideoCard
          title="How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)"
          views="489K views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_UDsM4HAvzJKd1WtZgwqpu29utw"
        />
        <VideoCard
          title="Getting Started with Web Development"
          views="46,6K views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQ2WA4e4qHWq1C4iga_8Guq9Shw9jC_umnzLGl-=s48-c-k-c0x00ffffff-no-rj"
          channel="London App Brewery"
          image="https://i.ytimg.com/vi/5SXK__rm6DM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAXL45F0ALPwQsjsk90MBfwSDGwrQ"
        />
        <VideoCard
          title="Shallow - Lady Gaga, Bradley Cooper * Allie Sherlock cover*"
          views="17,8M views"
          timestamp="4 years ago"
          channelImage="https://yt3.ggpht.com/52Kb80TbN_99BTpfAVqXY49_RoRSJbIwQHgdFMjEkxhD8T9GdF3CWCJBNNEF3ekXHNq7Vaci1w=s48-c-k-c0x00ffffff-no-nd-rj"
          channel="Allie Sherlock"
          image="https://i.ytimg.com/vi/tjmk6YMWbQg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0YxXYmnJetH_-kzXGF2et1lNNsQ"
        />
        <VideoCard
          title="Learn to play the theme from Amélie (Comptine d'un autre été) - Beginner Piano Lesson"
          views="77,5K views"
          timestamp="4 months ago"
          channelImage="https://yt3.ggpht.com/RjzIRqzx57PesN0mx1RErfqZQrQd1i7OgKBf3FKLiN_P23ki5zPJvsAn0TLcu_HFBsJL1qEDqQ=s48-c-k-c0x00ffffff-no-rj"
          channel="Pianote"
          image="https://i.ytimg.com/vi/O6Au1Qd-zN0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDSUhHW5xzZhKrW8wNNbSOlQMXJHg"
        />
        <VideoCard
          title="mor ve ötesi - Bir Derdim Var (Canlı Senfonik)"
          views="62,4M views"
          timestamp="8 yeras ago"
          channelImage="https://yt3.ggpht.com/KhBIL7Cynw55XuObhHA_NUyhQ8BU9Hqcqwcr53hJbUyQiioXxdJQTvwp1pDGI2USfcbm_RfOBQ=s48-c-k-c0x00ffffff-no-nd-rj"
          channel="mor ve ötesi"
          image="https://i.ytimg.com/vi/oaDoNRCD21U/maxresdefault.jpg"
        />
        <VideoCard
          title="maNga - We Could Be The Same (Turkey) Live 2010 Eurovision Song Contest"
          views="15,2M views"
          timestamp="6 years ago"
          channelImage="https://yt3.ggpht.com/PriKZi0oRRkvYVhcbk8NFRGe9McIXtd0SvoT6yWB2_a9Z08nwekbwsr3ITMqZKl6Jh5w4vSVm3o=s48-c-k-c0x00ffffff-no-rj"
          channel="Eurovision Song Contest"
          image="https://i.pinimg.com/originals/38/15/55/38155535a5d876d62501d071fc9a043d.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
