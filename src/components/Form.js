import React from "react";

import { validation } from "../utils/validation";
import history from "../router/history";
import "../css/form.css";

class Form extends React.Component {
  state = {
    name: "",
    address: "",
    phone: "",
    email: "",
    options: [
      "Free shipping",
      "Express shipping - additional 9.99$",
      "Courier shipping - additional 19,99$"
    ],
    errors: {
      name: {
        text: "",
        isValid: false
      },
      address: {
        text: "",
        isValid: false
      },
      phone: {
        text: "",
        isValid: false
      },
      email: {
        text: "",
        isValid: false
      }
    }
  };

  handleChange = e => {
    this.setState(
      {
        [e.name]: e.value
      },
      () => {
        this.validate(e.name, e.value);
      }
    );
  };

  validate = (type, value) => {
    const isValid = validation(type, value);
    if (isValid.text.length) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          [isValid.type]: {
            text: isValid.text,
            isValid: false
          }
        }
      }));
    } else
      this.setState({
        errors: {
          ...this.state.errors,
          [isValid.type]: {
            text: isValid.text,
            isValid: true
          }
        }
      });
  };

  clickSubmit = e => {
    e.preventDefault();
    alert("you've successfully purchased...whatever you've purchased");
    setTimeout(() => {
      history.push("/cart");
    }, 1000);
  };

  render() {
    const { total } = this.props;
    const { name, address, phone, email } = this.state.errors;

    return (
      <div className="form">
        <div className="container">
          <form>
            <div className="line">
              <label>Name*</label>
              <div className="input-line-wrap">
                <input
                  name="name"
                  type="text"
                  maxLength="20"
                  className="input-line"
                  onChange={e => this.handleChange(e.target)}
                  required
                />
                {name.text ? <div className="error">{name.text}</div> : null}
              </div>
            </div>

            <div className="line">
              <label>Address*</label>
              <div className="input-line-wrap">
                {" "}
                <input
                  name="address"
                  type="text"
                  maxLength="20"
                  className="input-line"
                  onChange={e => this.handleChange(e.target)}
                  required
                />
                {address.text ? (
                  <div className="error">{address.text}</div>
                ) : null}
              </div>
            </div>
            <div className="line">
              <label>Phone</label>
              <div className="input-line-wrap">
                <input
                  name="phone"
                  type="tel"
                  maxLength="10"
                  placeholder="+380"
                  className="input-line"
                  onChange={e => this.handleChange(e.target)}
                />
                {phone.text ? <div className="error">{phone.text}</div> : null}
              </div>
            </div>
            <div className="line">
              <label>E-mail</label>
              <div className="input-line-wrap">
                <input
                  name="email"
                  type="email"
                  className="input-line"
                  onChange={e => this.handleChange(e.target)}
                />
                {email.text ? <div className="error">{email.text}</div> : null}
              </div>
            </div>
            <div className="line">
              <label>Shipping Options</label>
              <div className="input-line-wrap">
                <select className="input-line">
                  {total > 350 ? (
                    <option>Free express Shipping</option>
                  ) : (
                    this.state.options.map(o => <option>{o}</option>)
                  )}
                </select>
              </div>
            </div>
            <div className="line">
              <button
                disabled={
                  !name.isValid &&
                  !address.isValid &&
                  !phone.isValid &&
                  !email.isValid
                }
                className={
                  name.isValid &&
                  address.isValid &&
                  phone.isValid &&
                  email.isValid
                    ? "input-line submit-btn btn-active"
                    : "input-line submit-btn"
                }
                onClick={e => this.clickSubmit(e)}
              >
                <strong>Pay</strong>
              </button>
            </div>
            <div className="line" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
