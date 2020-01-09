import React, {Component} from 'react';
import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";

//redux related
import { connect } from 'react-redux'
import { setAlert } from "../../actions/alert";

class SignIn extends Component {

    state = {
      email: '',
      password: ''
    };

    handleSubmit = async event => {
       event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    };

    handleChange = event => {
      const { value, name } = event.target;

      this.setState({
          [name]: value
      });
    };

    render() {
        const {email, password} = this.state;

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <label>Email</label>
                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={password}
                        label="password"
                        required
                    />
                    <CustomButton type="submit" value="Submit Form"> Sign In </CustomButton>
                </form>

            </div>
        );
    }
}

export default connect(null, { setAlert })(SignIn);
