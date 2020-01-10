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
      category_id: "",
      priority_level: "",
      status_id: "",
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

  handleCategoryChange = e => {
    this.props.categories.filter( category => {
      if (category.category === e.target.value) {
        this.setState({
          ticket: {...this.state.ticket, category_id: category.id}
        })
      }
    })
  };

  handlePriorityChange = e => {
    this.props.priorities.filter( priority => {
      if (priority.name === e.target.value) {
        this.setState({
          ticket: {...this.state.ticket, priority_level: priority.level}
        })
      }
    })
  };

  handleStatusChange = e => {
    this.props.statusList.filter(status => {
      if (status.status === e.target.value) {
        this.setState({
          ticket: {...this.state.ticket, status_id: status.id}
        })
      }
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTicket(this.state.ticket);
    this.props.history.push(`/tickets`);
    this.setState({
      title: "",
      description: "",
      user_id: "",
      category_id: "",
      priority_level: "",
      status_id: ""
    });
  };

  render() {
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
            <select onChange={this.handleCategoryChange} name="category" id="category">
              {this.props.categories && this.props.categories.map((category) => (
                <option key={category.id}>{category.category}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="priority"> Priority:</label>
            <select onChange={this.handlePriorityChange} name="priority" id="priority_level">
              {this.props.priorities && this.props.priorities.map((priorities) => (
                <option key={priorities.id}>{priorities.name}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="status"> Status:</label>
            <select onChange={this.handleStatusChange} name="status" id="statusList">
              {this.props.statusList && this.props.statusList.map(status => (
                <option key={status.id}>{status.status}</option>
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
    categories: state.categories,
    priorities: state.priorities,
    statusList: state.statusList

  };
};

export default connect(
  mapStateToProps,
  { addTicket }
)(TicketForm);
