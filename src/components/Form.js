import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        company_name: e.target.name.value,
        title: e.target.title.value,
        description: e.target.description.value,
        min_salary: e.target.minSalary.value,
        max_salary: !(e.target.maxSalary.value > 0)
          ? null
          : e.target.maxSalary.value,
        type: e.target.jobType.value,
        location: e.target.location.value,
        level: e.target.level.value,
      };

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(res.status);
      if (res.status === 500) {
        alert("Something went wrong");
      } else {
        alert("Job posted successfully");
        navigate("/search");
      }
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
              name="description"
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
            {/* <lineBreak /> */}
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
          <label htmlFor="heading">JOB TYPE</label>
          <fieldset onChange={handleChange}>
            {/* <span> */}
            <div className="fieldset_input">
              <input
                type="radio"
                id="fulltime"
                name="jobType"
                value="full-time"
              />
              <label htmlFor="fulltime">FULL-TIME</label>
            </div>

            <div className="fieldset_input">
              <input
                type="radio"
                id="partTime"
                name="jobType"
                value="part-time"
              />
              <label htmlFor="partTime">PART-TIME</label>
            </div>
            {/* </span> */}
            {/* <span> */}

            <div className="fieldset_input">
              <input
                type="radio"
                id="internship"
                name="jobType"
                value="internship"
                placeholder="Optional"
              />
              <label htmlFor="internship">INTERNSHIP</label>
            </div>
            <div className="fieldset_input">
              <input
                type="radio"
                id="contract"
                name="jobType"
                value="contract"
              />
              <label htmlFor="contract">CONTRACT</label>
            </div>
            <div className="fieldset_input">
              <input type="radio" id="other" name="jobType" value="other" />
              <label htmlFor="other">OTHER</label>
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
              name="location"
            >
              <option value="Anywhere">Anywhere</option>
              <option value="US Only">USA Only</option>
              <option value="New York">New York</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Austin">Austin</option>
              <option value="Miami">Miami</option>
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
