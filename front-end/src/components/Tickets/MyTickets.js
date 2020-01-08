import React from "react";
import { connect } from "react-redux";

import { deleteTicket } from "../../actions/actions";
import Dashboard from "../Dashboard/Dashboard";
import { ItemDiv } from "../../hooks/index";
import TicketItem from "./TicketItem";

const test = props => {
  const ownedTickets = props.tickets.filter(
    ticket => ticket.user_id === props.user.user_id
  );
  const claimedTickets = props.tickets.filter(
    ticket => ticket.assigned_user === props.user.user_id
  );
  if (props.user.isAdmin) {
    return (
      <Dashboard>
        <ItemDiv>
          {claimedTickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              ticket={ticket}
              title={ticket.title}
              category={ticket.category}
              createdBy={ticket.user_id}
              assigned={ticket.assigned}
              resolved={ticket.resolved}
              assignedUser={ticket.assigned_user}
              description={ticket.description}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  } else {
    return (
      <Dashboard>
        <ItemDiv>
          {ownedTickets.map(ticket => (
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              ticket={ticket}
              title={ticket.title}
              category={ticket.category}
              createdBy={ticket.user_id}
              assigned={ticket.assigned}
              resolved={ticket.resolved}
              assignedUser={ticket.assigned_user}
              description={ticket.description}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  }
};

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { deleteTicket }
)(test);
