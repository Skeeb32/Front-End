import React, { Component } from "react";
import { connect } from "react-redux";

import { SForm, TicketH1 } from "../../hooks/index";
import { addTicket } from "../../actions/actions";
import Dashboard from "../Dashboard/Dashboard";

class TicketForm extends Component {
  state = {
    ticket: {
      title: "",
      description: "",
      category: "",
      resolved: false,
      assigned: false,
      user_id: this.props.user.user_id
    }
  };

  handleChange = e => {
    this.setState({
      ticket: { ...this.state.ticket, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTicket(this.state.ticket);
    this.props.history.push(`/tickets`);
    this.setState({
      title: "",
      description: "",
      user_id: ""
    });
  };

  render() {
    console.log(this.props.categories)
    return (
      <Dashboard>
        <TicketH1>Submit A Ticket</TicketH1>
        <SForm onSubmit={this.handleSubmit} action="">
          <div className="field">
            <label htmlFor="title">Title:</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.ticket.title}
            />
          </div>
          <div className="field">
            <label htmlFor="category"> Category:</label>
            <select onChange={this.handleChange} name="category" id="category">
              {this.props.categories && this.props.categories.map((category) => (
                <option key={category.id}>{category.category}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={this.handleChange}
              type="textarea"
              name="description"
              value={this.state.ticket.description}
            />
          </div>

          <button type="submit">Submit</button>
        </SForm>
      </Dashboard>
    );
  }
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user,
    categories: state.categories
  };
};

export default connect(
  mapStateToProps,
  { addTicket }
)(TicketForm);
