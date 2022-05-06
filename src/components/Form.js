import styled from "styled-components";
import { useState } from "react";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  form {
    width: 100%;
    padding-bottom: 30px;
  }
  h2 {
    letter-spacing: 3.53333px;
    color: black;
  }
  .submitBtn {
    display: flex;
  }
  input[type="submit"] {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    background: rgb(253, 121, 96);
    background: linear-gradient(90deg, #fd7960 3.27%, #e15ad8 100%);
    padding: 10px 0;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 15px;
  }
  lineBreak {
    display: block;
    margin-bottom: 7px;
  }
  span {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const InputDiv = styled.div`
  padding: 8px 0px;

  input,
  label,
  select {
    display: block;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    color: #555555;
    padding: 5px 0px;
    border-radius: 8px;
    border-width: 0.7px;
  }
  label {
    font-weight: 500;
    padding-right: 50px;
  }

  .jobTypeLabel {
    display: inline-block;
  }

  fieldset {
    border: 0;
    display: flex;
    flex-wrap: wrap;
    label {
      margin-top: 3px;
      padding-left: 5px;
    }
  }
  .fieldset_input {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .textFieldBox {
    width: 100%;
    padding-left: 15px;
    background-color: transparent;
  }
  #description {
    background-color: transparent;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    color: #555555;
    padding-left: 10px;
    border-radius: 8px;
    border-width: 0.7px;
    height: 80px;
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
      const body = { inputs };
      const res = await fetch("http://localhost:5001/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <h2>POST A JOB</h2>
        {/*  */}

        {/*  */}
        <InputDiv>
          <label>
            COMPANY NAME
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
              placeholder="GOOGLE"
              className="textFieldBox"
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
              className="textFieldBox"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            JOB DESCRIPTION
            <textarea
              name="text"
              id="description"
              className="textFieldBox"
              wrap="soft"
            ></textarea>
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            SALARY / YEAR
            <input
              type="number"
              name="minSalary"
              placeholder="MIN"
              className="textFieldBox"
              min="0"
            />
            <lineBreak />
            <input
              type="number"
              name="maxSalary"
              placeholder="Max (Optional)"
              className="textFieldBox"
              min="0"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label for="heading">JOB TYPE</label>
          <fieldset>
            {/* <span> */}
            <div className="fieldset_input">
              <input type="radio" id="fulltime" name="drone" value="fulltime" />
              <label for="fulltime">FULL-TIME</label>
            </div>

            <div className="fieldset_input">
              <input type="radio" id="partTime" name="drone" value="partTime" />
              <label for="partTime">PART-TIME</label>
            </div>
            {/* </span> */}
            {/* <span> */}

            <div className="fieldset_input">
              <input
                type="radio"
                id="internship"
                name="drone"
                value="internship"
                placeholder="Optional"
              />
              <label for="internship">INTERNSHIP</label>
            </div>
            <div className="fieldset_input">
              <input type="radio" id="contract" name="drone" value="contract" />
              <label for="contract">CONTRACT</label>
            </div>
            <div className="fieldset_input">
              <input type="radio" id="other" name="drone" value="other" />
              <label for="other">OTHER</label>
            </div>
            {/* </span> */}
          </fieldset>
        </InputDiv>

        <InputDiv>
          <label>
            JOB LOCATION
            <select
              value={inputs.location || ""}
              onChange={handleChange}
              className="textFieldBox"
            >
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
              className="textFieldBox"
            />
          </label>
        </InputDiv>
        <div className="submitBtn">
          <input type="submit" />
        </div>
      </form>
    </FormDiv>
  );
};

export default Form;
