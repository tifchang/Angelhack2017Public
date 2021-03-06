import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      repeatPassword: ''
    }
  }

  // onSubmit(event) {
  //   event.preventDefault();
  //   axios.post("https://morning-badlands-13664.herokuapp.com/register", {username: this.state.username, password: this.state.password, repeatPassword: this.state.repeatPassword})
  //   .then(resp => {
  //     if(resp.status === 200) {
  //       console.log('success', resp);
  //       this.props.history.push('/')
  //     } else {
  //       console.log('fail', resp);
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //
  //   this.setState({ username: '', password: '', repeatPassword: '' });
  //
  // }

  render() {
    return (
      <div className="register-page">
        <div className="register-wrapper">
          <h2>Register</h2>
              <div>
                  <label>Username</label>
                  <input type="text" name="username" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
              </div>
              <div>
                  <label>Password</label>
                  <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
              </div>
              <div>
                  <label>Repeat Password</label>
                  <input type="password" name="repeatPassword" value={this.state.repeatPassword} onChange={(e) => this.setState({repeatPassword: e.target.value})}/>
              </div>
              <Link to='/'>
                <button className="red-button">Register</button>
              </Link>
              <Link to='/'>
                <button className="red-button">Cancel</button>
              </Link>
        </div>
      </div>
    );
  }
}

export default Register;
