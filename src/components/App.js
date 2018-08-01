import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Profile from '../containers/Profile';
import SliderComponent from '../containers/Slider';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab : 'slider'
    }
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a onClick={() => this.setState({currentTab:'slider'})}>Github Profile</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={() => this.setState({currentTab:'slider'})}>Slider</NavItem>
            <NavItem eventKey={2} onClick={() => this.setState({currentTab:'profile'})}>Profile</NavItem>
          </Nav>
        </Navbar>
        <div>
          {this.state.currentTab==='slider' ? <SliderComponent /> : false}
          {this.state.currentTab==='profile' ? <Profile /> : false}
        </div>
      </div>
    );
  }
}

export default App;
