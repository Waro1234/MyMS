import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: [],
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

    register(event) {
        event.preventDefault();
        var form = new FormData(this.refs.form);
        Axios.get("https://jsonip.com").then((res) => {
            form.set('ip', res.data.ip)
            Axios.post('join', form).then((response) => {
                console.log(response.data);
    
                if (response.data.success) {
                    console.log("Success");
                    this.props.openPopup("Welcome!", "Your account has been registered successfully. We're glad to have you on board!");
                    this.props.close();
                } else {
                    this.setState({error: response.data.error});
    
                    console.log(response.data.error);
                    console.log("Failure");
                }
            });
        })
    }

    /*recaptchaOnChange(value) {
        console.log("Captcha value:", value);
    }*/

    render() {
        if (!this.props.open) {
            this.state = {
                error: []
            };
            return null;
        }

        if (this.state.error.length) {
            var alert = (
                <div className="alert">{this.state.error}</div>
            );
        }

        return (
            <div className="join">
                <form onSubmit={this.register.bind(this)} ref="form">
                    <div className="prompt-close" onClick={this.props.close}>&#10006;</div>
                    <div className="prompt-title">Join {Config.server_name}</div>
                    <div>
                        <label htmlFor="usernamename">Username</label>
                        <input className="text" name="username" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="text" name="email" type="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="password" name="password" type="password" />
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm</label>
                        <input className="confirm" name="password_confirmation" type="password" />
                    </div>
                    <div>
                        <label htmlFor="bd">Birthday</label>
                        <input className="bd" name="bd" type="date" />
                        <input classname="ip" name="ip" type="hidden" />
                    </div>

                    {alert}
                    <div>
                        <input className="button" type="submit" value="Join" />
                    </div>
                </form>
            </div>
        );
    }
}
/*
                    <div className="repatcha-container">
                        <ReCAPTCHA className="recaptcha" ref="recaptcha" onChange={this.recaptchaOnChange} sitekey={Config.recaptcha_key} />
                    </div>*/

export default Join;
