import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { uniqueId } from "lodash"
import { GET_CITIES_REQUEST, DELETE_CITY_REQUEST } from '../../constants';

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
})

const CitiesView = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const { cities } = props;
  // console.log('cities', cities)

  useEffect(() => {
    dispatch({ type: GET_CITIES_REQUEST });
    // eslint-disable-next-line 
}, [])

const handleDelete = (id) => () => {
  setId(uniqueId())
  dispatch({ type: DELETE_CITY_REQUEST, id})
}

  return (
    <div>
      Hello Obi!!!
      {cities !== undefined
        ? cities.cities.map(({id, city, degrees}, i) => (
            <div key={i}>
              {i} {id} {city} {degrees}
              <button onClick={handleDelete(i)} type='button' value={i}>X</button>
            </div>
          ))
        : null}
    </div>
  );
};

export default connect(mapStateToProps)(CitiesView);
