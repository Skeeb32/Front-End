import React from "react";

import { ProfileDiv } from "../../hooks/index";

const Card = props => {
  return (
    <ProfileDiv className="profile-panel">
      <div className="profile-header">
        <img src="" alt="" />
        <h1>
          {props.user.username[0].toUpperCase()}
          {props.user.username.slice(1, props.user.username.length)}
        </h1>
      </div>
      <div className="profile-content">
        <p>
           {props.user.first_name} {props.user.last_name}
        </p>
        <p>{props.user.email}</p>
      </div>
    </ProfileDiv>
  );
};

export default Card;
