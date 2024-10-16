import React, { useState, useEffect } from 'react';  // Import useState and useEffect
import './App.css';
import EmployeeForm from './components/EmployeeForm';
// Ensure there's no logo import here
// import logo from './logo.svg'; // Remove this line if it exists

function App() {
  // Step 1: Add state to store employees
  const [employees, setEmployees] = useState([]);

  // Step 2: Add employee to state
  const addEmployee = (newEmployee) => {
    console.log("New employee added:", newEmployee); // Log the new employee being added
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);  // Save to local storage whenever a new employee is added
  };

  // Step 3: Save employees array to local storage
  const saveData = (employeeData) => {
    console.log("Saving to local storage:", employeeData); // Log data being saved
    localStorage.setItem('employees', JSON.stringify(employeeData));  // Save data as JSON string
  };

  // Step 4: Load employee data from local storage when the app loads
  const loadData = () => {
    const storedEmployees = localStorage.getItem('employees');
    console.log("Loading data from local storage:", storedEmployees); // Log loaded data
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));  // Parse data back to array and set state
    }
  };

  // Step 5: Use useEffect to load data from local storage on app load
  useEffect(() => {
    loadData();  // Load data once when the component mounts
  }, []);

  // Step 6: Render the form and employee list
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Information</h1>
        {/* Pass the addEmployee function to EmployeeForm */}
        <EmployeeForm addEmployee={addEmployee} />  

        {/* Display employee list */}
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              {employee.name} - {employee.department} - {employee.title} - {employee.email}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
