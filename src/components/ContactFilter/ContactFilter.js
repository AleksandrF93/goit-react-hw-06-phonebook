import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';

export default function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
    return (
        <label>
        Find contacts by name
        <input type="text" value={value} onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}></input>
    </label>
    )  
};

Filter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func
 };