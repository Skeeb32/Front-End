import React from "react";
import { connect } from "react-redux";
import { deleteTicket } from "../../actions/actions";
import Dashboard from "../Dashboard/Dashboard";
import { ItemDiv } from "../../hooks/index";
import TicketItem from "./TicketItem";

const test = props => {
  props.tickets && Array.from(props.tickets.tickets).map(ticket => console.log(ticket) )
  const ownedTickets = Array.from(props.tickets.tickets).filter(
    ticket => 
    ticket.user_id === props.user.id
  );
  const claimedTickets = Array.from(props.tickets).filter(
    ticket => ticket.assigned_user === props.user.user_id
  ); 
  if (props.user && props.user.isAdmin) {
    return (
      <Dashboard>
        <ItemDiv>
         {props.tickets && Array.from(props.tickets.tickets).map(ticket => (
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
              // category={ticket.category}
              createdBy={ticket.user_id}
              // assigned={ticket.assigned}
              // resolved={ticket.resolved}
              // assignedUser={ticket.assigned_user}
              description={ticket.description}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  }
};
// const newComponent = props => {
//   return <h1>New Component</h1>
// }
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
