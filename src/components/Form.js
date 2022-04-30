import styled from "styled-components";
import { useState } from "react";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 20px;
  width: 692px;
  height: 814px;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const InputDiv = styled.div`
  input,
  label,
  select {
    display: block;
  }

  .jobTypeLabel {
    display: inline-block;
  }
  fieldset {
    display: flex;
  }
`;

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {inputs};
      const res = await fetch("http://localhost:5001/jobs", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <h3>POST A JOB</h3>
        <InputDiv>
          <label>
            COMPANY NAME
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
              placeholder="GOOGLE"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            JOB TITLE
            <input
              type="text"
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
              placeholder="SOFTWARE ENGINEER"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            JOB DESCRIPTION
            <input
              type="text"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
              placeholder="DESCRIBE THE JOB"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            SALARY / YEAR
            <input
              type="number"
              name="minSalary"
              value={inputs.salary || ""}
              onChange={handleChange}
              placeholder="MIN"
            />
            <input
              type="number"
              name="maxSalary"
              value={inputs.salary || ""}
              onChange={handleChange}
              placeholder="Max (Optional)"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label for="heading">JOB TYPE</label>
          <fieldset>
            <div>
              <input type="radio" id="fulltime" name="drone" value="fulltime" />
              <label for="fulltime">FULL-TIME</label>
            </div>

            <div>
              <input type="radio" id="partTime" name="drone" value="partTime" />
              <label for="partTime">PART-TIME</label>
            </div>

            <div>
              <input
                type="radio"
                id="internship"
                name="drone"
                value="internship"
                placeholder="Optional"
              />
              <label for="internship">INTERNSHIP</label>
            </div>
            <div>
              <input type="radio" id="contract" name="drone" value="contract" />
              <label for="contract">CONTRACT</label>
            </div>
            <div>
              <input type="radio" id="other" name="drone" value="other" />
              <label for="other">OTHER</label>
            </div>
          </fieldset>
        </InputDiv>

        <InputDiv>
          <label>
            JOB LOCATION
            <select value={inputs.location || ""} onChange={handleChange}>
              <option value="NY">New York</option>
              <option value="SF">San Francisco</option>
              <option value="P">Paris</option>
              <option value="T">Tokio</option>
            </select>
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            JOB LEVEL
            <input
              type="text"
              name="level"
              value={inputs.level || ""}
              onChange={handleChange}
              placeholder="Entry"
            />
          </label>
        </InputDiv>

        <input type="submit" />
      </form>
    </FormDiv>
  );
};

export default Form;
