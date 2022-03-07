import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uniqueId } from "lodash";
import { INPUT_CITY_REQUEST } from "../../constants";

const InputForm = () => {
  const dispatch = useDispatch();
  // const [id, setId] = useState(0);
  const [city, setCity] = useState("");
  const [degree, setDegree] = useState("metric");

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    // setId(uniqueId());
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // console.log(id, city, degree);
    dispatch({ type: INPUT_CITY_REQUEST, 'id': uniqueId(), city, degree });
  };

  const handleRadio = (e) => {
    setDegree(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="input__form">
        <input
          onChange={handleChange}
          name="city"
          type="text"
          className="input__form-input"
          placeholder="city name"
        />
        <button type="submit" className="input__form-btn">
          submit
        </button>

        <input onChange={handleRadio} type="radio" id="C" name="degree" value="metric" />
        {/* {/* <label htmlfor="C">Celsius</label>  */}

        <input onChange={handleRadio} type="radio" id="F" name="degree" value="imperial" />
        {/* <label htmlfor="F">Fahrenheit</label> */}
      </form>
    </div>
  );
};

export default InputForm;
