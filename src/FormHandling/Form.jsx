import { Component } from "react";

import "./Form.css";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      comment: "",
      isChecked: true,
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
      () => console.log(this.state.users)
    );
  };

  render() {
    const { username, email, password, comment, isChecked, topic } = this.state;

    const inputs = [
      {
        id: 1,
        value: username,
        name: "username",
        type: "text",
        placeholder: "Username",
      },
      {
        id: 2,
        value: password,
        name: "password",
        type: "password",
        placeholder: "password",
      },
      {
        id: 3,
        value: email,
        name: "email",
        type: "email",
        placeholder: "Email",
      },
      {
        id: 4,
        value: isChecked,
        name: "isChecked",
        type: "checkbox",
        checked: isChecked,
      },
    ];

    return (
      <form onSubmit={this.handelSubmit}>
        {inputs.map((input) => (
          <Input key={input.id} {...input} handelInput={this.handelInput} />
        ))}

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
