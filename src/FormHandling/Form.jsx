import { Component } from "react";

import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      comment: "",
      isChecked: false,
      topic: "react",
      users: [],
    };
  }

  handelInput = (e) => {
    this.setState(() => {
      const value =
        e.target.type === "checkbox" ? !this.state.isChecked : e.target.value;
      return {
        [e.target.name]: value,
      };
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, comment, isChecked, topic, users } =
      this.state;

    this.setState(
      () => {
        return {
          users: [
            ...users,
            {
              username,
              email,
              password,
              comment,
              isChecked,
              topic,
            },
          ],
        };
      },
      () => console.log(users)
    );
  };

  render() {
    const { username, email, password, comment, isChecked, topic } = this.state;
    return (
      <form onSubmit={this.handelSubmit}>
        <div className="input-field">
          <input
            value={username}
            onChange={this.handelInput}
            name="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="input-field">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handelInput}
          />
        </div>
        <div className="input-field">
          <input
            value={email}
            onChange={this.handelInput}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input-field">
          <input
            type="checkbox"
            name="isChecked"
            value={isChecked}
            onChange={this.handelInput}
          />
        </div>
        <select
          style={{ height: "30px" }}
          className="input-field"
          name="topic"
          value={topic}
          onChange={this.handelInput}
        >
          <option value="react">react</option>
          <option value="angular">angular</option>
          <option value="vue">vue</option>
        </select>
        <div className="input-field">
          <textarea
            style={{ width: "100%", height: "50px" }}
            value={comment}
            onChange={this.handelInput}
            name="comment"
            type="text"
            placeholder="Email"
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;
