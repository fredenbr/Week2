import './EmployeeForm.css';
import React, { Component } from 'react';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', title: '', department: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Log the data before adding it
  console.log("Form submitted with data:", {
    name: this.state.name,
    email: this.state.email,
    title: this.state.title,
    department: this.state.department,
  });
    
    // Call the addEmployee function passed down from App.js and pass form data
    this.props.addEmployee({
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      department: this.state.department,
    });

    // Clear form fields after submission
    this.setState({ name: '', email: '', title: '', department: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <label>Job Title:</label>
          <input 
            type="text" 
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <label>Department:</label>
          <input 
            type="text" 
            name="department" 
            value={this.state.department} 
            onChange={this.handleChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;

