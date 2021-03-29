import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    render() {
        const { errors } = this.state;
        return ( 
            <div className="limiter">
            <div className="container-login100">
                
    
                <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                    
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-59">
                            Login To Your Account
                        </span>
    
                        
    
                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <span className="label-input100">Email Address</span>
                            <input className="input100" type="text" name="email" placeholder="Email addess..."/>
                            <span className="focus-input100"></span>
                        </div>
    
                    
                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <span className="label-input100">Password</span>
                            <input className="input100" type="text" name="pass" placeholder="*************"/>
                            <span className="focus-input100"></span>
                            
                        </div>
                        <div className="w-full text-right">
                        <a href="#" className="txt2 bo1 m-l-5">
                            Forgot password?
                        </a>
                        </div>
                    
                    
                        
    
    
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn">
                                    LOG IN
                                </button>
                            </div>
                            
                            
                        </div>
                        <div className="wrapper">
                        
                            <button className="btn btn-primar"><i className="fa fa-facebook icon" aria-hidden="true"></i>Sign up with Facebook</button>
                          </div>
                          <div className="wrapper">
                            <button className="btn1 btn-primar">	<a href="#" className="btn-google m-b-20">
                                <img src="images/icons/icon-google.png" alt="GOOGLE"/>
                                Sign up with google
                            </a></button>
                          </div>
                          <div className="w-full text-center p-t-30">
                            <span className="txt1">
                                Do not have an account?
                            </span>
    
                            <a href="#" className="txt2 bo1">
                                Create an Account
                            </a>
                        </div>
                        
                        
    
                    </form>
                </div>
                <div className="login100-more" style="background-image: url('images/Login.jpg');">
                </div>
    
            </div>
        </div>
        
        
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);



