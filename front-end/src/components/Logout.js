import React from 'react';
import {Redirect} from 'react-router-dom';


class Logout extends React.Component {
    state= {
      navigate: false
    };
      logoutBtn = () => {
      sessionStorage.clear('token');
      this.setState({navigate: true});
    };

    render(){

    const {navigate} = this.state;
    if(navigate) {
      return <Redirect to='/' push={true}/>;
    }

  return <button onClick={this.logoutBtn}>Logout</button>

  }
}

export default Logout;
