import React from "react";
import axios from "axios";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      error: false
    };
  }
  handleClick = async (id) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      this.setState({
        userData: response.data,
        error: false
      });
    } catch (error) {
      this.setState({
        userData: null,
        error: true
      });
    }
  };
  render() {
    const { userData, error } = this.state;
    return (
      <div>
        <div className="button-details">
          <button onClick={() => this.handleClick(1)}>1</button>
          <button onClick={() => this.handleClick(2)}>2</button>
          <button onClick={() => this.handleClick(3)}>3</button>
          <button onClick={() => this.handleClick(4)}>4</button>
          <button onClick={() => this.handleClick(5)}>5</button>
          <button onClick={() => this.handleClick(6)}>6</button>
          <button onClick={() => this.handleClick(7)}>7</button>
          <button onClick={() => this.handleClick(8)}>8</button>
          <button onClick={() => this.handleClick(9)}>9</button>
          <button onClick={() => this.handleClick(10)}>10</button>
          <button onClick={() => this.handleClick(11)}>11</button>
        </div>

        {error && (
          <div className="label-list">
            <label>Name: </label>
            <label>Username: </label>
            <label>Email: </label>
            <label>Address: </label>
            <label>Phone: </label>
            <label>Website: </label>
            <label>Company: </label>
          </div>
        )}
        {userData && (
          <ul>
            <li>Name: {userData.name}</li>
            <li>Username: {userData.username}</li>
            <li>Email: {userData.email}</li>
            <li>
              Address: {userData.address.street}, {userData.address.city}
            </li>
            <li>Phone: {userData.phone}</li>
            <li>Website: {userData.website}</li>
            <li>Company: {userData.company.name}</li>
          </ul>
        )}
        {error && alert("failed to fetch data")}
      </div>
    );
  }
}

export default UserDashboard;
