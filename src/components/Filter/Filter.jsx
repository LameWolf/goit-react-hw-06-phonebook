import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filterText = useSelector(state => state.filterText);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name:
      <Input type="text" value={filterText} onChange={handleChange} />
    </Label>
  );
};

export default Filter;
