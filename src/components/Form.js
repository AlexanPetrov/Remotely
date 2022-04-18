import styled from "styled-components";
import { useState } from "react";
import ReactDOM from 'react-dom';


const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 20px;
  margin: 10px;
  width: 692px;
  height: 814px;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const Form = () => {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  
  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <h3>POST A JOB</h3>
        
        <label>COMPANY NAME
          <input 
            type="text" 
            name="name" 
            value={inputs.name || ""} 
            onChange={handleChange}
          />
        </label>

        <label>JOB TITLE
          <input 
            type="text" 
            name="title" 
            value={inputs.title || ""} 
            onChange={handleChange}
          />
        </label>

        <label>JOB DESCRIPTION
          <input 
            type="text" 
            name="description" 
            value={inputs.description || ""} 
            onChange={handleChange}
          />
        </label>

        <label>SALARY / YEAR
          <input 
            type="number" 
            name="salary" 
            value={inputs.salary || ""} 
            onChange={handleChange}
          />
        </label>

        <label>JOB TYPE
          <input 
            type="checkbox" 
            name="type" 
            value={inputs.type || ""} 
            onChange={handleChange}
          />FULL-TIME
          <input 
            type="checkbox" 
            name="type" 
            value={inputs.type || ""} 
            onChange={handleChange}
          />PART-TIME
          <input 
            type="checkbox" 
            name="type" 
            value={inputs.type || ""} 
            onChange={handleChange}
          />INTERNSHIP
          <input 
            type="checkbox" 
            name="type" 
            value={inputs.type || ""} 
            onChange={handleChange}
          />CONTRACT
          <input 
            type="checkbox" 
            name="type" 
            value={inputs.type || ""} 
            onChange={handleChange}
          />OTHER
        </label>

        <label>JOB LOCATION
          <select value={inputs.location || ""} onChange={handleChange}>
            <option value="NY">New York</option>
            <option value="SF">San Francisco</option>
            <option value="P">Paris</option>
            <option value="T">Tokio</option>
          </select>
        </label>

        <label>JOB LEVEL
          <input 
            type="text" 
            name="level" 
            value={inputs.level || ""} 
            onChange={handleChange}
          />
        </label> 

          <input type="submit" />
      </form>
    </FormDiv>
  )
}

export default Form

ReactDOM.render(<Form />, document.getElementById('root'));