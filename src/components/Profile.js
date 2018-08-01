import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class userInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : this.props.profile,
      editing : false,
      error: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({userInfo:nextProps.profile})
  }

  updateValue(type, event) {
    var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
    userInfoCopy[type] = event.target.value;
    this.setState({userInfo:userInfoCopy});
  }

  saveProfile() {
    var error = false;
    var propertiesToCheck = ['name', 'bio', 'location', 'company'];
    propertiesToCheck.forEach(function(term) {
      if(this.state.userInfo[term]==='') {
        error = true;
      }
    }.bind(this));
    if(!error) {
      this.props.saveProfile(this.state.userInfo);
    }
    this.setState({error});
  }

  render() {

    return (
      <div className="container">
        <Button bsStyle="primary" onClick={() => this.setState({editing: !this.state.editing})}>
          {this.state.editing ? 'Cancel Edit' : 'Edit'}
        </Button>
        <hr />

        {this.state.editing ?
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              className={this.state.error&&this.state.userInfo.name==='' ? 'red-border' : ''}
              value={this.state.userInfo.name}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this,'name')}
            />
            <ControlLabel>Bio</ControlLabel>
            <FormControl
              type="text"
              className={this.state.error&&this.state.userInfo.bio==='' ? 'red-border' : ''}
              value={this.state.userInfo.bio}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this,'bio')}
            />
            <ControlLabel>Location</ControlLabel>
            <FormControl
              type="text"
              className={this.state.error&&this.state.userInfo.location==='' ? 'red-border' : ''}
              value={this.state.userInfo.location}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this,'location')}
            />
            <ControlLabel>Company</ControlLabel>
            <FormControl
              type="text"
              className={this.state.error&&this.state.userInfo.company==='' ? 'red-border' : ''}
              value={this.state.userInfo.company}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this,'company')}
            />
            <Button bsStyle="info" onClick={this.saveProfile.bind(this)}>Save</Button>
          </FormGroup>
        :
          <div>
            <p><strong>Name:</strong> {this.state.userInfo.name}</p>
            <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
            <p><strong>Location:</strong> {this.state.userInfo.location}</p>
            <p><strong>Company:</strong> {this.state.userInfo.company}</p>
          </div>
        }


      </div>
    );
  }
}

export default userInfo;
