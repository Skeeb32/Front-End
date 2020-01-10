import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteTicket } from "../../actions/actions";
class TicketItem extends Component {
  excerptHelper = text => {
    if (text.length > 100) {
      return text.slice(0, 100).concat(" . . .");
    } else {
      return text;
    }
  };
  render() {
    return (
      <div className="ticket-item">
        <div className="top-section">
          <div className="status">
            <p className="status-number">#{this.props.id}</p>
            <p
              className="status-resolved"
              style={
                this.props.resolved
                  ? { background: `red` }
                  : { background: `green` }
              }
            >
              {this.props.resolved ? "Closed" : "Open"}
            </p>
          </div>
          <div className="ticket-info">
            <Link to={`/edits/${this.props.id}`}>
              
              <h1 className="ticket-title">{this.props.title}</h1>
            </Link>
            <p className="ticket-description">
              {this.excerptHelper(this.props.description)}
            </p>
          </div>
          <div className="field">
              <button onClick={() => this.props.deleteTicket(this.props.id)}>Delete</button>
          </div>
          {/* <div className="field">
              <button onClick={() => this.props.editTicket(this.props.id)}>Edit</button>
          </div> */}
        </div>
        <div className="bottom-section">
          <div className="meta-tags">
            <div className="buttons">
              {this.props.userRole ? (
                this.props.assigned ? (
                  <button
                    onClick={() =>
                      this.props.assignTicket(this.props.id, this.props.ticket)
                    }
                  >
                    Unclaim
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      this.props.assignTicket(this.props.id, this.props.ticket)
                    }
                  >
                    Claim
                  </button>
                )
              ) : null}
            </div>
            <div>
              <p>Posted by: {this.props.user}</p>
            </div>
            <div>
              {/* <p>Topic: {this.props.category}</p> */}
            </div>
            <div>
              <p>{this.props.assigned ? "Assigned" : "Not Assigned"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
    // user: state.users.find(user => user.id === ownProps.createdBy)
  };
};

export default connect(
  mapStateToProps,
  { deleteTicket }
)(TicketItem);
