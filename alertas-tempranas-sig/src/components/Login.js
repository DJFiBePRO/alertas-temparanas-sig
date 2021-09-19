import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Leyenda from "./Leyenda";
const CLIENT_ID =
  "140733596270-rgj1ppnggaioc6h7hi5d4rn3s6mh0eqf.apps.googleusercontent.com";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
    };
    
    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    if (response.accessToken) {
      console.log(response.profileObj);
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.profileObj.name,
      }));
    }
  }

  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }

  handleLoginFailure(response) {
    alert("No se ha podido iniciar la sesión");
  }

  handleLogoutFailure(response) {
    alert("No se ha podido cerrar la sesión");
  }

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Cerrar Sesión"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Iniciar Sesión"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            isSignedIn={true} 
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />          
          
        )}
        {this.state.accessToken ? (
          <h5>
           <br /> {this.state.accessToken}
          </h5>
        ) : null}
      </div>
    );
  }
}

export default Login;
