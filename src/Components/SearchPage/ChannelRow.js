import { Avatar } from "@mui/material";
import React from "react";
import "./ChannelRow.css";
import VerifiedIcon from "@mui/icons-material/Verified";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}{" "}
          {verified && <VerifiedIcon className="channelRow__virifiedIcon" />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p className="channelRow__textDescription">{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
