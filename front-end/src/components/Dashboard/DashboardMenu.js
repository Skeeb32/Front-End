import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { DashNav } from "../../hooks/index";
import ProfileCard from "./Card";

const DashboardMenu = props => {
  return (
    <DashNav className="dash-panel">
      <ProfileCard user={props.user} />
      <ul>
        <Link to="/new-ticket">
          <li>Create Ticket</li>
        </Link>
        <Link to="/my-tickets">
          {props.user.isAdmin ? <li>Claimed Tickets</li> : <li>My Tickets</li>}
        </Link>
        <Link to="/tickets">
          <li>All Tickets</li>
        </Link>
      </ul>
    </DashNav>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(DashboardMenu);
