import React from "react";
import { connect } from "react-redux";

import { ItemDiv } from "../../hooks";

import TicketItem from "./TicketItem";
import { getData, assignTicket } from "../../actions/actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  assignTicket = (id, ticket) => {
    this.props.assignTicket(id, ticket);
  };

  render() {
    return (
      <Dashboard loggedUser={this.props.user}>
        <ItemDiv>
          {this.props.tickets.map(ticket => (
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
              assignTicket={this.assignTicket}
              userRole={this.props.user.isAdmin}
            />
          ))}
        </ItemDiv>
      </Dashboard>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getData, assignTicket }
)(TicketList);
